import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, FlatList, View} from 'react-native';
import Modal from 'react-native-modal';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

import {searchProducts} from 'src/services/api/product';
import {NewRecipeIngredient, Product} from 'src/services/api/types';
import {ButtonColor, COLOR} from 'src/constants/theme';
import {SearchInput, StyledButton, StyledText} from 'src/components';
import {recipeActions, RootState} from 'src/store';
import IngredientQuantityModal from '../components/IngredientQuantityModal';
import IngredientCard from './components/IngredientCard';
import s from './styles';

const SearchIngredient = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [showQuantity, setShowQuantity] = useState(false);
  const [loading, setLoading] = useState(false);

  const storedIngredients = useSelector(
    (state: RootState) => state.recipe.editableRecipe.ingredients,
  );
  const [recipeIngredients, setRecipeIngredients] = useState<
    NewRecipeIngredient[]
  >([]);

  const mergedIngredientIds = useMemo(
    () => [
      ...storedIngredients.map(item => item.id),
      ...recipeIngredients.map(item => item.productId),
    ],
    [storedIngredients, recipeIngredients],
  );

  const buttonText = useMemo(
    () =>
      recipeIngredients.length > 1
        ? t('recipe.addItems', {count: recipeIngredients.length})
        : t('common.add'),
    [recipeIngredients, t],
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
      const isSelected = mergedIngredientIds.some(id => id === productId);

      if (!isSelected) {
        setSelectedProductId(productId);
        setShowQuantity(true);
      }
    },
    [mergedIngredientIds],
  );

  const handleCloseQuantityModal = () => {
    setShowQuantity(false);
  };

  const handleSaveQuantity = (quantity: number, unitId: string) => {
    setRecipeIngredients(state => [
      ...state,
      {
        productId: selectedProductId,
        quantity,
        unitId,
      },
    ]);
    setShowQuantity(false);
  };

  const handleSaveIngredients = () => {
    dispatch(recipeActions.addIngredients(recipeIngredients));
    navigation.goBack();
  };

  const keyExtractor = (item: Product) => item.id;
  const renderItem = ({item}: {item: Product}) => (
    <IngredientCard
      id={item.id}
      name={item.name}
      imageUrl={item.image ?? ''}
      isActive={mergedIngredientIds.some(id => id === item.id)}
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

      {showQuantity && (
        <IngredientQuantityModal
          onSave={handleSaveQuantity}
          onClose={handleCloseQuantityModal}
        />
      )}

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

      <View style={s.footer}>
        <StyledButton
          text={buttonText}
          onPress={handleSaveIngredients}
          color={ButtonColor.Green}
          disabled={recipeIngredients.length === 0}
          solid
        />
      </View>
    </View>
  );
};

export default SearchIngredient;
