import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Keyboard, ScrollView, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import DefaultCoverImage from 'src/assets/images/default-cover-image.svg';
import {ButtonColor, COLOR} from 'src/constants/theme';
import {adapt} from 'src/constants/layout';
import {recipeActions} from 'src/store';
import {
  StyledButton,
  StyledText,
  StyledTextInput,
  TextArea,
} from 'src/components';
import s from './styles';

type Props = {
  name: string;
  description: string;
  nextText: string;
  onNavigateNext: () => void;
};

const Step1 = React.memo(
  ({name, description, nextText, onNavigateNext}: Props) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const [recipeName, setRecipeName] = useState(name);
    const [recipeDescription, setRecipeDescription] = useState(description);
    const [isKeyboardShowing, setIsKeyboardShowing] = useState(false);

    useEffect(() => {
      const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
        setIsKeyboardShowing(true);
      });
      const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        setIsKeyboardShowing(false);
      });

      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);

    const handleNavigateNext = () => {
      dispatch(
        recipeActions.createDraftRecipe({
          name: recipeName,
          description: recipeDescription,
          cover: null,
        }),
      );

      onNavigateNext();
    };

    const handleLoadImage = () => {
      console.log('IMPLEMENT THIS LATER');
    };

    // TODO: Hide Image Loader Block when enter text
    return (
      <View style={s.container}>
        <ScrollView style={s.body} showsVerticalScrollIndicator={false}>
          {!isKeyboardShowing && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleLoadImage}
              style={s.imageWrapper}>
              <DefaultCoverImage
                width={adapt(75)}
                height={adapt(75)}
                fill={COLOR.GRAY2}
              />

              <StyledText style={s.imageText} bold>
                {t('recipe.addCoverPhoto')}
              </StyledText>
            </TouchableOpacity>
          )}

          <View style={s.inputBlock}>
            <StyledText style={s.labelText}>
              {t('recipe.recipeName')}
            </StyledText>
            <StyledTextInput
              placeholder={t('recipe.enterRecipeName')}
              value={recipeName}
              onChangeText={setRecipeName}
            />
          </View>

          <View style={s.inputBlock}>
            <StyledText style={s.labelText}>
              {t('recipe.description')}
            </StyledText>
            <TextArea
              text={recipeDescription}
              onChangeText={setRecipeDescription}
              placeholder={t('recipe.enterDescription')}
              numberOfLines={3}
            />
          </View>
        </ScrollView>

        <View style={s.footer}>
          <StyledButton
            text={nextText}
            onPress={handleNavigateNext}
            color={ButtonColor.Green}
            // TODO: Add validation
            disabled={recipeName.length === 0}
            solid
          />
        </View>
      </View>
    );
  },
);

export default Step1;
