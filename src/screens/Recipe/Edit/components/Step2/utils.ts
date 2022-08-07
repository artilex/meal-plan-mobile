import {RecipeStep} from 'src/services/api/types';
import React from 'react';

const ADD_STEP = 'ADD_STEP';
const DELETE_STEP = 'DELETE_STEP';
const CHANGE_STEP_TEXT = 'CHANGE_STEP_TEXT';
const CHANGE_STEP_ORDER_NUMBER = 'CHANGE_STEP_ORDER_NUMBER';

export const getStepActions = (dispatch: React.Dispatch<any>) => ({
  addStep: () => {
    dispatch({type: ADD_STEP});
  },
  deleteStep: (id: number) => {
    dispatch({type: DELETE_STEP, id});
  },
  changeText: (id: number, text: string) => {
    dispatch({type: CHANGE_STEP_TEXT, id, text});
  },
});

export const stepReducer = (
  state: RecipeStep[],
  action: {type: string; id?: number; text?: string},
): RecipeStep[] => {
  switch (action.type) {
    case ADD_STEP:
      let nextId = 1;
      for (let step of state) {
        if (step.id >= nextId) {
          nextId = step.id + 1;
        }
      }

      return [
        ...state,
        {
          id: nextId,
          orderNumber: state.length + 1,
          text: '',
          image: '',
        },
      ];
    case DELETE_STEP:
      const steps = state.filter(item => item.id !== action.id);
      let itemOrderNumber = 0;
      return steps.map(item => {
        itemOrderNumber++;

        return {
          ...item,
          orderNumber: itemOrderNumber,
        };
      });
    case CHANGE_STEP_TEXT:
      const currentStep = state.find(item => item.id === action.id);

      if (currentStep) {
        const filteredSteps = state.filter(item => item.id !== action.id);
        currentStep.text = action.text ?? '';

        return [...filteredSteps, currentStep];
      }

      return state;
    case CHANGE_STEP_ORDER_NUMBER:
      // TODO: Implement this later
      return state;
    default:
      return state;
  }
};
