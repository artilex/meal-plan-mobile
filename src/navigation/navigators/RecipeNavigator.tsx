import React from 'react';
import {useTranslation} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import BurgerMenuButton from 'src/navigation/components/BurgerMenuButton';
import BackArrowButton from 'src/navigation/components/BackArrowButton';
import HeaderTitle from 'src/navigation/components/HeaderTitle';
import {getCommonScreens} from 'src/navigation/utils';
import {RecipeListScreen, RecipeSearchScreen} from 'src/screens';
import {DefaultInnerNavigatorOptions} from '../constants';
import {RecipeScreens, RecipeStackParamList} from '../types';
import s from './styles';

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
          name={RecipeScreens.Search}
          component={RecipeSearchScreen}
          options={{
            headerLeft: () => <BackArrowButton />,
            headerTitle: () => (
              <HeaderTitle title={t('screenNames.searchRecipes')} />
            ),
          }}
        />

        {getCommonScreens(Stack)}
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default RecipeNavigator;
