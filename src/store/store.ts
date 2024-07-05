// import { configureStore } from '@reduxjs/toolkit';
import brigadesReducer from './brigades/slice.ts';
import connectionsReducer from './connection/slice.ts';
import departmentsReducer from './department/slice.ts';
// import pointsReducer from './points/slice';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { pointsAPI } from '../services/PointsService.ts';

// export const store = configureStore({
//   reducer: {
//     brigades: brigadesReducer,
//     departments: departmentsReducer,
//     connections: connectionsReducer,
//     points: pointsReducer,
//   },
// });

const rootReducer = combineReducers({
  department: departmentsReducer,
  connection: connectionsReducer,
  brigade: brigadesReducer,
  [pointsAPI.reducerPath]: pointsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pointsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
