import React from 'react';
import {ScrollView, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {RecipeIngredient, RecipeStep} from 'src/services/api/types';
import {ButtonColor} from 'src/constants/theme';
import {StyledButton} from 'src/components';
import IngredientList from '../IngredientList';
import StepList from '../StepList';
import s from './styles';

type Props = {
  recipeIngredients: RecipeIngredient[];
  recipeSteps: RecipeStep[];
  onNavigateBack: () => void;
  onSaveRecipe: () => void;
};

const SecondScreen = React.memo(
  ({recipeIngredients, recipeSteps, onNavigateBack, onSaveRecipe}: Props) => {
    const {t} = useTranslation();

    const handleNavigateBack = () => {
      onNavigateBack();
    };

    return (
      <View style={s.container}>
        <ScrollView style={s.body} showsVerticalScrollIndicator={false}>
          <View style={s.ingredientsBlock}>
            <IngredientList recipeIngredients={recipeIngredients} />
          </View>

          <View style={s.stepsBlock}>
            <StepList recipeSteps={recipeSteps} />
          </View>
        </ScrollView>

        <View style={s.footer}>
          <View style={s.buttonWrapper}>
            <StyledButton
              text={t('common.back')}
              onPress={handleNavigateBack}
              color={ButtonColor.Green}
            />
          </View>

          <View style={s.buttonSpace} />

          <View style={s.buttonWrapper}>
            <StyledButton
              text={t('common.save')}
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

export default SecondScreen;
