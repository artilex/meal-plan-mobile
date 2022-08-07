import {DetailRecipe, RecipeIngredient} from 'src/services/api/types';
import React from 'react';

const SET_NAME = 'SET_NAME';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const ADD_INGREDIENT = 'ADD_INGREDIENT';
const SET_INGREDIENT_QUANTITY = 'SET_INGREDIENT_QUANTITY';
const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
const ADD_STEPS = 'ADD_STEPS';

export const getRecipeActions = (dispatch: React.Dispatch<any>) => ({
  addIngredient: (data: RecipeIngredient) => {
    dispatch({
      type: ADD_INGREDIENT,
      payload: data,
    });
  },
  setIngredientQuantity: (
    ingredientId: string,
    quantityValue: string,
    quantityUnit: string,
  ) => {
    dispatch({
      type: SET_INGREDIENT_QUANTITY,
      payload: {
        ingredientId,
        quantityValue,
        quantityUnit,
      },
    });
  },
  deleteIngredient: (ingredientId: string) => {
    dispatch({
      type: DELETE_INGREDIENT,
      payload: {
        ingredientId,
      },
    });
  },
});

export const recipeReducer = (
  state: DetailRecipe,
  action: {type: string; ingredientData: RecipeIngredient},
): DetailRecipe => {
  switch (action.type) {
    case SET_NAME:
      return state;
    case SET_DESCRIPTION:
      return state;
    case ADD_INGREDIENT:
      return state;
    case SET_INGREDIENT_QUANTITY:
      return state;
    case DELETE_INGREDIENT:
      return state;
    case ADD_STEPS:
      return state;
    default:
      return state;
  }
};
