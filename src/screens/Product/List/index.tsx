import React, {useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Modal from 'react-native-modal';

import s from './styles';
import {PlusButton, SearchInput, StyledText} from 'src/components';
import ProductCard from './components/ProductCard';
import ListSeparator from './components/ListSeparator';
import FilterButton from './components/FilterButton';
import {ProductNavigatorParamList, ScreenNames} from 'src/navigation/types';
import {Product} from 'src/services/api/types';
import {COLOR, ICON_SIZE, PADDING} from 'src/constants/theme';
import {useProduct} from 'src/hooks/useProduct';

type Navigation = StackNavigationProp<ProductNavigatorParamList>;

const ProductList = () => {
  const navigation = useNavigation<Navigation>();
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const {products, loading, refreshing, refreshProducts, deleteProduct} =
    useProduct(searchText, selectedCategory);

  const handleEditProduct = (productId: string) => {
    navigation.navigate(ScreenNames.ProductEditScreen, {productId});
  };

  const handleAddProduct = () => {
    navigation.navigate(ScreenNames.ProductEditScreen, {productId: null});
  };

  const keyExtractor = (item: Product) => item.id;
  const renderItem = ({item}: {item: Product}) => (
    <ProductCard
      productId={item.id}
      productName={item.name}
      categoryName={item.category?.name}
      onDelete={deleteProduct}
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
      <Modal isVisible={loading}>
        <ActivityIndicator size={'large'} color={COLOR.WHITE} />
      </Modal>

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
        onRefresh={refreshProducts}
        data={products}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={ListSeparator}
        ListEmptyComponent={ListEmpty}
        ListFooterComponent={() => (
          <View style={{height: ICON_SIZE.EXTRA_LARGE + PADDING.EXTRA_LARGE}} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductList;
