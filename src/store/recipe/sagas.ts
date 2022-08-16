import {call, put, select, takeLatest} from 'redux-saga/effects';
import {recipeActions} from 'src/store/recipe/slice';
import {PayloadAction} from '@reduxjs/toolkit';
import {
  addRecipeIngredients,
  addRecipeStep,
  changeRecipeInfo,
  changeRecipeIngredient,
  changeRecipeStep,
  createDraftRecipe,
  deleteRecipeIngredient,
  deleteRecipeStep,
  fetchRecipes,
  getRecipeById,
} from 'src/services/api/recipe';
import {
  DetailRecipe,
  DraftRecipe,
  NewRecipeIngredient,
  NewRecipeStep,
  RecipeStep,
} from 'src/services/api/types';
import {RootState} from 'src/store';

const getRecipeId = (state: RootState) => state.recipe.editableRecipe.id;

function* handleFetchRecipes() {
  try {
    const recipes: DetailRecipe[] = yield call(fetchRecipes);
    yield put(recipeActions.listLoaded(recipes));
  } catch ({message}) {
    yield put(recipeActions.listFailed(message));
  }
}

function* handleCreateDraftRecipe({payload}: PayloadAction<DraftRecipe>) {
  try {
    const recipe: DetailRecipe = yield call(createDraftRecipe, payload);
    yield put(recipeActions.loaded(recipe));
  } catch ({message}) {
    yield put(recipeActions.failed(message));
  }
}

function* handleChangeRecipeInfo({payload}: PayloadAction<DetailRecipe>) {
  try {
    const recipe: DetailRecipe = yield call(changeRecipeInfo, payload);
    yield put(recipeActions.loaded(recipe));
  } catch ({message}) {
    yield put(recipeActions.failed(message));
  }
}

function* handleAddRecipeIngredients({
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

function* handleChangeRecipeIngredient({
  payload,
}: PayloadAction<NewRecipeIngredient>) {
  try {
    const recipeId: string = yield select(getRecipeId);
    const recipe: DetailRecipe = yield call(
      changeRecipeIngredient,
      recipeId,
      payload,
    );
    yield put(recipeActions.loaded(recipe));
  } catch ({message}) {
    yield put(recipeActions.failed(message));
  }
}

function* handleDeleteRecipeIngredient({payload}: PayloadAction<string>) {
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

function* handleAddRecipeStep({payload}: PayloadAction<NewRecipeStep>) {
  try {
    const recipeId: string = yield select(getRecipeId);
    const recipe: DetailRecipe = yield call(addRecipeStep, recipeId, payload);
    yield put(recipeActions.loaded(recipe));
  } catch ({message}) {
    yield put(recipeActions.failed(message));
  }
}

function* handleChangeRecipeStep({payload}: PayloadAction<RecipeStep>) {
  try {
    const recipeId: string = yield select(getRecipeId);
    const recipe: DetailRecipe = yield call(
      changeRecipeStep,
      recipeId,
      payload,
    );
    yield put(recipeActions.loaded(recipe));
  } catch ({message}) {
    yield put(recipeActions.failed(message));
  }
}

function* handleDeleteRecipeStep({payload}: PayloadAction<string>) {
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

function* handleGetRecipeById({payload}: PayloadAction<string>) {
  try {
    const recipe: DetailRecipe = yield call(getRecipeById, payload);
    yield put(recipeActions.loaded(recipe));
  } catch ({message}) {
    yield put(recipeActions.failed(message));
  }
}

export function* watchRecipe() {
  yield takeLatest(recipeActions.fetchRecipes.type, handleFetchRecipes);
  yield takeLatest(
    recipeActions.createDraftRecipe.type,
    handleCreateDraftRecipe,
  );
  yield takeLatest(recipeActions.changeRecipeInfo.type, handleChangeRecipeInfo);
  yield takeLatest(
    recipeActions.addIngredients.type,
    handleAddRecipeIngredients,
  );
  yield takeLatest(
    recipeActions.changeIngredient.type,
    handleChangeRecipeIngredient,
  );
  yield takeLatest(
    recipeActions.deleteIngredient.type,
    handleDeleteRecipeIngredient,
  );
  yield takeLatest(recipeActions.addStep.type, handleAddRecipeStep);
  yield takeLatest(recipeActions.changeStep.type, handleChangeRecipeStep);
  yield takeLatest(recipeActions.deleteStep.type, handleDeleteRecipeStep);
  yield takeLatest(recipeActions.getRecipeById.type, handleGetRecipeById);
}
