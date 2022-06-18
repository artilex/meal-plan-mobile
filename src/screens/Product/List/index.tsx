import React from 'react';
import {View} from 'react-native';

import s from './styles';
import {StyledText} from 'src/components';

type Props = {
  //
};

const ProductList = ({}: Props) => {
  return (
    <View style={s.container}>
      <StyledText>Product list will be here...</StyledText>
    </View>
  );
};

export default ProductList;
