import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ProductEditScreen, ProductListScreen} from 'src/screens';
import {SCREEN_NAMES} from './constants';
import HeaderRightButton from 'src/navigation/components/HeaderRightButton';

const Stack = createStackNavigator();

const ProductNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: HeaderRightButton,
      }}>
      <Stack.Screen
        name={SCREEN_NAMES.DRAWER.PRODUCT.LIST}
        component={ProductListScreen}
      />
      <Stack.Screen
        name={SCREEN_NAMES.DRAWER.PRODUCT.EDIT}
        component={ProductEditScreen}
      />
    </Stack.Navigator>
  );
};

export default ProductNavigator;
