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
  RecipeEdit: {
    recipeId: string | null;
  };
  RecipeDetail: {
    recipeId: string;
  };
};

export type ProductStackParamList = {
  ProductList: undefined;
  ProductEdit: {
    productId: string | null;
  };
};

// Types for useNavigation
export type DynamicStackNavigationProp = StackNavigationProp<
  ProductStackParamList | RecipeStackParamList
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
  Edit = 'RecipeEdit',
  Detail = 'RecipeDetail',
}

export enum ProductScreens {
  List = 'ProductList',
  Edit = 'ProductEdit',
}
