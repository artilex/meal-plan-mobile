import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import s from './styles';

const HeaderRightButton = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  const handleOpenMenu = () => {
    navigation.openDrawer();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={s.container}
      onPress={handleOpenMenu}>
      <View style={s.icon} />
    </TouchableOpacity>
  );
};

export default HeaderRightButton;
