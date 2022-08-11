import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';
import {ScrollView, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import AddIcon from 'src/assets/images/circle-plus.svg';
import {RecipeIngredient, RecipeStep} from 'src/services/api/types';
import {RecipeScreens, RecipeStackParamList} from 'src/navigation/types';
import {ButtonColor} from 'src/constants/theme';
import {StyledButton, StyledText} from 'src/components';
import {recipeActions} from 'src/store';
import StepEditModal from '../StepEditModal';
import IngredientCard from './IngredientCard';
import StepCard from './StepCard';
import s from './styles';

type RecipeNavigation = StackNavigationProp<RecipeStackParamList>;

type Props = {
  recipeIngredients: RecipeIngredient[];
  recipeSteps: RecipeStep[];
  backText: string;
  saveText: string;
  onNavigateBack: () => void;
  onSaveRecipe: () => void;
};

const Step2 = React.memo(
  ({
    recipeIngredients,
    recipeSteps,
    backText,
    saveText,
    onNavigateBack,
    onSaveRecipe,
  }: Props) => {
    const {t} = useTranslation();
    const reduxDispatch = useDispatch();
    const navigation = useNavigation<RecipeNavigation>();

    const [showStepModal, setShowStepModal] = useState(false);
    const [stepForEdit, setStepForEdit] = useState<RecipeStep | null>(null);
    // TODO: Implement Modal for Ingredient editing
    // const [showIngredientModal, setShowIngredientModal] = useState(false);

    const sortedSteps = useMemo(
      () =>
        recipeSteps
          .slice()
          .sort((a, b) => (a.orderNumber > b.orderNumber ? 1 : -1)),
      [recipeSteps],
    );

    useEffect(() => {
      if (stepForEdit) {
        setShowStepModal(true);
      }
    }, [stepForEdit]);

    const navigateToSearchIngredient = () => {
      navigation.navigate(RecipeScreens.SearchIngredient);
    };

    const handleDeleteIngredient = (ingredientId: string) => {
      reduxDispatch(recipeActions.deleteIngredient(ingredientId));
    };

    const handleNavigateBack = () => {
      onNavigateBack();
    };

    const handleChangeStep = (currentStep: RecipeStep) => {
      setStepForEdit(currentStep);
    };

    const handleDeleteStep = (stepId: string) => {
      reduxDispatch(recipeActions.deleteStep(stepId));
    };

    const handleCreateStep = () => {
      setStepForEdit(null);
      setShowStepModal(true);
    };

    const handleCloseStepModal = () => {
      setShowStepModal(false);
      setStepForEdit(null);
    };

    return (
      <View style={s.container}>
        {showStepModal && (
          <StepEditModal
            stepData={stepForEdit}
            onClose={handleCloseStepModal}
          />
        )}

        <ScrollView style={s.body} showsVerticalScrollIndicator={false}>
          <View style={s.ingredientsBlock}>
            <StyledText style={s.labelText}>
              {t('recipe.ingredients')}
            </StyledText>

            {recipeIngredients.length > 0 && (
              <View style={s.cardContainer}>
                {recipeIngredients.map((item, index) => (
                  <IngredientCard
                    key={item.id}
                    ingredientId={item.id}
                    name={item.name}
                    quantity={
                      item.quantity.value + ' ' + item.quantity.unit.name
                    }
                    onDelete={handleDeleteIngredient}
                    isLast={index === recipeIngredients.length - 1}
                  />
                ))}
              </View>
            )}

            <View style={s.addButtonWrapper}>
              <StyledButton
                Icon={AddIcon}
                text={t('recipe.addIngredient')}
                color={ButtonColor.Green}
                onPress={navigateToSearchIngredient}
                small
              />
            </View>
          </View>

          <View style={s.stepsBlock}>
            <StyledText style={s.labelText}>{t('recipe.steps')}</StyledText>

            {sortedSteps.map((step, index) => (
              <StepCard
                key={step.id}
                id={step.id}
                text={step.text}
                // TODO: Use step.orderNumber later
                orderNumber={index + 1}
                image={step.image ?? ''}
                onDelete={handleDeleteStep}
                onChangeStep={handleChangeStep}
                isLast={index === recipeSteps.length - 1}
              />
            ))}

            <View style={s.addButtonWrapper}>
              <StyledButton
                Icon={AddIcon}
                text={t('recipe.addStep')}
                color={ButtonColor.Green}
                onPress={handleCreateStep}
                small
              />
            </View>
          </View>
        </ScrollView>

        <View style={s.footer}>
          <View style={s.buttonWrapper}>
            <StyledButton
              text={backText}
              onPress={handleNavigateBack}
              color={ButtonColor.Green}
            />
          </View>

          <View style={s.buttonSpace} />

          <View style={s.buttonWrapper}>
            <StyledButton
              text={saveText}
              onPress={onSaveRecipe}
              color={ButtonColor.Green}
              solid
            />
          </View>
        </View>
      </View>
    );
  },
);

export default Step2;
