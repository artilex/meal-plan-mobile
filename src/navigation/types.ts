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
};

export type ProductStackParamList = {
  ProductList: undefined;
  ProductEdit: {
    productId: string | null;
  };
};

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
}

export enum ProductScreens {
  List = 'ProductList',
  Edit = 'ProductEdit',
}
