import {StackNavigationProp} from '@react-navigation/stack';

// Navigator Types
export type RootStackParamList = {
  RootAuth: undefined;
  RootDrawer: undefined;
  RootError: undefined;
};

export type DrawerParamList = {
  DrawerMealPlan: undefined;
  DrawerShopping: undefined;
  DrawerRecipe: undefined;
  DrawerProduct: undefined;
};

export type RecipeStackParamList = {
  RecipeList: undefined;
  RecipeSearch: undefined;
};

export type ProductStackParamList = {
  ProductList: undefined;
  ProductEdit: {
    productId: string | null;
  };
};

export type MealPlanParamList = {
  WeekPlan: undefined;
};

export type CommonParamList = {
  CommonRecipeDetail: {
    recipeId: string;
  };
  CommonRecipeEdit: {
    fromDetail: boolean;
  };
  CommonSearchIngredient: undefined;
};

// Types for useNavigation
export type DynamicStackNavigationProp = StackNavigationProp<
  ProductStackParamList | RecipeStackParamList | MealPlanParamList
>;

// Screen Names
export enum RootScreens {
  Auth = 'RootAuth',
  Drawer = 'RootDrawer',
  Error = 'RootError',
}

export enum DrawerScreens {
  MealPlan = 'DrawerMealPlan',
  Shopping = 'DrawerShopping',
  Recipe = 'DrawerRecipe',
  Product = 'DrawerProduct',
}

export enum RecipeScreens {
  List = 'RecipeList',
  Search = 'RecipeSearch',
}

export enum ProductScreens {
  List = 'ProductList',
  Edit = 'ProductEdit',
}

export enum MealPlanScreens {
  WeekPlan = 'WeekPlan',
}

export enum CommonScreens {
  RecipeDetail = 'CommonRecipeDetail',
  RecipeEdit = 'CommonRecipeEdit',
  SearchIngredient = 'CommonSearchIngredient',
}
