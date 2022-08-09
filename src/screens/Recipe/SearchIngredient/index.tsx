import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, FlatList, View} from 'react-native';
import Modal from 'react-native-modal';
import {useTranslation} from 'react-i18next';

import {searchProducts} from 'src/services/api/product';
import {Product} from 'src/services/api/types';
import {COLOR} from 'src/constants/theme';
import {SearchInput, StyledText} from 'src/components';
import {recipeActions, RootState} from 'src/store';
import IngredientQuantityModal from '../components/IngredientQuantityModal';
import IngredientCard from './components/IngredientCard';
import s from './styles';

const SearchIngredient = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [showQuantity, setShowQuantity] = useState(false);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const recipeIngredients = useSelector(
    (state: RootState) => state.recipe.editableRecipe.ingredients,
  );

  useEffect(() => {
    if (search) {
      setLoading(true);

      searchProducts(search)
        .then(setProducts)
        .catch(error => {
          console.log('searchProducts error');
          console.log(error);
        })
        .finally(() => setLoading(false));
    }
  }, [search]);

  const handleSelectProduct = useCallback(
    (productId: string) => {
      const selected = recipeIngredients.some(
        ingredient => ingredient.id === productId,
      );

      if (selected) {
        dispatch(recipeActions.deleteIngredient(productId));
      } else {
        setSelectedProductId(productId);
        setShowQuantity(true);
      }
    },
    [dispatch, recipeIngredients],
  );

  const handleCloseQuantityModal = () => {
    setShowQuantity(false);
  };

  const handleSaveQuantity = (quantity: number, unitId: string) => {
    dispatch(
      recipeActions.addIngredient({
        productId: selectedProductId,
        quantity,
        unitId,
      }),
    );
  };

  const keyExtractor = (item: Product) => item.id;
  const renderItem = ({item}: {item: Product}) => (
    <IngredientCard
      id={item.id}
      name={item.name}
      imageUrl={item.image ?? ''}
      isActive={recipeIngredients.some(ingredient => ingredient.id === item.id)}
      onSelect={handleSelectProduct}
    />
  );
  const ListEmpty = () => (
    <View style={s.emptyListContainer}>
      <StyledText>{t('recipe.emptyIngredients')}</StyledText>
    </View>
  );
  const ListSeparator = () => <View style={s.separator} />;

  return (
    <View style={s.container}>
      <Modal isVisible={loading}>
        <ActivityIndicator size={'large'} color={COLOR.WHITE} />
      </Modal>

      <IngredientQuantityModal
        isVisible={showQuantity}
        onSave={handleSaveQuantity}
        onClose={handleCloseQuantityModal}
      />

      <View style={s.header}>
        <SearchInput text={search} onSearch={setSearch} autoFocus />
      </View>

      <View style={s.body}>
        <FlatList
          data={products}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={ListSeparator}
          ListEmptyComponent={ListEmpty}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SearchIngredient;
