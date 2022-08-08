import {DetailRecipe} from 'src/services/api/types';
import {createSlice} from '@reduxjs/toolkit';

type InitialState = {
  editableRecipe: DetailRecipe;
};

const initialState: InitialState = {
  editableRecipe: {
    id: '0',
    name: '',
    description: '',
    cover: null,
    ingredients: [],
    steps: [],
  },
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    // TODO: Add reducers here
    // TODO: Move all the logic with new recipe here
  },
});

export const recipeActions = recipeSlice.actions;
export const recipeReducer = recipeSlice.reducer;
