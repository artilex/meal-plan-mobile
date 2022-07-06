import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import s from './styles';
import {StyledText} from 'src/components';
import {SCREEN_NAMES} from 'src/navigation/constants';
import {deleteProduct, getProducts, Product} from 'src/services/api/product';
import ProductCard from 'src/screens/Product/List/components/ProductCard';

type Props = {
  //
};

const ProductList = ({}: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigation = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(error => console.log('getProducts: ', error));
  }, []);

  const handleEditProduct = (productId: string) => {
    navigation.navigate(SCREEN_NAMES.DRAWER.PRODUCT.EDIT);
  };

  const handleDeleteProduct = async (productId: string) => {
    deleteProduct(productId)
      .then(setProducts)
      .catch(err => console.log(err));
  };

  const keyExtractor = (item: Product) => item.id;
  const renderItem = ({item}: {item: Product}) => (
    <ProductCard
      product={item}
      onDelete={handleDeleteProduct}
      onEdit={handleEditProduct}
    />
  );
  const ItemSeparator = () => <View style={s.itemSeparator} />;
  const ListEmpty = () => (
    <View style={s.emptyList}>
      <StyledText>Empty...</StyledText>
    </View>
  );

  // _TODO: Implement Product Card Component
  // _TODO: Implement Product List
  // TODO: Implement search for products
  // TODO: Implement Product Form (Another Screen)
  // TODO: Implement Add Product Button
  // _TODO: Implement Delete Product Button (Functionality)
  // _TODO: Implement Edit Product Button (Functionality)
  // TODO: FINISH IMPLEMENTATION OF THE WHOLE LIST, GROUPED BY THE CATEGORIES
  // TODO: After MVP implement the filter in the top of the screen to choose the only one group to show
  // TODO: When show products for only one group, don't show group, just a list

  return (
    <View style={s.container}>
      <View style={s.listWrapper}>
        <FlatList
          data={products}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparator}
          ListEmptyComponent={ListEmpty}
          contentContainerStyle={s.flatList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ProductList;
