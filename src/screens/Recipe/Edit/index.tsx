import React, {useMemo, useReducer, useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {
  DetailRecipe,
  RecipeIngredient,
  RecipeStep,
} from 'src/services/api/types';
import {RecipeScreens, RecipeStackParamList} from 'src/navigation/types';
import RecipeEditHeader from './components/Header';
import StepInfo from './components/Step1';
import StepDetail from './components/Step2';
import {getRecipeActions, recipeReducer} from './utils';
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
  const headerTitle = useMemo(
    () =>
      step === Step.Info
        ? t('screenNames.editRecipeStep1')
        : t('screenNames.editRecipeStep2'),
    [t, step],
  );

  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  // TODO: After MVP add recipe categories, implement their here on Step 2, before ingredients
  const [recipe, dispatch] = useReducer(recipeReducer, {
    id: '0',
    name: '',
    description: '',
    cover: null,
    ingredients: [],
    steps: [],
  });
  const [recipeSteps, setRecipeSteps] = useState<RecipeStep[] | null>(null);

  const recipeActions = useMemo(() => getRecipeActions(dispatch), [dispatch]);

  const handleCancelEdit = () => {
    navigation.navigate(RecipeScreens.List);
  };

  const handleNavigateBack = (newSteps: RecipeStep[]) => {
    setRecipeSteps(newSteps);
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
            // TODO: Add validation
            nextButtonDisabled={recipeName.length === 0}
            onNavigateNext={handleNavigateNext}
          />
        )}

        {step === Step.Detail && (
          <StepDetail
            recipeSteps={recipeSteps}
            recipeIngredients={recipe.ingredients}
            onAddIngredient={recipeActions.addIngredient}
            onDeleteIngredient={recipeActions.deleteIngredient}
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

const ingredients1: RecipeIngredient[] = [
  {
    id: 'tt1',
    name: 'Bread',
    quantity: {
      value: 3,
      unit: 'slices',
    },
    image: null,
  },
  {
    id: 'tt2',
    name: 'Milk',
    quantity: {
      value: 1,
      unit: 'liter',
    },
    image: null,
  },
  {
    id: 'tt3',
    name: 'Tomato',
    quantity: {
      value: 0.5,
      unit: 'kilogram',
    },
    image: null,
  },
  {
    id: 'tt4',
    name: 'Butter',
    quantity: {
      value: 50,
      unit: 'gram',
    },
    image: null,
  },
  {
    id: 'tt5',
    name: 'Oil',
    quantity: {
      value: 5,
      unit: 'gram',
    },
    image: null,
  },
];

export default RecipeEdit;
