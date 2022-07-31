import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {NewProduct, Product} from 'src/services/api/types';
import {InitialState, RequestStatus, UpdateProductPayload} from '../types';

const initialState: InitialState<Product> = {
  list: [],
  status: RequestStatus.Idle,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetch(state) {
      state.status = RequestStatus.Loading;
    },
    refresh(state) {
      state.status = RequestStatus.Refreshing;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    create(state, action: PayloadAction<NewProduct>) {
      state.status = RequestStatus.Loading;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update(state, action: PayloadAction<UpdateProductPayload>) {
      state.status = RequestStatus.Loading;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    delete(state, action: PayloadAction<string>) {
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

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
