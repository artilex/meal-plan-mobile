import React from 'react';
import {StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BACKGROUND_COLOR} from 'src/constants/theme';
import {RecipeListScreen} from 'src/screens';
import {RecipeScreens, RecipeStackParamList} from '../types';
import {DefaultInnerNavigatorOptions} from '../constants';
import {getRootInnerNavigatorOptions} from '../utils';

const Stack = createStackNavigator<RecipeStackParamList>();

const RecipeNavigator = () => {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={s.safeArea} edges={['bottom']}>
      <Stack.Navigator screenOptions={DefaultInnerNavigatorOptions}>
        <Stack.Screen
          name={RecipeScreens.List}
          component={RecipeListScreen}
          options={getRootInnerNavigatorOptions(t('screenNames.recipeList'))}
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
