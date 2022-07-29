import React, {useRef} from 'react';
import {View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {Product} from 'src/services/api/product';
import {StyledText, ProductImage} from 'src/components';
import {COLOR} from 'src/constants/theme';
import DeleteIcon from 'src/assets/images/delete-trash.svg';
import EditIcon from 'src/assets/images/edit-pencil.svg';
import SwipeableActionLayout from './SwipeableActionLayout';
import s from './styles';

type Props = {
  product: Product;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

const ProductCard = React.memo(({product, onDelete, onEdit}: Props) => {
  const swipeableRef = useRef<Swipeable>(null);

  const handleDelete = () => {
    onDelete(product.id);
  };

  const handleEdit = () => {
    onEdit(product.id);
    swipeableRef.current?.close();
  };

  return (
    <Swipeable
      ref={swipeableRef}
      friction={1.2}
      childrenContainerStyle={s.swipeableContainer}
      renderLeftActions={() => (
        <SwipeableActionLayout
          Icon={EditIcon}
          color={COLOR.GREEN1}
          onPress={handleEdit}
        />
      )}
      renderRightActions={() => (
        <SwipeableActionLayout
          Icon={DeleteIcon}
          color={COLOR.RED2}
          onPress={handleDelete}
        />
      )}>
      <View style={s.image}>
        <ProductImage onPress={() => null} disabled />
      </View>

      <View style={s.content}>
        <StyledText style={s.nameText} bold>
          {product.name}
        </StyledText>
        <StyledText style={s.categoryText}>{product.category}</StyledText>
      </View>
    </Swipeable>
  );
});

export default ProductCard;
