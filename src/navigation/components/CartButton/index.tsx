import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import CartIcon from 'src/assets/images/cart.svg';
import s from './styles';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import {SCREEN_NAMES} from 'src/navigation/constants';

const {SMALL} = ICON_SIZE;

const CartButton = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  const handleOpenCartScreen = () => {
    navigation.navigate(SCREEN_NAMES.DRAWER.SHOPPING.ROOT);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={s.container}
      onPress={handleOpenCartScreen}>
      <CartIcon width={SMALL} height={SMALL} fill={COLOR.GREEN1} />
    </TouchableOpacity>
  );
};

export default CartButton;
