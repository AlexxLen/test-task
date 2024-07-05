import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IDepartment } from '../../models/IDepartment.ts';
import { Status } from '../types.ts';
import { fetchDepartments } from './asyncActions.ts';
import { DepartmentSliceState } from './types.ts';

const initialState: DepartmentSliceState = {
  items: [],
  status: Status.IDLE,
  error: null,
};

const departmentSlice = createSlice({
  name: 'department',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IDepartment[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDepartments.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchDepartments.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCEEDED;
    });
    builder.addCase(fetchDepartments.rejected, (state) => {
      state.status = Status.FAILED;
      state.items = [];
    });
  },
});

export const { setItems } = departmentSlice.actions;
export default departmentSlice.reducer;
