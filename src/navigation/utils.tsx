import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import {TypedNavigator} from '@react-navigation/native';

import {CommonScreens} from 'src/navigation/types';
import i18n from 'src/services/i18n';
import {
  RecipeDetailScreen,
  RecipeEditScreen,
  SearchIngredientScreen,
  TakeRecipeScreen,
} from 'src/screens';
import BurgerMenuButton from './components/BurgerMenuButton';
import BackArrowButton from './components/BackArrowButton';
import HeaderTitle from './components/HeaderTitle';
import CartButton from './components/CartButton';

export const getRootInnerNavigatorOptions = (
  title: string,
): StackNavigationOptions => ({
  headerLeft: BurgerMenuButton,
  headerTitle: () => <HeaderTitle title={title} />,
  headerRight: CartButton,
});

// TODO: Fix any?
export const getCommonScreens = (
  Stack: TypedNavigator<any, any, any, any, any>,
) => [
  <Stack.Screen
    key={CommonScreens.RecipeDetail}
    name={CommonScreens.RecipeDetail}
    component={RecipeDetailScreen}
    options={{headerShown: false}}
  />,
  <Stack.Screen
    key={CommonScreens.RecipeEdit}
    name={CommonScreens.RecipeEdit}
    component={RecipeEditScreen}
    options={{headerShown: false}}
  />,
  <Stack.Screen
    key={CommonScreens.SearchIngredient}
    name={CommonScreens.SearchIngredient}
    component={SearchIngredientScreen}
    options={{
      headerLeft: () => <BackArrowButton />,
      headerTitle: () => (
        <HeaderTitle title={i18n.t('screenNames.searchIngredients')} />
      ),
    }}
  />,
  <Stack.Screen
    key={CommonScreens.TakeRecipe}
    name={CommonScreens.TakeRecipe}
    component={TakeRecipeScreen}
    options={{
      headerLeft: () => <BackArrowButton />,
      headerTitle: () => (
        <HeaderTitle title={i18n.t('screenNames.selectRecipes')} />
      ),
    }}
  />,
];
