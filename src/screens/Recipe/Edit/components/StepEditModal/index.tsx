import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import CameraIcon from 'src/assets/images/camera.svg';
import {ButtonColor, COLOR, ICON_SIZE} from 'src/constants/theme';
import {
  BottomSheetModal,
  StyledButton,
  StyledText,
  TextArea,
} from 'src/components';
import s from './styles';

type Props = {
  initText?: string;
  initImage?: string;
  onSave: (text: string, image: string) => void;
  onClose: () => void;
};

const StepEditModal = React.memo(
  ({initText = '', initImage = '', onSave, onClose}: Props) => {
    const {t} = useTranslation();

    const [text, setText] = useState(initText);
    const [image, setImage] = useState(initImage);

    // TODO: Add validation
    const buttonDisabled = !text || text.length === 0;

    const handleSave = () => {
      onSave(text, image);
    };

    const handleLoadImage = () => {
      setImage('');
      console.log('IMPLEMENT ME');
    };

    // isVisible = true in order to unmount component on close
    return (
      <BottomSheetModal isVisible={true} onClose={onClose}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleLoadImage}
            style={s.imageWrapper}>
            <CameraIcon
              width={ICON_SIZE.LARGE}
              height={ICON_SIZE.LARGE}
              fill={COLOR.GRAY2}
            />
          </TouchableOpacity>

          <View style={s.row}>
            <StyledText style={s.label}>
              {t('recipe.stepDescription')}
            </StyledText>
            <TextArea
              text={text}
              numberOfLines={3}
              onChangeText={setText}
              placeholder={t('recipe.describeStep')}
            />
          </View>

          <View style={s.footer}>
            <StyledButton
              text={t('common.save')}
              onPress={handleSave}
              color={ButtonColor.Green}
              disabled={buttonDisabled}
              solid
            />
          </View>
        </ScrollView>
      </BottomSheetModal>
    );
  },
);

export default StepEditModal;
