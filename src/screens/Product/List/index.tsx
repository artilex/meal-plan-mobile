import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import s from './styles';
import {PlusButton, SearchInput, StyledText} from 'src/components';
import ProductCard from './components/ProductCard';
import ListSeparator from './components/ListSeparator';
import FilterButton from './components/FilterButton';
import {ProductNavigatorParamList, ScreenNames} from 'src/navigation/types';
import {productActions, RootState} from 'src/store';
import {Product} from 'src/services/api/types';
import {RequestStatus} from 'src/store/types';

type Navigation = StackNavigationProp<ProductNavigatorParamList>;

const ProductList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<Navigation>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const products = useSelector((state: RootState) => state.product.list);
  const requestStatus = useSelector((state: RootState) => state.product.status);
  const loading = requestStatus === RequestStatus.Loading;

  useEffect(() => {
    const foundProducts = products.filter(product => {
      const productName = product.name.toLocaleLowerCase();
      const search = searchText.toLocaleLowerCase();

      return productName.includes(search);
    });

    const filtered = selectedCategory
      ? foundProducts.filter(
          product => product.category.id === selectedCategory,
        )
      : foundProducts;

    setFilteredProducts(filtered);
  }, [products, searchText, selectedCategory]);

  const handleEditProduct = (productId: string) => {
    navigation.navigate(ScreenNames.ProductEditScreen, {productId});
  };

  const handleAddProduct = () => {
    navigation.navigate(ScreenNames.ProductEditScreen, {productId: null});
  };

  const handleDeleteProduct = (productId: string) => {
    dispatch(productActions.delete(productId));
  };

  const handleRefreshProducts = () => {
    dispatch(productActions.fetch());
  };

  const keyExtractor = (item: Product) => item.id;
  const renderItem = ({item}: {item: Product}) => (
    <ProductCard
      productId={item.id}
      productName={item.name}
      categoryName={item.category.name}
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
        refreshing={loading}
        onRefresh={handleRefreshProducts}
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
