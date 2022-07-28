import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import s from './styles';
import {SearchInput, StyledText} from 'src/components';
import {SCREEN_NAMES} from 'src/navigation/constants';
import {deleteProduct, getProducts, Product} from 'src/services/api/product';
import ProductCard from './components/ProductCard';
import ListSeparator from './components/ListSeparator';
import FilterButton from './components/FilterButton';
import PlusButton from 'src/components/PlusButton';
type Props = {
  //
};

const ProductList = ({}: Props) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

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

    const filtered = selectedCategory
      ? foundProducts.filter(product => product.categoryId === selectedCategory)
      : foundProducts;

    setFilteredProducts(filtered);
  }, [products, searchText, selectedCategory]);

  const handleEditProduct = (productId: string) => {
    navigation.navigate(SCREEN_NAMES.DRAWER.PRODUCT.EDIT);
  };

  const handleAddProduct = () => {
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
  // _TODO: Implement Delete Product Button (Functionality)
  // _TODO: Implement Edit Product Button (Functionality)
  // _TODO: Move Modal Component and Filter Button into different component
  // _TODO: Implement the filter in the top of the screen to choose the only one group to show
  // _TODO: When show products for only one group, don't show group, just a list
  // _TODO: Implement Add Product Button
  // TODO: Check and optimize performance (maybe enable useNativeDriver props)
  // TODO: Implement Product Form (Another Screen)
  // TODO: FINISH IMPLEMENTATION OF THE WHOLE LIST, GROUPED BY THE CATEGORIES

  return (
    <View style={s.container}>
      <View style={s.searchContainer}>
        <SearchInput text={searchText} onSearch={setSearchText} />
        <FilterButton
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </View>

      <View style={s.addButtonContainer}>
        <PlusButton onPress={handleAddProduct} />
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={ListSeparator}
        ListEmptyComponent={ListEmpty}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductList;
