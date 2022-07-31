import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {ProductImage, StyledText} from 'src/components';
import CardFooter from './CardFooter';
import s from './styles';

type Props = {
  productName: string;
  productId: string;
  categoryName: string;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

const ProductCard = React.memo(
  ({productId, productName, categoryName, onDelete, onEdit}: Props) => {
    const {t} = useTranslation();
    const [showFooter, setShowFooter] = useState(false);

    const handleDelete = () => {
      onDelete(productId);
    };

    const handleEdit = () => {
      onEdit(productId);
      setShowFooter(false);
    };

    const handleShowFooter = () => {
      setShowFooter(oldState => !oldState);
    };

    return (
      <Pressable style={s.container} onPress={handleShowFooter}>
        <View style={s.body}>
          <View style={s.image}>
            <ProductImage image={''} disabled />
          </View>

          <View style={s.content}>
            <StyledText style={s.nameText} bold>
              {productName}
            </StyledText>
            <StyledText style={s.categoryText}>{categoryName}</StyledText>
          </View>
        </View>

        {showFooter && (
          <CardFooter
            editLabel={t('common.edit')}
            deleteLabel={t('common.delete')}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </Pressable>
    );
  },
);

export default ProductCard;
