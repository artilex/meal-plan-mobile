import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import CloseIcon from 'src/assets/images/circle-close.svg';
import {COLOR, FONT_SIZE, ICON_SIZE, PADDING} from 'src/constants/theme';
import {StyledText} from 'src/components';

type Props = {
  ingredientId: string;
  name: string;
  quantity: string;
  onDelete: (id: string) => void;
};

const IngredientCard = React.memo(
  ({ingredientId, name, quantity, onDelete}: Props) => {
    const handleDelete = () => {
      onDelete(ingredientId);
    };

    return (
      <View style={s.container}>
        <View style={s.content}>
          <StyledText numberOfLines={1} bold>
            {name}
          </StyledText>
          <StyledText style={s.quantityText}>{quantity}</StyledText>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleDelete}
          style={s.rightWrapper}>
          <CloseIcon
            width={ICON_SIZE.SMALL}
            height={ICON_SIZE.SMALL}
            fill={COLOR.RED2}
          />
        </TouchableOpacity>
      </View>
    );
  },
);

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: PADDING.EXTRA_LARGE,
  },
  image: {
    marginRight: PADDING.REGULAR,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  quantityText: {
    color: COLOR.GRAY2,
    lineHeight: FONT_SIZE.REGULAR,
  },
  rightWrapper: {
    padding: PADDING.SMALL,
  },
});

export default IngredientCard;
