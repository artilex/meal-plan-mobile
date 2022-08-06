export type RecipeStep = {
  id: number;
  orderNumber: number;
  text: string;
  image: string | null;
};

export const initStep: RecipeStep = Object.freeze({
  id: 1,
  orderNumber: 1,
  text: '',
  image: '',
});

export const ADD_STEP = 'ADD_STEP';
export const DELETE_STEP = 'DELETE_STEP';
export const CHANGE_STEP_TEXT = 'CHANGE_STEP_TEXT';
export const CHANGE_STEP_ORDER_NUMBER = 'CHANGE_STEP_ORDER_NUMBER';

// TODO: Check and refactor this if will be needed
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

      if (currentStep && action.text) {
        const filteredSteps = state.filter(item => item.id !== action.id);
        currentStep.text = action.text;

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
