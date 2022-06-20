import React from 'react';
import {View} from 'react-native';

import s from './styles';
import {StyledText} from 'src/components';

type Props = {
  //
};

const ProductEdit = ({}: Props) => {
  return (
    <View style={s.container}>
      <StyledText>Product Edit will be here...</StyledText>
    </View>
  );
};

export default ProductEdit;
