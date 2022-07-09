import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Modal from 'react-native-modal';

import s from './styles';
import {SearchInput, StyledText} from 'src/components';
import {SCREEN_NAMES} from 'src/navigation/constants';
import {
  deleteProduct,
  getProductCategories,
  getProducts,
  Product,
} from 'src/services/api/product';
import FilterIcon from 'src/assets/images/filter.svg';
import ProductCard from './components/ProductCard';
import ListSeparator from './components/ListSeparator';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import CloseIcon from 'src/assets/images/close-x.svg';

type Props = {
  //
};

const ProductList = ({}: Props) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(error => console.log('getProducts: ', error));

    getProductCategories()
      .then(setCategories)
      .catch(error => console.log('getProductCategories: ', error));
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
  // _TODO: Implement Delete Product Button (Functionality)
  // _TODO: Implement Edit Product Button (Functionality)
  // TODO: Move Modal Component and Filter Button into different component
  // TODO: Implement the filter in the top of the screen to choose the only one group to show
  // TODO: When show products for only one group, don't show group, just a list
  // TODO: Implement Add Product Button
  // TODO: Check and optimize performance (maybe enable useNativeDriver props)
  // TODO: Implement Product Form (Another Screen)
  // TODO: FINISH IMPLEMENTATION OF THE WHOLE LIST, GROUPED BY THE CATEGORIES

  return (
    <View style={s.container}>
      <View style={s.searchContainer}>
        <SearchInput text={searchText} onSearch={setSearchText} />
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => setShowModal(true)}
          style={s.filterContainer}>
          <FilterIcon
            width={ICON_SIZE.EXTRA_SMALL}
            height={ICON_SIZE.EXTRA_SMALL}
            fill={COLOR.GREEN1}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={ListSeparator}
        ListEmptyComponent={ListEmpty}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        style={s.modal}>
        <View style={s.modalContainer}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => setShowModal(false)}
            style={s.modalCloseWrapper}>
            <CloseIcon width={32} height={32} fill={COLOR.GREEN1} />
          </TouchableOpacity>

          <FlatList
            data={categories}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ItemSeparatorComponent={ListSeparator}
            ListEmptyComponent={ListEmpty}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ProductList;
