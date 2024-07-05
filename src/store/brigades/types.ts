import { IBrigade } from '../../models/IBrigade';
import { Status } from '../types';

interface IFilter {
  connectionId: number | null;
  departmentId: number | null;
}

export interface BrigadeSliceState {
  items: IBrigade[];
  filteredItems: IBrigade[];
  filter: IFilter;
  status: Status;
  error: string | null;
}
