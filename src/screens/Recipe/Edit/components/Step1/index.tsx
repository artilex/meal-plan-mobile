import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import DefaultCoverImage from 'src/assets/images/default-cover-image.svg';
import {ButtonColor, COLOR} from 'src/constants/theme';
import {adapt} from 'src/constants/layout';
import {
  StyledButton,
  StyledText,
  StyledTextInput,
  TextArea,
} from 'src/components';
import s from './styles';

type Props = {
  recipeName: string;
  description: string;
  setRecipeName: (value: string) => void;
  setDescription: (value: string) => void;
  nextText: string;
  onNavigateNext: () => void;
};

const Step1 = React.memo(
  ({
    recipeName,
    description,
    setRecipeName,
    setDescription,
    nextText,
    onNavigateNext,
  }: Props) => {
    const {t} = useTranslation();

    const handleLoadImage = () => {
      console.log('IMPLEMENT THIS LATER');
    };

    // TODO: Hide Image Loader Block when enter text
    return (
      <View style={s.container}>
        <ScrollView style={s.body} showsVerticalScrollIndicator={false}>
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
              text={description}
              numberOfLines={3}
              placeholder={t('recipe.enterDescription')}
              onChangeText={setDescription}
            />
          </View>
        </ScrollView>

        <View style={s.footer}>
          <StyledButton
            text={nextText}
            onPress={onNavigateNext}
            color={ButtonColor.Green}
            solid
          />
        </View>
      </View>
    );
  },
);

export default Step1;
