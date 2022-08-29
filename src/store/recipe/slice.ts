import {
  DetailRecipe,
  DraftRecipe,
  NewRecipeIngredient,
  NewRecipeStep,
  RecipeStep,
} from 'src/services/api/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RequestStatus} from 'src/store/types';

type InitialState = {
  editableRecipe: DetailRecipe;
  list: DetailRecipe[];
  status: RequestStatus;
  error: string | null;
};

// TODO: ?Maybe? change this logic to use only redux till save all two steps
//  Store only changes in Redux (addArray, deleteArray, etc.) and request API only on Save once
const initialState: InitialState = {
  editableRecipe: {
    id: '',
    name: '',
    description: '',
    ingredients: [],
    steps: [],
    cover: null,
  },
  list: [],
  status: RequestStatus.Idle,
  error: null,
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    // TODO: Investigate action never used, because I need action type, maybe I should use custom reducers
    fetchRecipes(state) {
      state.status = RequestStatus.Loading;
      state.error = null;
    },
    createDraftRecipe(state, action: PayloadAction<DraftRecipe>) {
      state.status = RequestStatus.Loading;
      state.error = null;
    },
    changeRecipeInfo(state, action: PayloadAction<DetailRecipe>) {
      state.status = RequestStatus.Loading;
      state.error = null;
    },
    addIngredients(state, action: PayloadAction<NewRecipeIngredient[]>) {
      state.status = RequestStatus.Loading;
      state.error = null;
    },
    changeIngredient(state, action: PayloadAction<NewRecipeIngredient>) {
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
    changeStep(state, action: PayloadAction<RecipeStep>) {
      state.status = RequestStatus.Loading;
      state.error = null;
    },
    deleteStep(state, action: PayloadAction<string>) {
      state.status = RequestStatus.Loading;
      state.error = null;
    },
    deleteRecipe(state, action: PayloadAction<string>) {
      state.status = RequestStatus.Loading;
      state.error = null;
    },
    clearRecipe(state) {
      state.editableRecipe = {
        id: '',
        name: '',
        description: '',
        ingredients: [],
        steps: [],
        cover: null,
      };
    },
    saveRecipe() {
      // state.editableRecipe = {
      //   id: '',
      //   name: '',
      //   description: '',
      //   ingredients: [],
      //   steps: [],
      //   cover: null,
      // };
    },
    getRecipeById(state, action: PayloadAction<string | null>) {
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
    listLoaded(state, action: PayloadAction<DetailRecipe[]>) {
      state.status = RequestStatus.Succeeded;
      state.list = action.payload;
    },
    listFailed(state, action) {
      state.status = RequestStatus.Failed;
      state.error = action.payload;
    },
  },
});

export const recipeActions = recipeSlice.actions;
export const recipeReducer = recipeSlice.reducer;
