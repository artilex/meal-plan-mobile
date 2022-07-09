import React from 'react';
import {View} from 'react-native';

import s from './styles';
import {StyledButton, StyledText} from 'src/components';
import {ButtonColor} from 'src/constants/theme';

type Props = {
  //
};

const ProductEdit = ({}: Props) => {
  return (
    <View style={s.container}>
      <StyledText>Product Edit will be here...</StyledText>
      <StyledButton
        text={'Save'}
        onPress={() => null}
        color={ButtonColor.Green}
        solid
      />
    </View>
  );
};

export default ProductEdit;
