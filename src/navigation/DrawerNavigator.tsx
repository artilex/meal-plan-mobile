import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {StyledText} from 'src/components';
import {SCREEN_NAMES} from 'src/navigation/constants';
import ProductNavigator from 'src/navigation/ProductNavigator';

const Drawer = createDrawerNavigator();

const EmptyScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <StyledText>In progress...</StyledText>
  </View>
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
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
