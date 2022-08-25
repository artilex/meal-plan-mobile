import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';

import {WeekPlanScreen} from 'src/screens';
import {MealPlanParamList, MealPlanScreens} from '../types';
import {DefaultInnerNavigatorOptions} from '../constants';
import s from './styles';

const Stack = createStackNavigator<MealPlanParamList>();

const MealPlanNavigator = () => {
  // const {t} = useTranslation();

  return (
    <SafeAreaView style={s.safeArea} edges={['bottom']}>
      <Stack.Navigator screenOptions={DefaultInnerNavigatorOptions}>
        <Stack.Screen
          name={MealPlanScreens.WeekPlan}
          component={WeekPlanScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default MealPlanNavigator;
