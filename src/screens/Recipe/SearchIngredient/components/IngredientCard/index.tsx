import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import ActiveCheckMark from 'src/assets/images/active-check-mark.svg';
import InactiveCheckMark from 'src/assets/images/inactive-check-mark.svg';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import {ProductImage, StyledText} from 'src/components';
import s from './styles';

type Props = {
  id: string;
  name: string;
  imageUrl: string;
  isActive: boolean;
  onSelect: (id: string) => void;
};

const IngredientCard = React.memo(
  ({id, name, imageUrl, isActive, onSelect}: Props) => {
    const CheckMarkIcon = isActive ? ActiveCheckMark : InactiveCheckMark;

    const handleSelect = () => {
      onSelect(id);
    };

    return (
      <View style={s.container}>
        <View style={s.image}>
          <ProductImage image={imageUrl} disabled />
        </View>

        <View style={s.body}>
          <StyledText style={s.nameText} bold numberOfLines={1}>
            {name}
          </StyledText>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleSelect}
          style={s.rightWrapper}>
          <CheckMarkIcon
            width={ICON_SIZE.EXTRA_SMALL}
            height={ICON_SIZE.EXTRA_SMALL}
            fill={COLOR.GREEN1}
          />
        </TouchableOpacity>
      </View>
    );
  },
);

export default IngredientCard;
