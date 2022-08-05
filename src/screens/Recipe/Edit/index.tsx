import React, {useMemo, useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RecipeScreens, RecipeStackParamList} from 'src/navigation/types';
import RecipeEditHeader from './components/Header';
import StepInfo from './components/Step1';
import StepDetail from './components/Step2';
import {Step} from './types';
import s from './styles';

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
  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');

  const headerTitle = useMemo(
    () =>
      step === Step.Info
        ? t('screenNames.editRecipeStep1')
        : t('screenNames.editRecipeStep2'),
    [t, step],
  );

  const handleCancelEdit = () => {
    navigation.navigate(RecipeScreens.List);
  };

  const handleNavigateBack = () => {
    setStep(Step.Info);
  };

  const handleNavigateNext = () => {
    setStep(Step.Detail);
  };

  const handleSaveRecipe = () => {
    console.log('recipeName');
    console.log(recipeName);
    console.log('description');
    console.log(description);
    console.log('IMPLEMENT SAVE RECIPE TO BE');
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
            recipeName={recipeName}
            description={description}
            setRecipeName={setRecipeName}
            setDescription={setDescription}
            nextText={t('common.next')}
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
