import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import s from './styles';
import {StyledButton, StyledText} from 'src/components';
import {BRAND_COLOR} from 'src/constants/theme';
import {SCREEN_NAMES} from 'src/navigation/constants';

type Props = {
  //
};

const ProductList = ({}: Props) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handlePress = () => {
    navigation.navigate(SCREEN_NAMES.DRAWER.PRODUCT.EDIT);
  };

  return (
    <View style={s.container}>
      <StyledText>Product list will be here...</StyledText>
      <StyledButton
        text={'Go To Change Product'}
        onPress={handlePress}
        color={BRAND_COLOR.PRIMARY}
      />
    </View>
  );
};

export default ProductList;
