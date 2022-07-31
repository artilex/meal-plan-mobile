import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import type {RouteProp} from '@react-navigation/native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import {ProductStackParamList, ProductScreens} from 'src/navigation/types';
import {
  HorizontalList,
  ProductImage,
  StyledButton,
  StyledText,
  StyledTextInput,
} from 'src/components';
import {ButtonColor} from 'src/constants/theme';
import s from './styles';
import {adapt} from 'src/constants/layout';
import {productActions, RootState} from 'src/store';
import {getProductById} from 'src/services/api/product';
import {Product} from 'src/services/api/types';
import {RequestStatus} from 'src/store/types';

type ProductRouteProp = RouteProp<ProductStackParamList, ProductScreens.Edit>;

const ProductEdit = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute<ProductRouteProp>();
  const productId = route.params?.productId ?? '';

  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [saved, setSaved] = useState(false);
  const categories = useSelector((state: RootState) => state.category.list);
  const requestStatus = useSelector((state: RootState) => state.product.status);
  const loading = requestStatus === RequestStatus.Loading;
  const buttonDisabled = loading || !categoryId || !name;

  useEffect(() => {
    getProductById(productId)
      .then((product?: Product) => {
        if (product) {
          setName(product.name);
          setCategoryId(product.category?.id ?? '');
        }
      })
      .catch(error => console.log('getProductById error: ' + error));
  }, [productId]);

  useEffect(() => {
    if (!loading && saved) {
      setSaved(false);

      navigation.goBack();
    }
  }, [saved, loading, navigation]);

  const handleUploadImage = () => {
    console.log('Implement Upload Image');
  };

  const handleSave = () => {
    try {
      const productData = {name, categoryId};
      if (productId) {
        dispatch(productActions.update({productId, productData}));
      } else {
        dispatch(productActions.create(productData));
      }

      setSaved(true);
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
