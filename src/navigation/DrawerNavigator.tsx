import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {StyledText} from 'src/components';
import {DrawerNavigatorOptions, SCREEN_NAMES} from './constants';
import ProductNavigator from './ProductNavigator';

const Drawer = createDrawerNavigator();

const EmptyScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <StyledText>In progress...</StyledText>
  </View>
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={DrawerNavigatorOptions}
      useLegacyImplementation>
      <Drawer.Screen
        name={SCREEN_NAMES.DRAWER.MEAL_PLAN.ROOT}
        component={EmptyScreen}
      />
      <Drawer.Screen
        name={SCREEN_NAMES.DRAWER.SHOPPING.ROOT}
        component={EmptyScreen}
      />
      <Drawer.Screen
        name={SCREEN_NAMES.DRAWER.RECIPE.ROOT}
        component={EmptyScreen}
      />
      <Drawer.Screen
        name={SCREEN_NAMES.DRAWER.PRODUCT.ROOT}
        component={ProductNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
