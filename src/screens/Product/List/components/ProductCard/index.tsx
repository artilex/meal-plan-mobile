import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import s from './styles';
import {StyledButton, StyledText} from 'src/components';
import {Product} from 'src/services/api/product';
import {ButtonColor} from 'src/components/StyledButton';

type Props = {
  product: Product;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

// TODO: Add image support instead of the color circle
// TODO: Replace "X" with a delete icon
const ProductCard = React.memo(({product, onDelete, onEdit}: Props) => {
  const handleDelete = () => {
    onDelete(product.id);
  };

  const handleEdit = () => {
    onEdit(product.id);
  };

  return (
    <View style={s.container}>
      <TouchableOpacity
        style={s.touchableContainer}
        activeOpacity={0.7}
        onPress={handleEdit}>
        <View style={s.image} />

        <View style={s.content}>
          <StyledText style={s.nameText} bold>
            {product.name}
          </StyledText>
          <StyledText style={s.categoryText}>{product.category}</StyledText>
        </View>
      </TouchableOpacity>

      <View style={s.removeWrapper}>
        <StyledButton
          text={'X'}
          color={ButtonColor.Red}
          onPress={handleDelete}
          solid
          small
        />
      </View>
    </View>
  );
});

export default ProductCard;
