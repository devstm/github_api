import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../store';

const initialState: any = {
  data: [],
  pending: false,
  error: false,
};

export const getUserByLogin = createAsyncThunk(
  'users/getUserByLogin',
  async (username: string) => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${username}`
    );
    return response.data.items;
  }
);

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    reset: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserByLogin.pending, (state) => {
        state.pending = true;
      })
      .addCase(getUserByLogin.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(getUserByLogin.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});
export const selectUser = (state: RootState) => state.users;
export const { reset } = userSlice.actions;
export default userSlice.reducer;
