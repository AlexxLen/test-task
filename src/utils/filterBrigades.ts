import { IBrigade } from '../models/IBrigade';

export const filterBrigades = (
  items: IBrigade[],
  filter: { connectionId: number | null; departmentId: number | null },
) => {
  return items.filter((item) => {
    const matchConnectionId =
      filter.connectionId === null ||
      filter.connectionId === undefined ||
      item.connectionStateId === filter.connectionId;
    const matchDepartmentId =
      filter.departmentId === null ||
      filter.departmentId === undefined ||
      item.department.id === filter.departmentId;
    return matchConnectionId && matchDepartmentId;
  });
};
