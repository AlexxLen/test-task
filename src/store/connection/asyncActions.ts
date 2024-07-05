import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IConnection } from '../../models/IConnection';

export const fetchConnections = createAsyncThunk<IConnection[]>(
  'connection/fetchConnections',
  async () => {
    const response = await axios.get<IConnection[]>(
      'https://v1336-api-test.onrender.com/getConnectionState',
    );

    return response.data;
  },
);
