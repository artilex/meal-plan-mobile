import React from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';

import {WeekPlanScreen} from 'src/screens';
import {MealPlanParamList, MealPlanScreens} from '../types';
import {DefaultInnerNavigatorOptions} from '../constants';
import {getRootInnerNavigatorOptions} from '../utils';
import s from './styles';

const Stack = createStackNavigator<MealPlanParamList>();

const MealPlanNavigator = () => {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={s.safeArea} edges={['bottom']}>
      <Stack.Navigator screenOptions={DefaultInnerNavigatorOptions}>
        <Stack.Screen
          name={MealPlanScreens.WeekPlan}
          component={WeekPlanScreen}
          options={getRootInnerNavigatorOptions(t('screenNames.mealPlan'))}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default MealPlanNavigator;
