import React from 'react';
import {View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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
// TODO: Check Swipeable component and styles, configure it
const ProductCard = React.memo(({product, onDelete, onEdit}: Props) => {
  const handleDelete = () => {
    // onDelete(product.id);
  };

  const handleEdit = () => {
    // onEdit(product.id);
  };

  return (
    <View style={s.container}>
      <Swipeable
        childrenContainerStyle={s.swipeableContainer}
        renderRightActions={() => (
          <View style={s.rightActions}>
            <View style={s.buttonWrapper}>
              <StyledButton
                text={'/'}
                color={ButtonColor.Green}
                onPress={handleEdit}
                solid
                small
              />
            </View>

            <View style={s.buttonWrapper}>
              <StyledButton
                text={'X'}
                color={ButtonColor.Red}
                onPress={handleDelete}
                solid
                small
              />
            </View>
          </View>
        )}>
        <View style={s.image} />

        <View style={s.content}>
          <StyledText style={s.nameText} bold>
            {product.name}
          </StyledText>
          <StyledText style={s.categoryText}>{product.category}</StyledText>
        </View>
      </Swipeable>
    </View>
  );
});

export default ProductCard;
