import React, {useCallback, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';

import PlusIcon from 'src/assets/images/bold-plus.svg';
import {BRAND_COLOR, ICON_SIZE} from 'src/constants/theme';
import {MealPlanProduct, MealPlanRecipe} from 'src/services/api/types';
import {
  CommonParamList,
  CommonScreens,
  MealPlanParamList,
} from 'src/navigation/types';
import {mealPlanActions} from 'src/store';
import {StyledText} from 'src/components';
import WayAdditionChooser from '../WayAdditionChooser';
import MealCard from '../MealCard';
import s from './styles';

type NavigationType = StackNavigationProp<MealPlanParamList & CommonParamList>;

type Props = {
  mealPlanId: number;
  mealTypeId: number;
  mealTypeName: string;
  selectedDay: string;
  recipes: MealPlanRecipe[];
  products: MealPlanProduct[];
};

const MealTypeCard = React.memo(
  ({
    mealPlanId,
    mealTypeId,
    mealTypeName,
    selectedDay,
    recipes,
    products,
  }: Props) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationType>();
    const [showModal, setShowModal] = useState(false);

    // TODO: ?Use Memo?
    const hasRecipes = recipes && recipes.length > 0;
    const hasProducts = products && products.length > 0;
    const hasItems = hasRecipes || hasProducts;

    const handleShowModal = () => {
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };

    const renderRecipe = useCallback(
      (item, index) => {
        if (!item) {
          return null;
        }

        // TODO: Check for existence and set safe default value in redux when fetch from API
        const {recipe} = item;
        const key = `recipe_${item.id}`;
        const showLine = products.length > 0 || recipes.length - 1 !== index;
        const description =
          item.servingCount > 1
            ? `${item.servingCount} ${t('mealPlan.servings')}`
            : `${item.servingCount} ${t('mealPlan.serving')}`;

        const handleOpenRecipe = () => {
          navigation.navigate(CommonScreens.RecipeDetail, {
            recipeId: recipe.id,
          });
        };

        const handleDeleteRecipe = () => {
          dispatch(
            mealPlanActions.deleteRecipe({mealPlanId, mealPlanItemId: item.id}),
          );
        };

        return (
          <View key={key}>
            <MealCard
              itemId={recipe.id}
              itemName={recipe.name}
              itemImage={recipe.cover}
              itemDescription={description}
              onPress={handleOpenRecipe}
              onDelete={handleDeleteRecipe}
              isRecipe
            />
            {showLine && <View style={s.cardSpace} />}
          </View>
        );
      },
      [products.length, recipes.length, t, navigation, dispatch, mealPlanId],
    );

    const renderProduct = useCallback(
      (item, index) => {
        if (!item) {
          return null;
        }

        // TODO: Check for existence and set safe default value in redux when fetch from API
        const {product, quantity} = item;
        const key = `product_${item.id}`;
        const description = `${quantity.value} ${quantity.unit.shortName}`;
        const showLine = index !== products.length - 1;

        const handleOpenProduct = () => {
          console.log(
            'open product, There is no View Product at this moment and do not need it',
          );
        };

        const handleDeleteProduct = () => {
          dispatch(
            mealPlanActions.deleteProduct({
              mealPlanId,
              mealPlanItemId: item.id,
            }),
          );
        };

        return (
          <View key={key}>
            <MealCard
              itemId={product.id}
              itemName={product.name}
              itemImage={product.image}
              itemDescription={description}
              onPress={handleOpenProduct}
              onDelete={handleDeleteProduct}
            />
            {showLine && <View style={s.cardSpace} />}
          </View>
        );
      },
      [dispatch, mealPlanId, products.length],
    );

    return (
      <View style={s.container}>
        <WayAdditionChooser
          typeId={mealTypeId}
          day={selectedDay}
          isVisible={showModal}
          onClose={handleCloseModal}
        />

        <TouchableOpacity
          activeOpacity={1}
          onPress={handleShowModal}
          style={[s.header, hasItems && s.withBorder]}>
          <StyledText style={s.titleText}>{mealTypeName}</StyledText>

          <PlusIcon
            width={ICON_SIZE.SMALL}
            height={ICON_SIZE.SMALL}
            fill={BRAND_COLOR.PRIMARY}
          />
        </TouchableOpacity>

        {hasItems && (
          <View style={s.content}>
            {hasRecipes && recipes.map(renderRecipe)}

            {hasProducts && products.map(renderProduct)}
          </View>
        )}
      </View>
    );
  },
);

export default MealTypeCard;
