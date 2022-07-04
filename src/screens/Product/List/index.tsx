import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import s from './styles';
import {StyledButton, StyledText} from 'src/components';
import {SCREEN_NAMES} from 'src/navigation/constants';
import {ButtonColor} from 'src/components/StyledButton';
import {getProductCategories, getProducts} from 'src/services/api/product';

type Props = {
  //
};

const ProductList = ({}: Props) => {
  const [products, setProducts] = useState<any[]>([]);
  const [productCategories, setProductCategories] = useState<any[]>([]);
  const navigation = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(error => console.log('getProducts: ', error));

    getProductCategories()
      .then(setProductCategories)
      .catch(error => console.log('getProductCategories: ', error));
  }, []);

  const handlePress = () => {
    navigation.navigate(SCREEN_NAMES.DRAWER.PRODUCT.EDIT);
  };
  const keyExtractor = useCallback(item => item.id, []);

  // TODO: Implement Product Card Component
  // TODO: Implement Product Category List Component
  // TODO: Implement Product List
  // TODO: Implement Product Form (Another Screen)
  // TODO: Implement Add Product Button
  // TODO: Implement Delete Product Button (Functionality)
  // TODO: Implement Edit Product Button (Functionality)
  // TODO: FINISH IMPLEMENTATION OF THE WHOLE LIST, GROUPED BY THE CATEGORIES
  // TODO: After MVP implement the filter in the top of the screen to choose the only one group to show
  // TODO: When show products for only one group, don't show group, just a list

  return (
    <FlatList
      data={products}
      keyExtractor={keyExtractor}
      renderItem={({item}) => <StyledText>{item.name}</StyledText>}
      contentContainerStyle={s.container}
    />
  );
};

export default ProductList;
