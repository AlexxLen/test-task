import { RootState } from '../store';

export const selectBrigadesState = (state: RootState) => state.brigade;

export const selectFilteredBrigades = (state: RootState) => state.brigade.filteredItems;

export const selectConnectionId = (state: RootState) => state.brigade.filter.connectionId;
export const selectDepartmentId = (state: RootState) => state.brigade.filter.departmentId;
export const selectFilter = (state: RootState) => state.brigade.filter;
