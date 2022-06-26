import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import MenuItem from './MenuItem';
import {getItemIcon, getNavigateToScreen} from './utils';
import s from './styles';

const SideMenu = ({navigation, ...props}: DrawerContentComponentProps) => {
  const {t} = useTranslation();
  const navigateToScreen = getNavigateToScreen(navigation);

  return (
    <DrawerContentScrollView {...props}>
      <View style={s.container}>
        {props.state.routes.map((menuItem, index) => {
          const label = t(`screenNames.${menuItem.name}`);
          const Icon = getItemIcon(menuItem.name);
          const isActive = index === props.state.index;

          const handlePress = () => {
            navigateToScreen(menuItem.name);
          };

          return (
            <MenuItem
              key={menuItem.key}
              label={label}
              Icon={Icon}
              isActive={isActive}
              onPress={handlePress}
            />
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
};

export default SideMenu;
