import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import type {RouteProp} from '@react-navigation/native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {DrawerParamList, ScreenNames} from 'src/navigation/types';
import {
  HorizontalList,
  ProductImage,
  StyledButton,
  StyledText,
  StyledTextInput,
} from 'src/components';
import {ButtonColor} from 'src/constants/theme';
import s from './styles';
import {useTranslation} from 'react-i18next';
import {
  Category,
  createProduct,
  getProductById,
  getProductCategories,
  Product,
  updateProduct,
} from 'src/services/api/product';
import {adapt} from 'src/constants/layout';

type DrawerRouteProp = RouteProp<
  DrawerParamList,
  ScreenNames.ProductEditScreen
>;

type Props = {
  //
};

const ProductEdit = ({}: Props) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const route = useRoute<DrawerRouteProp>();
  const productId = route.params?.productId ?? '';

  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const buttonDisabled = !categoryId || !name;

  useEffect(() => {
    getProductCategories()
      .then(setCategories)
      .catch(error => console.log('getProductCategories: ', error));
  }, []);

  useEffect(() => {
    getProductById(productId)
      .then((product?: Product) => {
        if (product) {
          console.log('product');
          console.log(product);
          setName(product.name);
          setCategoryId(product.category ?? '');
        }
      })
      .catch(error => console.log('getProductById error: ' + error));
  }, [productId]);

  const handleUploadImage = () => {
    console.log('Implement Upload Image');
  };

  const handleSave = async () => {
    try {
      if (productId) {
        await updateProduct(productId, {name, categoryId});
      } else {
        await createProduct({name, categoryId});
      }

      navigation.goBack();
    } catch (error) {
      console.log('handleSave error: ');
      console.log(error);
    }
  };

  return (
    <View style={s.container}>
      <View style={s.body}>
        <StyledText style={s.label}>{t('product.nameLabel')}</StyledText>
        <StyledTextInput
          placeholder={t('product.namePlaceholder')}
          value={name}
          onChangeText={setName}
        />
        <View>
          <StyledText style={s.label}>{t('product.categoryLabel')}</StyledText>
          <HorizontalList
            data={categories}
            selectedId={categoryId}
            onSelect={setCategoryId}
          />
        </View>

        <StyledText style={s.label}>{t('product.imageLabel')}</StyledText>
        <View style={s.imageWrapper}>
          <ProductImage onPress={handleUploadImage} size={adapt(100)} />
        </View>
      </View>

      <View style={s.footer}>
        <StyledButton
          text={t('common.save')}
          onPress={handleSave}
          color={ButtonColor.Green}
          disabled={buttonDisabled}
          solid
        />
      </View>
    </View>
  );
};

export default ProductEdit;
