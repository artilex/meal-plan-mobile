import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';

import BurgerMenuButton from './components/BurgerMenuButton';
import HeaderTitle from './components/HeaderTitle';
import CartButton from './components/CartButton';

export const getRootInnerNavigatorOptions = (
  title: string,
): StackNavigationOptions => ({
  headerLeft: BurgerMenuButton,
  headerTitle: () => <HeaderTitle title={title} />,
  headerRight: CartButton,
});
