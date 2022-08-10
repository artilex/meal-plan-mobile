import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import CameraIcon from 'src/assets/images/camera.svg';
import {ButtonColor, COLOR, ICON_SIZE} from 'src/constants/theme';
import {recipeActions} from 'src/store';
import {
  BottomSheetModal,
  StyledButton,
  StyledText,
  TextArea,
} from 'src/components';
import s from './styles';

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

const StepEditModal = React.memo(({isVisible, onClose}: Props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [image, setImage] = useState('');
  const [text, setText] = useState<string>('');

  // TODO: Add validation
  const buttonDisabled = !text || text.length === 0;

  const handleClose = () => {
    setText('');
    setImage('');
    onClose();
  };

  const handleSave = () => {
    handleClose();

    dispatch(
      recipeActions.addStep({
        text,
        image,
      }),
    );
  };

  const handleLoadImage = () => {
    console.log('IMPLEMENT ME');
  };

  return (
    <BottomSheetModal isVisible={isVisible} onClose={handleClose}>
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
          <StyledText style={s.label}>{t('recipe.stepDescription')}</StyledText>
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
});

export default StepEditModal;
