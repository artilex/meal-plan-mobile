import React, {useReducer} from 'react';
import {ScrollView, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import AddIcon from 'src/assets/images/circle-plus.svg';
import {RecipeIngredient} from 'src/services/api/types';
import {ButtonColor} from 'src/constants/theme';
import {StyledButton, StyledText} from 'src/components';
import {
  ADD_STEP,
  CHANGE_STEP_TEXT,
  DELETE_STEP,
  initStep,
  RecipeStep,
  stepReducer,
} from './utils';
import IngredientCard from './IngredientCard';
import StepCard from './StepCard';
import s from './styles';

type Props = {
  recipeIngredients: RecipeIngredient[];
  recipeSteps: RecipeStep[] | null;
  onDeleteIngredient: (id: string) => void;
  onAddIngredient: () => void;
  backText: string;
  saveText: string;
  onNavigateBack: (steps: RecipeStep[]) => void;
  onSaveRecipe: () => void;
};

const Step2 = React.memo(
  ({
    recipeIngredients,
    recipeSteps,
    onDeleteIngredient,
    onAddIngredient,
    backText,
    saveText,
    onNavigateBack,
    onSaveRecipe,
  }: Props) => {
    const {t} = useTranslation();

    const [steps, dispatch] = useReducer(
      stepReducer,
      recipeSteps || [{...initStep}], // use {...item} to get copy of object
    );

    const handleAddStep = () => {
      dispatch({type: ADD_STEP});
    };

    const handleDeleteStep = (id: number) => {
      dispatch({type: DELETE_STEP, id});
    };

    const handleChangeText = (id: number, text: string) => {
      dispatch({type: CHANGE_STEP_TEXT, id, text});
    };

    const handleNavigateBack = () => {
      onNavigateBack(steps);
    };

    return (
      <View style={s.container}>
        <ScrollView style={s.body} showsVerticalScrollIndicator={false}>
          <View style={s.ingredientsBlock}>
            <StyledText style={s.labelText}>
              {t('recipe.ingredients')}
            </StyledText>

            <View style={s.cardContainer}>
              {recipeIngredients.map((item, index) => (
                <IngredientCard
                  key={item.id}
                  ingredientId={item.id}
                  name={item.name}
                  quantity={item.quantity.value + ' ' + item.quantity.unit}
                  onDelete={onDeleteIngredient}
                  isLast={index === recipeIngredients.length - 1}
                />
              ))}
            </View>

            <View style={s.addButtonWrapper}>
              <StyledButton
                Icon={AddIcon}
                text={t('recipe.addIngredient')}
                color={ButtonColor.Green}
                onPress={onAddIngredient}
                small
              />
            </View>
          </View>

          <View style={s.stepsBlock}>
            <StyledText style={s.labelText}>{t('recipe.steps')}</StyledText>

            {steps
              .sort((a, b) => (a.orderNumber > b.orderNumber ? 1 : -1))
              .map((step, index) => (
                <StepCard
                  key={step.id}
                  id={step.id}
                  text={step.text}
                  orderNumber={step.orderNumber}
                  image={step.image ?? ''}
                  onDelete={handleDeleteStep}
                  onChangeText={handleChangeText}
                  isLast={index === steps.length - 1}
                />
              ))}

            <View style={s.addButtonWrapper}>
              <StyledButton
                Icon={AddIcon}
                text={t('recipe.addStep')}
                color={ButtonColor.Green}
                onPress={handleAddStep}
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
