import React from 'react';
import {ScrollView, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import AddIcon from 'src/assets/images/circle-plus.svg';
import {RecipeIngredient} from 'src/services/api/types';
import {ButtonColor} from 'src/constants/theme';
import {StyledButton, StyledText} from 'src/components';
import IngredientCard from './IngredientCard';
import s from './styles';

type Props = {
  recipeIngredients: RecipeIngredient[];
  onDeleteIngredient: (id: string) => void;
  onAddIngredient: () => void;
  backText: string;
  saveText: string;
  onNavigateBack: () => void;
  onSaveRecipe: () => void;
};

const Step2 = React.memo(
  ({
    recipeIngredients,
    onDeleteIngredient,
    onAddIngredient,
    backText,
    saveText,
    onNavigateBack,
    onSaveRecipe,
  }: Props) => {
    const {t} = useTranslation();

    return (
      <View style={s.container}>
        <ScrollView style={s.body} showsVerticalScrollIndicator={false}>
          <View style={s.ingredientsBlock}>
            <StyledText style={s.labelText}>
              {t('recipe.ingredients')}
            </StyledText>

            <View style={s.ingredientList}>
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

            <View style={s.ingredientButtonWrapper}>
              <StyledButton
                Icon={AddIcon}
                text={t('recipe.addIngredient')}
                color={ButtonColor.Green}
                onPress={onAddIngredient}
                small
              />
            </View>
          </View>
        </ScrollView>

        <View style={s.footer}>
          <View style={s.buttonWrapper}>
            <StyledButton
              text={backText}
              onPress={onNavigateBack}
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
