import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IDepartment } from '../../models/IDepartment';

export const fetchDepartments = createAsyncThunk<IDepartment[]>(
  'department/fetchDepartments',
  async () => {
    const response = await axios.get<IDepartment[]>(
      'https://v1336-api-test.onrender.com/getDepartments',
    );

    return response.data;
  },
);
