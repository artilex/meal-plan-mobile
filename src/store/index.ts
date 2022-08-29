import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {watchCategory} from './category/sagas';
import {categoryActions, categoryReducer} from './category/slice';
import {watchProduct} from './product/sagas';
import {productActions, productReducer} from './product/slice';
import {watchRecipe} from './recipe/sagas';
import {recipeActions, recipeReducer} from './recipe/slice';
import {watchMealPlan} from './mealPlan/sagas';
import {mealPlanActions, mealPlanReducer} from './mealPlan/slice';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  recipe: recipeReducer,
  mealPlan: mealPlanReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

export function* watchAll() {
  yield all([watchCategory(), watchProduct(), watchRecipe(), watchMealPlan()]);
}
sagaMiddleware.run(watchAll);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store, categoryActions, productActions, recipeActions, mealPlanActions};
