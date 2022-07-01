import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {StyledButton} from 'src/components';
import {ButtonColor} from 'src/components/StyledButton';
import {DrawerNavigatorOptions, SCREEN_NAMES} from './constants';
import ProductNavigator from './ProductNavigator';
import SideMenu from './components/SideMenu';
import {BACKGROUND_COLOR} from 'src/constants/theme';

const Drawer = createDrawerNavigator();

// TODO: Remove later
const EmptyScreen = () => (
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
    />
    <StyledButton
      text={'Main Solid Button'}
      onPress={() => null}
      color={ButtonColor.Green}
      solid
    />
    <StyledButton
      text={'Red Outline Button'}
      onPress={() => null}
      color={ButtonColor.Red}
    />
    <StyledButton
      text={'Red Solid Button'}
      onPress={() => null}
      color={ButtonColor.Red}
      solid
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
