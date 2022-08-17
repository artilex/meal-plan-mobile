import React, {useEffect, useMemo} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';

import BackArrowButton from 'src/navigation/components/BackArrowButton';
import {RecipeScreens, RecipeStackParamList} from 'src/navigation/types';
import {COLOR, PADDING} from 'src/constants/theme';
import {recipeActions, RootState} from 'src/store';
import {RequestStatus} from 'src/store/types';
import {StyledText} from 'src/components';
import IngredientCard from './components/IngredientCard';
import StepCard from './components/StepCard';
import s from './styles';

const defaultImagePath = '../../../assets/images/covered-dish.png';

type RouteProps = RouteProp<RecipeStackParamList, RecipeScreens.Detail>;
type NavigationProps = NavigationProp<RecipeStackParamList>;

const RecipeDetail = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();
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

  const handleNavigateToEdit = () => {
    navigation.navigate(RecipeScreens.Edit);
  };

  const handleGoBack = () => {
    dispatch(recipeActions.clearRecipe());
  };

  // TODO: Replace with Loading Screen?
  if (loading) {
    return (
      <Modal isVisible={loading}>
        <ActivityIndicator size={'large'} color={COLOR.WHITE} />
      </Modal>
    );
  }

  return (
    <>
      <View style={s.headerContainer}>
        <BackArrowButton iconColor={COLOR.WHITE} onBack={handleGoBack} />

        <TouchableOpacity activeOpacity={0.7} onPress={handleNavigateToEdit}>
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 36,
              backgroundColor: COLOR.GREEN1,
              marginRight: PADDING.REGULAR,
            }}
          />
        </TouchableOpacity>
      </View>

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
