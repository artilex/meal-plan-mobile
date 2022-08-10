import {call, put, select, takeLatest} from 'redux-saga/effects';
import {recipeActions} from 'src/store/recipe/slice';
import {PayloadAction} from '@reduxjs/toolkit';
import {
  addRecipeIngredients,
  addRecipeStep,
  createDraftRecipe,
  deleteRecipeIngredient,
  deleteRecipeStep,
} from 'src/services/api/recipe';
import {
  DetailRecipe,
  DraftRecipe,
  NewRecipeIngredient,
  NewRecipeStep,
} from 'src/services/api/types';
import {RootState} from 'src/store';

const getRecipeId = (state: RootState) => state.recipe.editableRecipe.id;

export function* handleCreateDraftRecipe({
  payload,
}: PayloadAction<DraftRecipe>) {
  try {
    const recipe: DetailRecipe = yield call(createDraftRecipe, payload);
    yield put(recipeActions.loaded(recipe));
  } catch ({message}) {
    yield put(recipeActions.failed(message));
  }
}

export function* handleAddRecipeIngredients({
  payload,
}: PayloadAction<NewRecipeIngredient[]>) {
  try {
    const recipeId: string = yield select(getRecipeId);
    const recipe: DetailRecipe = yield call(
      addRecipeIngredients,
      recipeId,
      payload,
    );
    yield put(recipeActions.loaded(recipe));
  } catch ({message}) {
    yield put(recipeActions.failed(message));
  }
}

export function* handleDeleteRecipeIngredient({
  payload,
}: PayloadAction<string>) {
  try {
    const recipeId: string = yield select(getRecipeId);
    const recipe: DetailRecipe = yield call(
      deleteRecipeIngredient,
      recipeId,
      payload,
    );
    yield put(recipeActions.loaded(recipe));
  } catch ({message}) {
    yield put(recipeActions.failed(message));
  }
}

export function* handleAddRecipeStep({payload}: PayloadAction<NewRecipeStep>) {
  try {
    const recipeId: string = yield select(getRecipeId);
    const recipe: DetailRecipe = yield call(addRecipeStep, recipeId, payload);
    yield put(recipeActions.loaded(recipe));
  } catch ({message}) {
    yield put(recipeActions.failed(message));
  }
}

export function* handleDeleteRecipeStep({payload}: PayloadAction<string>) {
  try {
    const recipeId: string = yield select(getRecipeId);
    const recipe: DetailRecipe = yield call(
      deleteRecipeStep,
      recipeId,
      payload,
    );
    yield put(recipeActions.loaded(recipe));
  } catch ({message}) {
    yield put(recipeActions.failed(message));
  }
}

export function* watchRecipe() {
  yield takeLatest(
    recipeActions.createDraftRecipe.type,
    handleCreateDraftRecipe,
  );
  yield takeLatest(
    recipeActions.addIngredients.type,
    handleAddRecipeIngredients,
  );
  yield takeLatest(
    recipeActions.deleteIngredient.type,
    handleDeleteRecipeIngredient,
  );
  yield takeLatest(recipeActions.addStep.type, handleAddRecipeStep);
  yield takeLatest(recipeActions.deleteStep.type, handleDeleteRecipeStep);
}
