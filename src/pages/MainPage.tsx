import { Alert, Spin } from 'antd';
import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BrigadeFilter from '../components/brigadeFilter/index.tsx';
import BrigadesList from '../components/brigadesList/index.tsx';
import { fetchBrigades } from '../store/brigades/asyncActions.ts';
import { selectBrigadesState, selectFilter } from '../store/brigades/selectors.ts';
import { setFilter } from '../store/brigades/slice.ts';
import { fetchConnections } from '../store/connection/asyncActions.ts';
import { selectConnections } from '../store/connection/selectors.ts';
import { fetchDepartments } from '../store/department/asyncActions.ts';
import { selectDepartments } from '../store/department/selectors.ts';
import { useAppDispatch } from '../store/store.ts';
import { Status } from '../store/types.ts';

const MainPage = () => {
  const { items: connections = [], status: connectionStatus } = useSelector(selectConnections);
  const { items: departments, status: departmentStatus } = useSelector(selectDepartments);
  const { connectionId, departmentId } = useSelector(selectFilter);
  const { filteredItems: brigades, status: brigadeStatus } = useSelector(selectBrigadesState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBrigades());
    dispatch(fetchDepartments());
    dispatch(fetchConnections());
  }, []);

  useEffect(() => {
    console.log('filter');
    dispatch(setFilter({ connectionId, departmentId }));
  }, [connectionId, departmentId]);

  const callbacks = {
    onChangeDepartment: React.useCallback(
      (departmentId: number | null) => {
        dispatch(setFilter({ connectionId, departmentId }));
      },
      [departmentId, connectionId],
    ),
    onChangeConnection: React.useCallback(
      (connectionId: number | null) => {
        dispatch(setFilter({ connectionId, departmentId }));
      },
      [connectionId, departmentId],
    ),
  };

  if (
    brigadeStatus === Status.LOADING ||
    departmentStatus === Status.LOADING ||
    connectionStatus === Status.LOADING
  ) {
    return (
      <Spin
        size="large"
        style={{ width: '100%', marginTop: '100px' }}
      />
    );
  }

  if (
    brigadeStatus === Status.FAILED ||
    departmentStatus === Status.FAILED ||
    connectionStatus === Status.FAILED
  ) {
    return (
      <Alert
        message="Ошибка загрузки данных"
        type="error"
      />
    );
  }
  return (
    <>
      <BrigadeFilter
        departments={departments}
        connections={connections}
        selectedDepartment={departmentId}
        selectedConnectionState={connectionId}
        {...callbacks}
      />
      <BrigadesList items={brigades} />
    </>
  );
};

export default memo(MainPage);
