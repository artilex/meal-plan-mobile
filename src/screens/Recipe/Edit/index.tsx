import React, {useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RecipeScreens, RecipeStackParamList} from 'src/navigation/types';
import {RequestStatus} from 'src/store/types';
import {recipeActions, RootState} from 'src/store';
import RecipeEditHeader from './components/Header';
import StepInfo from './components/FirstScreen';
import StepDetail from './components/SecondScreen';
import {Screen} from './types';
import s from './styles';

const STEP_COUNT = 2;

type RecipeNavigationProp = StackNavigationProp<RecipeStackParamList>;

const RecipeEdit = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<RecipeNavigationProp>();
  const dispatch = useDispatch();

  const [screen, setScreen] = useState(Screen.Info);

  const headerTitle = useMemo(
    () =>
      screen === Screen.Info
        ? t('screenNames.editRecipeStep1')
        : t('screenNames.editRecipeStep2'),
    [t, screen],
  );

  // TODO: After MVP add recipe categories, implement their here on Step 2, before ingredients
  const recipeData = useSelector(
    (state: RootState) => state.recipe.editableRecipe,
  );
  const requestStatus = useSelector((state: RootState) => state.recipe.status);

  const handleCancelEdit = () => {
    navigation.navigate(RecipeScreens.List);
    dispatch(recipeActions.clearRecipe());
  };

  const handleNavigateBack = () => {
    setScreen(Screen.Info);
  };

  const handleNavigateNext = () => {
    setScreen(Screen.Detail);
  };

  const handleSaveRecipe = async () => {
    navigation.navigate(RecipeScreens.List);
    dispatch(recipeActions.saveRecipe());
  };

  // TODO: Create Loading screen with cool animation and replace it
  if (requestStatus === RequestStatus.Loading) {
    return null;
  }

  return (
    <View style={s.container}>
      <RecipeEditHeader
        step={Number(screen)}
        stepCount={STEP_COUNT}
        title={headerTitle}
        onCancel={handleCancelEdit}
      />

      <View style={s.body}>
        {screen === Screen.Info && (
          <StepInfo onNavigateNext={handleNavigateNext} />
        )}

        {screen === Screen.Detail && (
          <StepDetail
            recipeSteps={recipeData.steps}
            recipeIngredients={recipeData.ingredients}
            onNavigateBack={handleNavigateBack}
            onSaveRecipe={handleSaveRecipe}
          />
        )}
      </View>
    </View>
  );
};

export default RecipeEdit;
