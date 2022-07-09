import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import s from './styles';
import {SearchInput, StyledText} from 'src/components';
import {SCREEN_NAMES} from 'src/navigation/constants';
import {deleteProduct, getProducts, Product} from 'src/services/api/product';
import ProductCard from './components/ProductCard';
import ListHeader from './components/ListHeader';
import ListFooter from './components/ListFooter';
import ListSeparator from './components/ListSeparator';

type Props = {
  //
};

const ProductList = ({}: Props) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(error => console.log('getProducts: ', error));
  }, []);

  useEffect(() => {
    const foundProducts = products.filter(product => {
      const productName = product.name.toLocaleLowerCase();
      const search = searchText.toLocaleLowerCase();

      return productName.includes(search);
    });

    setFilteredProducts(foundProducts);
  }, [products, searchText]);

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
  const ListEmpty = () => (
    <View style={s.emptyList}>
      <StyledText>Empty...</StyledText>
    </View>
  );

  // _TODO: Implement Product Card Component
  // _TODO: Implement Product List
  // _TODO: Implement search for products
  // TODO: Implement Product Form (Another Screen)
  // TODO: Implement Add Product Button
  // _TODO: Implement Delete Product Button (Functionality)
  // _TODO: Implement Edit Product Button (Functionality)
  // TODO: FINISH IMPLEMENTATION OF THE WHOLE LIST, GROUPED BY THE CATEGORIES
  // TODO: After MVP implement the filter in the top of the screen to choose the only one group to show
  // TODO: When show products for only one group, don't show group, just a list

  return (
    <View style={s.container}>
      <View style={s.searchContainer}>
        <SearchInput text={searchText} onSearch={setSearchText} />
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={ListSeparator}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        ListEmptyComponent={ListEmpty}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductList;
