import React from 'react';
import {StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import BurgerMenuButton from 'src/navigation/components/BurgerMenuButton';
import BackArrowButton from 'src/navigation/components/BackArrowButton';
import HeaderTitle from 'src/navigation/components/HeaderTitle';
import {BACKGROUND_COLOR} from 'src/constants/theme';
import {
  RecipeDetailScreen,
  RecipeEditScreen,
  RecipeListScreen,
  RecipeSearchScreen,
  SearchIngredientScreen,
} from 'src/screens';
import {DefaultInnerNavigatorOptions} from '../constants';
import {RecipeScreens, RecipeStackParamList} from '../types';

const Stack = createStackNavigator<RecipeStackParamList>();

const RecipeNavigator = () => {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={s.safeArea} edges={['bottom']}>
      <Stack.Navigator screenOptions={DefaultInnerNavigatorOptions}>
        <Stack.Screen
          name={RecipeScreens.List}
          component={RecipeListScreen}
          options={{
            headerLeft: BurgerMenuButton,
            headerTitle: () => (
              <HeaderTitle title={t('screenNames.recipeList')} />
            ),
          }}
        />
        <Stack.Screen
          name={RecipeScreens.Detail}
          component={RecipeDetailScreen}
          options={{
            headerLeft: BackArrowButton,
            headerTitle: () => <HeaderTitle title={'Recipe Detail'} />,
          }}
        />
        <Stack.Screen
          name={RecipeScreens.Edit}
          component={RecipeEditScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RecipeScreens.SearchIngredient}
          component={SearchIngredientScreen}
          options={{
            headerLeft: BackArrowButton,
            headerTitle: () => (
              <HeaderTitle title={t('screenNames.searchIngredients')} />
            ),
          }}
        />
        <Stack.Screen
          name={RecipeScreens.Search}
          component={RecipeSearchScreen}
          options={{
            headerLeft: BackArrowButton,
            headerTitle: () => (
              <HeaderTitle title={t('screenNames.searchRecipes')} />
            ),
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
});

export default RecipeNavigator;
