import {FC} from 'react';
import {SvgProps} from 'react-native-svg';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';

import MealPlanIcon from 'src/assets/images/calendar.svg';
import ShoppingIcon from 'src/assets/images/shop-cart.svg';
import RecipeIcon from 'src/assets/images/note-page.svg';
import ProductIcon from 'src/assets/images/cheese.svg';

const Icons: {[key: string]: FC<SvgProps>} = {
  MealPlanRoot: MealPlanIcon,
  ShoppingRoot: ShoppingIcon,
  RecipeRoot: RecipeIcon,
  ProductRoot: ProductIcon,
};

export const getItemIcon = (screenName: string) => {
  return Icons[screenName];
};

export const getNavigateToScreen =
  (navigation: DrawerNavigationHelpers) => (screenName: string) =>
    navigation.navigate(screenName);
