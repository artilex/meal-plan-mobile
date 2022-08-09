import React, {useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RecipeScreens, RecipeStackParamList} from 'src/navigation/types';
import {RootState} from 'src/store';
import RecipeEditHeader from './components/Header';
import StepInfo from './components/Step1';
import StepDetail from './components/Step2';
import {Step} from './types';
import s from './styles';
// import {createRecipe} from 'src/services/api/recipe';

const STEP_COUNT = 2;

type RecipeNavigationProp = StackNavigationProp<RecipeStackParamList>;
type RecipeRouteProp = RouteProp<RecipeStackParamList>;

const RecipeEdit = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<RecipeNavigationProp>();
  // Use it to get Recipe Id
  // route.params?.recipeId
  const route = useRoute<RecipeRouteProp>();

  const [step, setStep] = useState(Step.Info);
  const headerTitle = useMemo(
    () =>
      step === Step.Info
        ? t('screenNames.editRecipeStep1')
        : t('screenNames.editRecipeStep2'),
    [t, step],
  );

  // TODO: After MVP add recipe categories, implement their here on Step 2, before ingredients
  const recipeData = useSelector(
    (state: RootState) => state.recipe.editableRecipe,
  );

  console.log('recipeData');
  console.log(recipeData);

  const handleCancelEdit = () => {
    navigation.navigate(RecipeScreens.List);
  };

  const handleNavigateBack = () => {
    setStep(Step.Info);
  };

  const handleNavigateNext = () => {
    setStep(Step.Detail);
  };

  const handleSaveRecipe = async () => {
    // await createRecipe({
    //   name: recipeData.name,
    //   description: recipeData.description,
    //   ingredients: [],
    //   steps: [],
    // });
  };

  return (
    <View style={s.container}>
      <RecipeEditHeader
        step={Number(step)}
        stepCount={STEP_COUNT}
        title={headerTitle}
        onCancel={handleCancelEdit}
      />

      <View style={s.body}>
        {step === Step.Info && (
          <StepInfo
            name={recipeData.name}
            description={recipeData.description}
            nextText={t('common.next')}
            // TODO: Add validation
            nextButtonDisabled={recipeName.length === 0}
            onNavigateNext={handleNavigateNext}
          />
        )}

        {step === Step.Detail && (
          <StepDetail
            backText={t('common.back')}
            saveText={t('common.save')}
            onNavigateBack={handleNavigateBack}
            onSaveRecipe={handleSaveRecipe}
          />
        )}
      </View>
    </View>
  );
};

export default RecipeEdit;
