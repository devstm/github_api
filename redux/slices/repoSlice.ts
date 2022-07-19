import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../store';

const initialState: any = {
  data: [],
  pending: false,
  error: false,
  showModal: false,
};

export const getUserReposByLogin = createAsyncThunk(
    'repos/getRepos',
    async (username, thunkAPI) => {
      const userInfo = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const repos = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      return {
        user: userInfo.data,
        repos: repos.data,
      };
    }
  );

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    show: (state) => {
      return {
        ...state,
        showModal: true,
      };
    },
    hide: (state) => {
      return {
        ...state,
        showModal: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserReposByLogin.pending, (state) => {
        state.pending = true;
      })
      .addCase(getUserReposByLogin.fulfilled, (state, { payload }) => {        
        state.pending = false;
        state.data = payload;
      })
      .addCase(getUserReposByLogin.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});
export const selectUser = (state: RootState) => state.repos;
export const { show, hide } = reposSlice.actions;
export default reposSlice.reducer;
