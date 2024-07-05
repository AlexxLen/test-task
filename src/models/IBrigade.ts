export interface IBrigade {
  id: number;
  brigade_name: string;
  connectionStateId: number;
  department: {
    id: number;
  };
  position: {
    field: string;
    cluster: number;
    well: number;
  };
}
