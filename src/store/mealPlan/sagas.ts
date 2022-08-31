import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';

import {
  addRecipeToMealPlan,
  deleteMealPlanProduct,
  deleteMealPlanRecipe,
  fetchMealPlanByDay,
} from 'src/services/api/mealPlan';
import {
  AddMealPlanItem,
  DeleteMealPlanItem,
  MealPlan,
} from 'src/services/api/types';
import {mealPlanActions} from './slice';

function* handleFetchMealPlanByDay({payload}: PayloadAction<Date>) {
  try {
    const mealPlan: MealPlan = yield call(fetchMealPlanByDay, payload);
    yield put(mealPlanActions.loaded(mealPlan));
  } catch ({message}) {
    yield put(mealPlanActions.failed(message));
  }
}

function* handleAddRecipeToMealPlan({payload}: PayloadAction<AddMealPlanItem>) {
  try {
    const {mealTypeId, recipeIds, day} = payload;

    const mealPlan: MealPlan = yield call(
      addRecipeToMealPlan,
      mealTypeId,
      day,
      recipeIds,
    );

    yield put(mealPlanActions.loaded(mealPlan));
  } catch ({message}) {
    yield put(mealPlanActions.failed(message));
  }
}

function* handleDeleteMealPlanRecipe({
  payload,
}: PayloadAction<DeleteMealPlanItem>) {
  try {
    const {mealPlanId, mealPlanItemId} = payload;

    const mealPlan: MealPlan = yield call(
      deleteMealPlanRecipe,
      mealPlanId,
      mealPlanItemId,
    );

    yield put(mealPlanActions.loaded(mealPlan));
  } catch ({message}) {
    yield put(mealPlanActions.failed(message));
  }
}

function* handleDeleteMealPlanProduct({
  payload,
}: PayloadAction<DeleteMealPlanItem>) {
  try {
    const {mealPlanId, mealPlanItemId} = payload;

    const mealPlan: MealPlan = yield call(
      deleteMealPlanProduct,
      mealPlanId,
      mealPlanItemId,
    );

    yield put(mealPlanActions.loaded(mealPlan));
  } catch ({message}) {
    yield put(mealPlanActions.failed(message));
  }
}

export function* watchMealPlan() {
  yield takeLatest(
    mealPlanActions.fetchMealPlanByDay.type,
    handleFetchMealPlanByDay,
  );
  yield takeLatest(mealPlanActions.addRecipe.type, handleAddRecipeToMealPlan);
  yield takeLatest(
    mealPlanActions.deleteRecipe.type,
    handleDeleteMealPlanRecipe,
  );
  yield takeLatest(
    mealPlanActions.deleteProduct.type,
    handleDeleteMealPlanProduct,
  );
}
