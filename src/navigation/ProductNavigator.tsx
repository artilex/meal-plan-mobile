import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SCREEN_NAMES} from 'src/navigation/constants';
import {ProductListScreen} from 'src/screens';

const Stack = createStackNavigator();

const ProductNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={SCREEN_NAMES.DRAWER.PRODUCT.LIST}
      component={ProductListScreen}
    />
  </Stack.Navigator>
);

export default ProductNavigator;
