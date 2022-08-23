import React, {useEffect, useMemo} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  View,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';

import CalendarAddIcon from 'src/assets/images/calendar-add.svg';
import ShareIcon from 'src/assets/images/share.svg';
import {RecipeScreens, RecipeStackParamList} from 'src/navigation/types';
import {ButtonColor, COLOR} from 'src/constants/theme';
import {recipeActions, RootState} from 'src/store';
import {RequestStatus} from 'src/store/types';
import {StyledButton, StyledText} from 'src/components';
import RecipeDetailHeader from './components/RecipeDetailHeader';
import IngredientCard from './components/IngredientCard';
import StepCard from './components/StepCard';
import s from './styles';

const defaultImagePath = '../../../assets/images/covered-dish.png';

type RouteProps = RouteProp<RecipeStackParamList, RecipeScreens.Detail>;

const RecipeDetail = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const route = useRoute<RouteProps>();

  const recipeData = useSelector(
    (state: RootState) => state.recipe.editableRecipe,
  );
  const requestStatus = useSelector((state: RootState) => state.recipe.status);
  const loading = useMemo(
    () => requestStatus === RequestStatus.Loading,
    [requestStatus],
  );

  useEffect(() => {
    dispatch(recipeActions.getRecipeById(route.params?.recipeId ?? null));
  }, [dispatch, route.params?.recipeId]);

  // TODO: Replace with Loading Screen?
  if (loading) {
    return (
      <View style={s.container}>
        <Modal isVisible={loading}>
          <ActivityIndicator size={'large'} color={COLOR.WHITE} />
        </Modal>
      </View>
    );
  }

  const handleAddRecipeToPlan = () => {
    // TODO
    console.log('IMPLEMENT ADDING');
  };

  const handleShareRecipe = () => {
    // TODO
    console.log('IMPLEMENT SHARING');
  };

  return (
    <>
      <RecipeDetailHeader recipeId={recipeData.id} />

      <ScrollView style={s.container} showsVerticalScrollIndicator={false}>
        <ImageBackground
          key={'imageBackground'}
          source={
            recipeData.cover
              ? {uri: recipeData.cover}
              : require(defaultImagePath)
          }
          defaultSource={require(defaultImagePath)}
          style={s.imageBackground}>
          <View style={s.imageFooter} />
        </ImageBackground>

        <View key={'content'} style={s.content}>
          <StyledText style={s.titleText}>{recipeData.name}</StyledText>

          <View style={s.horizontalLine} />
          <View style={s.buttons}>
            <View style={s.firstButton}>
              <StyledButton
                text={t('recipe.addRecipeToPlan')}
                Icon={CalendarAddIcon}
                onPress={handleAddRecipeToPlan}
                color={ButtonColor.Green}
                small
              />
            </View>
            <View style={s.buttonSpace} />
            <StyledButton
              Icon={ShareIcon}
              onPress={handleShareRecipe}
              color={ButtonColor.Green}
              small
            />
          </View>

          {!!recipeData.description && (
            <>
              <View style={s.horizontalLine} />
              <StyledText style={s.labelText}>
                {t('recipe.description')}
              </StyledText>
              <StyledText style={s.descriptionText}>
                {recipeData.description}
              </StyledText>
            </>
          )}

          <View style={s.horizontalLine} />
          <StyledText style={s.labelText}>{t('recipe.ingredients')}</StyledText>
          {recipeData.ingredients.length > 0 &&
            recipeData.ingredients.map(item => (
              <IngredientCard
                key={item.id}
                name={item.name}
                quantityValue={item.quantity.value}
                quantityUnit={item.quantity.unit.name}
              />
            ))}

          <View style={s.horizontalLine} />
          <StyledText style={s.labelText}>{t('recipe.steps')}</StyledText>
          {recipeData.steps.length > 0 &&
            recipeData.steps.map(item => <StepCard key={item.id} {...item} />)}
        </View>
      </ScrollView>
    </>
  );
};

export default RecipeDetail;
