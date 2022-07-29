import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import s from './styles';
import {SearchInput, StyledText, PlusButton} from 'src/components';
import {deleteProduct, getProducts, Product} from 'src/services/api/product';
import ProductCard from './components/ProductCard';
import ListSeparator from './components/ListSeparator';
import FilterButton from './components/FilterButton';
import {ScreenNames} from 'src/navigation/types';
type Props = {
  //
};

const ProductList = ({}: Props) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const fetchProducts = () => {
    setRefreshing(true);

    getProducts()
      .then(setProducts)
      .catch(error => console.log('getProducts: ', error))
      .finally(() => setRefreshing(false));
  };

  useEffect(() => {
    fetchProducts();
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
    navigation.navigate(ScreenNames.ProductEditScreen, {productId});
  };

  const handleAddProduct = () => {
    navigation.navigate(ScreenNames.ProductEditScreen, {productId: null});
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
        refreshing={refreshing}
        onRefresh={fetchProducts}
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
