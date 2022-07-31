import React from 'react';
import {TouchableOpacity} from 'react-native';

import DefaultImage from 'src/assets/images/default-food.svg';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import s from './styles';

type Props = {
  size?: number;
  image?: string;
  disabled?: boolean;
  onPress?: () => void;
};

const ProductImage = React.memo(
  ({size = ICON_SIZE.REGULAR, image, disabled, onPress}: Props) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={[
        s.container,
        !image && s.default,
        size > ICON_SIZE.REGULAR && s.bigContainer,
      ]}>
      <DefaultImage width={size} height={size} fill={COLOR.GRAY2} />
    </TouchableOpacity>
  ),
);

export default ProductImage;
