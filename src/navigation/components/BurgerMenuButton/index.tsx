import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import BurgerMenuIcon from 'src/assets/images/burger-menu.svg';
import s from './styles';
import {COLOR, ICON_SIZE} from 'src/constants/theme';

const {SMALL} = ICON_SIZE;

const BurgerMenuButton = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  const handleOpenMenu = () => {
    navigation.openDrawer();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={s.container}
      onPress={handleOpenMenu}>
      <BurgerMenuIcon width={SMALL} height={SMALL} fill={COLOR.GREEN1} />
    </TouchableOpacity>
  );
};

export default BurgerMenuButton;
