import { IConnection } from '../../models/IConnection';
import { Status } from '../types';

export interface ConnectionSliceState {
  items: IConnection[];
  status: Status;
  error: string | null;
}
