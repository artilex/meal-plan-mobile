import React, {useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';

import {Recipe} from 'src/services/api/types';
import {ButtonColor, COLOR} from 'src/constants/theme';
import {recipeActions, RootState} from 'src/store';
import {StyledButton, StyledText} from 'src/components';
import RecipeCard from '../components/RecipeCard';
import s from './styles';

import {RequestStatus} from 'src/store/types';

const TakeRecipe = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [selectedRecipeIds, setSelectedRecipeIds] = useState<string[]>([]);
  const recipes = useSelector((state: RootState) => state.recipe.list);
  const status = useSelector((state: RootState) => state.recipe.status);
  const loading = useMemo(() => status === RequestStatus.Loading, [status]);

  const buttonText = useMemo(
    () =>
      selectedRecipeIds.length > 1
        ? t('recipe.addItems', {count: selectedRecipeIds.length})
        : t('common.add'),
    [selectedRecipeIds, t],
  );

  useEffect(() => {
    dispatch(recipeActions.fetchRecipes());
  }, [dispatch]);

  const handleChooseRecipe = (recipeId: string) => {
    if (selectedRecipeIds.includes(recipeId)) {
      setSelectedRecipeIds(state => state.filter(item => item !== recipeId));
    } else {
      setSelectedRecipeIds(state => [...state, recipeId]);
    }
  };

  const keyExtractor = (item: Recipe) => item.id;
  const renderItem = ({item}: {item: Recipe}) => (
    <RecipeCard
      id={item.id}
      name={item.name}
      imageUrl={item.cover ?? ''}
      onPress={handleChooseRecipe}
      isSelected={selectedRecipeIds.includes(item.id)}
    />
  );
  const ListEmpty = () => (
    <View style={s.emptyList}>
      <StyledText>Empty...</StyledText>
    </View>
  );

  const handleSaveRecipes = () => {
    // TODO: Implement this!
  };

  return (
    <View style={s.container}>
      <Modal isVisible={loading}>
        <ActivityIndicator size={'large'} color={COLOR.WHITE} />
      </Modal>

      <View style={s.body}>
        <FlatList
          data={recipes}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          numColumns={2}
          ListEmptyComponent={ListEmpty}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={s.footer}>
        <StyledButton
          text={buttonText}
          onPress={handleSaveRecipes}
          color={ButtonColor.Green}
          disabled={selectedRecipeIds.length === 0}
          solid
        />
      </View>
    </View>
  );
};

export default TakeRecipe;
