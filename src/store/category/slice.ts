import {createSlice} from '@reduxjs/toolkit';
import {RequestStatus} from '../types';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    status: RequestStatus.Idle,
    error: null,
  },
  reducers: {
    fetch(state) {
      state.status = RequestStatus.Loading;
    },
    loaded(state, action) {
      state.status = RequestStatus.Succeeded;
      state.list = action.payload;
    },
    failed(state, action) {
      state.status = RequestStatus.Failed;
      state.error = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
