import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IBrigade } from '../../models/IBrigade';

export const fetchBrigades = createAsyncThunk<IBrigade[]>('brigades/fetchBrigades', async () => {
  const response = await axios.get<IBrigade[]>(
    'https://v1336-api-test.onrender.com/getBrigadesData',
  );

  return response.data;
});
