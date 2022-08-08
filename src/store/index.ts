import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {watchCategory} from './category/sagas';
import {categoryActions, categoryReducer} from './category/slice';
import {watchProduct} from './product/sagas';
import {productActions, productReducer} from './product/slice';
import {recipeActions, recipeReducer} from 'src/store/recipe/slice';
import {watchRecipe} from 'src/store/recipe/sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  recipe: recipeReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

export function* watchAll() {
  yield all([watchCategory(), watchProduct(), watchRecipe()]);
}
sagaMiddleware.run(watchAll);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store, categoryActions, productActions, recipeActions};
