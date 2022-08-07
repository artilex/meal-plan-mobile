import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';

import {Product} from 'src/services/api/types';
import {SearchInput, StyledText} from 'src/components';
import s from './styles';
import {COLOR} from 'src/constants/theme';
import IngredientCard from 'src/screens/Recipe/SearchIngredient/components/IngredientCard';
import {useTranslation} from 'react-i18next';
import {searchProducts} from 'src/services/api/product';
import Modal from 'react-native-modal';
import IngredientQuantityModal from 'src/screens/Recipe/components/IngredientQuantityModal';

const SearchIngredient = () => {
  const {t} = useTranslation();

  const [showQuantity, setShowQuantity] = useState(false);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIngredientIds, setSelectedIngredientIds] = useState<string[]>(
    [],
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

  const handleSelectIngredient = (id: string) => {
    setSelectedIngredientIds(old => {
      if (old.includes(id)) {
        return old.filter(item => item !== id);
      } else {
        return [...old, id];
      }
    });
  };

  const handleShowQuantityModal = () => {
    setShowQuantity(true);
  };

  const handleCloseQuantityModal = () => {
    setShowQuantity(false);
  };

  const handleSaveQuantity = (quantity: number, unitId: string) => {
    //
  };

  const keyExtractor = (item: Product) => item.id;
  const renderItem = ({item}: {item: Product}) => (
    <IngredientCard
      id={item.id}
      name={item.name}
      imageUrl={item.image ?? ''}
      isActive={selectedIngredientIds.includes(item.id)}
      onSelect={handleShowQuantityModal}
      // onSelect={handleSelectIngredient}
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
        <SearchInput text={search} onSearch={setSearch} />
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
