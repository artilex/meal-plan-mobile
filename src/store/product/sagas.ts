import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {
  fetchProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from 'src/services/api/product';
import {NewProduct, Product} from 'src/services/api/types';
import {productActions} from './slice';
import {UpdateProductPayload} from '../types';

export function* handleFetchProducts() {
  try {
    const products: Product[] = yield call(fetchProducts);

    yield put(productActions.loaded(products));
  } catch ({message}) {
    yield put(productActions.failed(message));
  }
}

export function* handleCreateProduct({payload}: PayloadAction<NewProduct>) {
  try {
    const products: Product[] = yield call(createProduct, payload);

    yield put(productActions.loaded(products));
  } catch ({message}) {
    yield put(productActions.failed(message));
  }
}

export function* handleUpdateProduct({
  payload,
}: PayloadAction<UpdateProductPayload>) {
  try {
    const products: Product[] = yield call(
      updateProduct,
      payload.productId,
      payload.productData,
    );

    yield put(productActions.loaded(products));
  } catch ({message}) {
    yield put(productActions.failed(message));
  }
}

export function* handleDeleteProduct({payload}: PayloadAction<string>) {
  try {
    const products: Product[] = yield call(deleteProduct, payload);

    yield put(productActions.loaded(products));
  } catch ({message}) {
    yield put(productActions.failed(message));
  }
}

export function* watchProduct() {
  yield takeLatest(productActions.fetch.type, handleFetchProducts);
  yield takeLatest(productActions.refresh.type, handleFetchProducts);
  yield takeLatest(productActions.create.type, handleCreateProduct);
  yield takeLatest(productActions.update.type, handleUpdateProduct);
  yield takeLatest(productActions.delete.type, handleDeleteProduct);
}
