import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {BACKGROUND_COLOR, ButtonColor} from 'src/constants/theme';
import {StyledButton} from 'src/components';
import SideMenu from '../components/SideMenu';
import {DrawerNavigatorOptions} from '../constants';
import {DrawerParamList, DrawerScreens} from '../types';
import ProductNavigator from './ProductNavigator';
import RecipeNavigator from './RecipeNavigator';
import MealPlanNavigator from './MealPlanNavigator';

const Drawer = createDrawerNavigator<DrawerParamList>();

// TODO: Remove later
export const EmptyScreen = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: BACKGROUND_COLOR.PRIMARY,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 16,
    }}>
    <StyledButton text={'Default Outline Button'} onPress={() => null} />
    <StyledButton text={'Default Solid Button'} onPress={() => null} solid />
    <StyledButton
      text={'Disabled Outline Button'}
      onPress={() => null}
      disabled
    />
    <StyledButton
      text={'Disabled Solid Button'}
      onPress={() => null}
      disabled
      solid
    />
    <StyledButton
      text={'Main Outline Button'}
      onPress={() => null}
      color={ButtonColor.Green}
      stretch
    />
    <StyledButton
      text={'Main Solid Button'}
      onPress={() => null}
      color={ButtonColor.Green}
      solid
      stretch
    />
    <StyledButton
      text={'Red Outline Button'}
      onPress={() => null}
      color={ButtonColor.Red}
      small
    />
    <StyledButton
      text={'Red Solid Button'}
      onPress={() => null}
      color={ButtonColor.Red}
      solid
      small
    />
    <StyledButton
      text={'Blue Outline Button'}
      onPress={() => null}
      color={ButtonColor.Blue}
    />
    <StyledButton
      text={'Blue Solid Button'}
      onPress={() => null}
      color={ButtonColor.Blue}
      solid
    />
  </View>
);

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
      <Drawer.Screen name={DrawerScreens.Shopping} component={EmptyScreen} />
      <Drawer.Screen name={DrawerScreens.Recipe} component={RecipeNavigator} />
      <Drawer.Screen
        name={DrawerScreens.Product}
        component={ProductNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
