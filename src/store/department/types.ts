import { IDepartment } from '../../models/IDepartment';
import { Status } from '../types';

export interface DepartmentSliceState {
  items: IDepartment[];
  status: Status;
  error: string | null;
}
