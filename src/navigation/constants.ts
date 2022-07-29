import {StackNavigationOptions} from '@react-navigation/stack';
import {DrawerNavigationOptions} from '@react-navigation/drawer';

import s from './components/SideMenu/styles';

export const SCREEN_NAMES = Object.freeze({
  AUTH: {
    ROOT: 'AuthRoot',
  },
  DRAWER: {
    ROOT: 'DrawerRoot',
    MEAL_PLAN: {
      ROOT: 'MealPlanRoot',
    },
    SHOPPING: {
      ROOT: 'ShoppingRoot',
      LIST: 'ShoppingList',
    },
    RECIPE: {
      ROOT: 'RecipeRoot',
    },
    PRODUCT: {
      ROOT: 'ProductRoot',
      LIST: 'ProductListScreen',
      EDIT: 'ProductEdit',
    },
  },
  ERROR: {
    ROOT: 'ErrorRoot',
  },
});

export const RootNavigatorOptions: StackNavigationOptions = {
  headerShown: false,
};

export const DrawerNavigatorOptions: DrawerNavigationOptions = {
  headerShown: false,
  drawerStyle: s.rootContainer,
};

export const ProductNavigatorOptions: StackNavigationOptions = {
  headerShown: true,
};
