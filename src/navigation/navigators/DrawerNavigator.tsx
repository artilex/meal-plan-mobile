import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SideMenu from '../components/SideMenu';
import {DrawerNavigatorOptions} from '../constants';
import {DrawerParamList, DrawerScreens} from '../types';
import ProductNavigator from './ProductNavigator';
import RecipeNavigator from './RecipeNavigator';
import MealPlanNavigator from './MealPlanNavigator';
import ShoppingNavigator from 'src/navigation/navigators/ShoppingNavigator';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <SideMenu {...props} />}
      screenOptions={DrawerNavigatorOptions}
      useLegacyImplementation>
      <Drawer.Screen
        name={DrawerScreens.MealPlan}
        component={MealPlanNavigator}
      />
      <Drawer.Screen
        name={DrawerScreens.Shopping}
        component={ShoppingNavigator}
        options={{unmountOnBlur: true}}
      />
      <Drawer.Screen name={DrawerScreens.Recipe} component={RecipeNavigator} />
      <Drawer.Screen
        name={DrawerScreens.Product}
        component={ProductNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
