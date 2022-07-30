import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {watchCategory} from './category/sagas';
import {categoryReducer} from './category/slice';
import {watchProduct} from './product/sagas';
import {productReducer} from './product/slice';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

export function* watchAll() {
  yield all([watchCategory(), watchProduct()]);
}
sagaMiddleware.run(watchAll);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {store};
