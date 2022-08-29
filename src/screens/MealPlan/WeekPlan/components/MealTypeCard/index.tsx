import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import PlusIcon from 'src/assets/images/bold-plus.svg';
import {BRAND_COLOR, ICON_SIZE} from 'src/constants/theme';
import {
  MealPlanProduct,
  MealPlanRecipe,
  MealType,
} from 'src/services/api/types';
import {StyledText} from 'src/components';
import MealCard from '../MealCard';
import s from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  CommonParamList,
  CommonScreens,
  MealPlanParamList,
} from 'src/navigation/types';
import {useNavigation} from '@react-navigation/native';

type NavigationType = StackNavigationProp<MealPlanParamList & CommonParamList>;

type Props = MealType & {
  recipes: MealPlanRecipe[];
  products: MealPlanProduct[];
};

const MealTypeCard = React.memo(({id, name, recipes, products}: Props) => {
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationType>();
  const hasRecipes = recipes && recipes.length > 0;
  const hasProducts = products && products.length > 0;
  const hasItems = hasRecipes || hasProducts;

  const handleAddMeal = () => {
    console.log('Add new meal...');
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
        navigation.navigate(CommonScreens.RecipeDetail, {recipeId: recipe.id});
      };

      const handleDeleteRecipe = () => {
        console.log('delete recipe');
        console.log(recipe.id);
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
    [products.length, recipes.length, t, navigation],
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
        console.log('open product');
      };

      const handleDeleteProduct = () => {
        console.log('delete product');
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
    [products.length],
  );

  return (
    <View style={s.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={handleAddMeal}
        style={[s.header, hasItems && s.withBorder]}>
        <StyledText style={s.titleText}>{name}</StyledText>

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
});

export default MealTypeCard;
