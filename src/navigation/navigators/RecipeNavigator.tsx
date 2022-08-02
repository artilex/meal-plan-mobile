import React from 'react';
import {StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BACKGROUND_COLOR} from 'src/constants/theme';
import {RecipeListScreen} from 'src/screens';
import {RecipeScreens, RecipeStackParamList} from '../types';
import {DefaultInnerNavigatorOptions} from '../constants';
import BurgerMenuButton from 'src/navigation/components/BurgerMenuButton';
import HeaderTitle from 'src/navigation/components/HeaderTitle';
import {EmptyScreen} from 'src/navigation/navigators/DrawerNavigator';

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
        <Stack.Screen name={RecipeScreens.Detail} component={EmptyScreen} />
        <Stack.Screen name={RecipeScreens.Edit} component={EmptyScreen} />
        <Stack.Screen name={RecipeScreens.Search} component={EmptyScreen} />
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
