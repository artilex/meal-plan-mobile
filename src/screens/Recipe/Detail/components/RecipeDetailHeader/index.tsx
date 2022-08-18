import React from 'react';
import {useDispatch} from 'react-redux';
import {TouchableOpacity, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import BackArrowButton from 'src/navigation/components/BackArrowButton';
import {RecipeScreens, RecipeStackParamList} from 'src/navigation/types';
import {COLOR} from 'src/constants/theme';
import {recipeActions} from 'src/store';
import s from './styles';

type NavigationProps = NavigationProp<RecipeStackParamList>;

type Props = {
  recipeId: string;
};

const RecipeDetailHeader = React.memo(({recipeId}: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();

  const handleGoBack = () => {
    dispatch(recipeActions.clearRecipe());
  };

  const handleShareRecipe = () => {
    //
  };

  const handleNavigateToEdit = () => {
    navigation.navigate(RecipeScreens.Edit);
  };

  const handleDeleteRecipe = () => {
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
          onPress={handleShareRecipe}
          style={s.buttonWrapper}>
          <View style={s.tempButton} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleNavigateToEdit}
          style={s.buttonWrapper}>
          <View style={s.tempButton} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleDeleteRecipe}
          style={s.buttonWrapper}>
          <View style={s.tempButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default RecipeDetailHeader;
