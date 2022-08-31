import React from 'react';
import {View} from 'react-native';

import {StyledText} from 'src/components';
import s from './styles';

const ShoppingList = () => {
  return (
    <View style={s.container}>
      <StyledText>Shopping List In Progress...</StyledText>
    </View>
  );
};

export default ShoppingList;
