import { Form, Select } from 'antd';
import React from 'react';
import { IConnection } from '../../models/IConnection';
import { IDepartment } from '../../models/IDepartment';
import styles from './BrigadeFilter.module.css';

type BrigadeFilterProps = {
  departments: IDepartment[];
  connections: IConnection[];
  selectedDepartment: number | null;
  selectedConnectionState: number | null;
  onChangeDepartment: (departmentId: number | null) => void;
  onChangeConnection: (departmentId: number | null) => void;
};

const BrigadeFilter: React.FC<BrigadeFilterProps> = ({
  departments,
  connections,
  selectedDepartment,
  selectedConnectionState,
  onChangeDepartment,
  onChangeConnection,
}) => {
  return (
    <Form
      className={styles.form}
      layout="inline">
      <Form.Item
        className={styles.formItem}
        label="Соединение:"
        layout="vertical">
        <Select
          className={styles.select}
          allowClear
          onClear={() => onChangeConnection(null)}
          value={selectedConnectionState}
          onChange={onChangeConnection}>
          {connections.map((connection) => (
            <Select.Option
              key={connection.connectionStateId}
              value={connection.connectionStateId}>
              {connection.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        className={styles.formItem}
        label="Департамент:"
        layout="vertical">
        <Select
          className={styles.select}
          onClear={() => onChangeDepartment(null)}
          allowClear
          value={selectedDepartment}
          onChange={onChangeDepartment}>
          {departments.map((department) => (
            <Select.Option
              key={department.id}
              value={department.id}>
              {department.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default BrigadeFilter;
