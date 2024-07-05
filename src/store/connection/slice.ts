import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IConnection } from '../../models/IConnection.ts';
import { Status } from '../types.ts';
import { fetchConnections } from './asyncActions.ts';
import { ConnectionSliceState } from './types.ts';

const initialState: ConnectionSliceState = {
  items: [],
  status: Status.LOADING,
  error: null,
};

const connectionsSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IConnection[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchConnections.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchConnections.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCEEDED;
    });
    builder.addCase(fetchConnections.rejected, (state) => {
      state.status = Status.FAILED;
      state.items = [];
    });
  },
});

export const { setItems } = connectionsSlice.actions;
export default connectionsSlice.reducer;
