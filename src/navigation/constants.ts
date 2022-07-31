import {StackNavigationOptions} from '@react-navigation/stack';
import {DrawerNavigationOptions} from '@react-navigation/drawer';

import s from './components/SideMenu/styles';
import {BORDER} from 'src/constants/theme';

export const RootNavigatorOptions: StackNavigationOptions = {
  headerShown: false,
};

export const DrawerNavigatorOptions: DrawerNavigationOptions = {
  headerShown: false,
  drawerStyle: s.rootContainer,
};

export const DefaultInnerNavigatorOptions: StackNavigationOptions = {
  headerBackgroundContainerStyle: {
    borderBottomWidth: BORDER.WIDTH,
    borderBottomColor: BORDER.COLOR,
  },
  headerTitleAlign: 'center',
  headerShadowVisible: false,
};
