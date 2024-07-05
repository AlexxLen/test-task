import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPoint } from '../models/IPoint.ts';

export const pointsAPI = createApi({
  reducerPath: 'pointsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://v1336-api-test.onrender.com/' }),
  endpoints: (build) => ({
    fetchPoints: build.query<IPoint[], number>({
      query: (points = 1000) => ({
        url: '/getPointsFast',
        params: { points },
      }),
    }),
  }),
});
