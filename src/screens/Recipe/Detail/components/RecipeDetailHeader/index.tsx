import React from 'react';
import {useDispatch} from 'react-redux';
import {TouchableOpacity, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import EditIcon from 'src/assets/images/edit-icon.svg';
import DeleteIcon from 'src/assets/images/delete-icon.svg';
import BackArrowButton from 'src/navigation/components/BackArrowButton';
import {
  CommonParamList,
  CommonScreens,
  MealPlanParamList,
} from 'src/navigation/types';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import {recipeActions} from 'src/store';
import s from './styles';

type NavigationProps = NavigationProp<CommonParamList & MealPlanParamList>;

type Props = {
  recipeId: string;
};

const RecipeDetailHeader = React.memo(({recipeId}: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();

  const handleGoBack = () => {
    dispatch(recipeActions.clearRecipe());
  };

  const handleNavigateToEdit = () => {
    navigation.navigate(CommonScreens.RecipeEdit, {
      fromDetail: true,
    });
  };

  const handleDeleteRecipe = () => {
    // TODO: Add Modal with question about deletion
    dispatch(recipeActions.deleteRecipe(recipeId));
    dispatch(recipeActions.clearRecipe());
    navigation.goBack();
  };

  return (
    <View style={s.container}>
      <BackArrowButton iconColor={COLOR.WHITE} onBack={handleGoBack} />

      <View style={s.rightSide}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleNavigateToEdit}
          style={s.buttonWrapper}>
          <EditIcon
            width={ICON_SIZE.SMALL}
            height={ICON_SIZE.SMALL}
            fill={COLOR.WHITE}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleDeleteRecipe}
          style={s.buttonWrapper}>
          <DeleteIcon
            width={ICON_SIZE.SMALL}
            height={ICON_SIZE.SMALL}
            fill={COLOR.WHITE}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default RecipeDetailHeader;
