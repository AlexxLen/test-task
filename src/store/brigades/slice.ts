import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBrigade } from '../../models/IBrigade';
import { filterBrigades } from '../../utils/filterBrigades.ts';
import { Status } from '../types.ts';
import { fetchBrigades } from './asyncActions.ts';
import { BrigadeSliceState } from './types.ts';

const initialState: BrigadeSliceState = {
  items: [],
  filteredItems: [],
  filter: {
    connectionId: null,
    departmentId: null,
  },
  status: Status.IDLE,
  error: null,
};

const brigadesSlice = createSlice({
  name: 'brigades',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IBrigade[]>) {
      state.items = action.payload;
    },
    setFilter(
      state,
      action: PayloadAction<{ connectionId: number | null; departmentId: number | null }>,
    ) {
      state.filter = action.payload;
      state.filteredItems = filterBrigades(state.items, state.filter);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBrigades.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchBrigades.fulfilled, (state, action) => {
      state.items = action.payload;
      state.filteredItems = filterBrigades(state.items, state.filter);
      state.status = Status.SUCCEEDED;
    });
    builder.addCase(fetchBrigades.rejected, (state) => {
      state.status = Status.FAILED;
      state.items = [];
    });
  },
});

export const { setItems, setFilter } = brigadesSlice.actions;
export default brigadesSlice.reducer;
