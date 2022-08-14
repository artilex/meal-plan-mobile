import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import CloseIcon from 'src/assets/images/circle-close.svg';
import {ProductUnit, RecipeIngredient} from 'src/services/api/types';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import {StyledText} from 'src/components';
import {cardStyles as s} from './styles';

type Props = {
  ingredientId: string;
  name: string;
  quantity: {value: number; unit: ProductUnit};
  onChange: (ingredient: RecipeIngredient) => void;
  onDelete: (id: string) => void;
  isLast: boolean;
};

const IngredientCard = React.memo(
  ({ingredientId, name, quantity, onChange, onDelete, isLast}: Props) => {
    const handleDelete = () => {
      onDelete(ingredientId);
    };

    const handleChange = () => {
      onChange({
        id: ingredientId,
        name,
        quantity,
        image: null,
      });
    };

    return (
      <View style={[s.container, isLast && s.lastItemContainer]}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleChange}
          style={s.content}>
          <StyledText numberOfLines={1} bold>
            {name}
          </StyledText>
          <StyledText style={s.quantityText}>
            {quantity.value + ' ' + quantity.unit.name}
          </StyledText>
        </TouchableOpacity>

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

export default IngredientCard;
