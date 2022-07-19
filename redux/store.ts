import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import prsSlice from './slices/prsSlice';
import repoSlice from './slices/repoSlice';
import userSlice from './slices/userSlice';
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    users: userSlice,
    repos: repoSlice,
    prs: prsSlice
  },
  middleware: [thunkMiddleware],

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
