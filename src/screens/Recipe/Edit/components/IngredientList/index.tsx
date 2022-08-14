import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import IngredientQuantityModal from '../../../components/IngredientQuantityModal';
import {RecipeScreens, RecipeStackParamList} from 'src/navigation/types';
import {RecipeIngredient} from 'src/services/api/types';
import {recipeActions} from 'src/store';
import {StyledText} from 'src/components';
import ListLayout from '../ListLayout';
import IngredientCard from './IngredientCard';
import {listStyles as s} from './styles';

type RecipeNavigation = StackNavigationProp<RecipeStackParamList>;

type Props = {
  recipeIngredients: RecipeIngredient[];
};

const IngredientList = React.memo(({recipeIngredients}: Props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation<RecipeNavigation>();

  const [showIngredientModal, setShowIngredientModal] = useState(false);
  const [ingredientForEdit, setIngredientForEdit] =
    useState<RecipeIngredient | null>(null);

  const handleStartEditing = (currentIngredient: RecipeIngredient) => {
    setIngredientForEdit(() => {
      setShowIngredientModal(true);
      return currentIngredient;
    });
  };

  const handleSaveIngredient = (quantity: number, unitId: string) => {
    if (ingredientForEdit) {
      dispatch(
        recipeActions.changeIngredient({
          productId: ingredientForEdit.id,
          quantity,
          unitId,
        }),
      );
    }

    setIngredientForEdit(null);
    setShowIngredientModal(false);
  };

  const handleDeleteIngredient = (ingredientId: string) => {
    dispatch(recipeActions.deleteIngredient(ingredientId));
  };

  const handleCloseModal = () => {
    setIngredientForEdit(null);
    setShowIngredientModal(false);
  };

  const navigateToSearchIngredient = () => {
    navigation.navigate(RecipeScreens.SearchIngredient);
  };

  const renderCard = (item: RecipeIngredient, index: number) => (
    <IngredientCard
      key={item.id}
      ingredientId={item.id}
      name={item.name}
      quantity={item.quantity}
      onChange={handleStartEditing}
      onDelete={handleDeleteIngredient}
      isLast={index === recipeIngredients.length - 1}
    />
  );

  return (
    <>
      {showIngredientModal && (
        <IngredientQuantityModal
          initQuantity={ingredientForEdit?.quantity.value.toString()}
          initUnitId={ingredientForEdit?.quantity.unit.id}
          onSave={handleSaveIngredient}
          onClose={handleCloseModal}
        />
      )}

      <ListLayout
        title={t('recipe.ingredients')}
        addItemText={t('recipe.addIngredient')}
        onAddItem={navigateToSearchIngredient}>
        {recipeIngredients.length > 0 ? (
          <View style={s.container}>{recipeIngredients.map(renderCard)}</View>
        ) : (
          <View style={s.emptyList}>
            <StyledText>{t('recipe.emptyIngredientList')}</StyledText>
          </View>
        )}
      </ListLayout>
    </>
  );
});

export default IngredientList;
