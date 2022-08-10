import {
  DetailRecipe,
  DraftRecipe,
  NewRecipeIngredient,
  NewRecipeStep,
} from 'src/services/api/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RequestStatus} from 'src/store/types';

type InitialState = {
  editableRecipe: DetailRecipe;
  status: RequestStatus;
  error: string | null;
};

const initialState: InitialState = {
  editableRecipe: {
    id: '',
    name: '',
    description: '',
    ingredients: [],
    steps: [],
    cover: null,
  },
  status: RequestStatus.Idle,
  error: null,
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    // TODO: Investigate action never used, because I need action type, maybe I should use custom reducers
    createDraftRecipe(state, action: PayloadAction<DraftRecipe>) {
      state.status = RequestStatus.Loading;
      state.error = null;
    },
    addIngredients(state, action: PayloadAction<NewRecipeIngredient[]>) {
      state.status = RequestStatus.Loading;
      state.error = null;
    },
    deleteIngredient(state, action: PayloadAction<string>) {
      state.status = RequestStatus.Loading;
      state.error = null;
    },
    addStep(state, action: PayloadAction<NewRecipeStep>) {
      state.status = RequestStatus.Loading;
      state.error = null;
    },
    deleteStep(state, action: PayloadAction<string>) {
      state.status = RequestStatus.Loading;
      state.error = null;
    },
    loaded(state, action: PayloadAction<DetailRecipe>) {
      state.status = RequestStatus.Succeeded;
      state.editableRecipe = action.payload;
    },
    failed(state, action) {
      state.status = RequestStatus.Failed;
      state.error = action.payload;
    },
  },
});

export const recipeActions = recipeSlice.actions;
export const recipeReducer = recipeSlice.reducer;
