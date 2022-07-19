import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../store';

const initialState: any = {
  data: [],
  pending: false,
  error: false,
  showModal: false,
};
export const getPRs = createAsyncThunk(
  'prs/getPRs',
  async (data: any, thunkAPI) => {
    const resp = await axios.get(
      `https://api.github.com/repos/${data.username}/${data.repo}/pulls`
    );
    return resp.data;
  }
);

export const reposSlice = createSlice({
  name: 'pr',
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
      .addCase(getPRs.pending, (state) => {
        state.pending = true;
      })
      .addCase(getPRs.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(getPRs.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});
export const selectUser = (state: RootState) => state.prs;
export const { show, hide } = reposSlice.actions;
export default reposSlice.reducer;
