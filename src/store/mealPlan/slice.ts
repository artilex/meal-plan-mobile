import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DeleteMealPlanItem, MealPlan} from 'src/services/api/types';
import {RequestStatus} from 'src/store/types';

type InitialState = {
  selectedMealPlan: MealPlan;
  status: RequestStatus;
  error: string | null;
};

const initialState: InitialState = {
  selectedMealPlan: {
    id: 0,
    recipes: [],
    products: [],
    day: '',
  },
  status: RequestStatus.Idle,
  error: null,
};

const mealPlanSlice = createSlice({
  name: 'mealPlan',
  initialState,
  reducers: {
    // TODO: Fix styles bellow
    deleteRecipe(state, action: PayloadAction<DeleteMealPlanItem>) {
      state.status = RequestStatus.Loading;
      state.error = null;
    },
    deleteProduct(state, action: PayloadAction<DeleteMealPlanItem>) {
      state.status = RequestStatus.Loading;
      state.error = null;
    },
    fetchMealPlanByDay(state, action: PayloadAction<Date>) {
      state.status = RequestStatus.Loading;
      state.error = null;
    },
    loaded(state, action: PayloadAction<MealPlan>) {
      state.status = RequestStatus.Succeeded;
      state.selectedMealPlan = action.payload ?? initialState.selectedMealPlan;
    },
    failed(state, action) {
      state.status = RequestStatus.Failed;
      state.error = action.payload;
    },
  },
});

export const mealPlanActions = mealPlanSlice.actions;
export const mealPlanReducer = mealPlanSlice.reducer;
