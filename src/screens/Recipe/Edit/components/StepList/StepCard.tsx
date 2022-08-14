import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import CameraIcon from 'src/assets/images/camera.svg';
import DeleteIcon from 'src/assets/images/close-x.svg';
import {RecipeStep} from 'src/services/api/types';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import {StyledText, TextArea} from 'src/components';
import {cardStyles as s} from './styles';

type Props = {
  id: string;
  text: string;
  orderNumber: number;
  image: string;
  onDelete: (id: string) => void;
  onChangeStep: (step: RecipeStep) => void;
  isLast: boolean;
};

const StepCard = React.memo(
  ({id, text, orderNumber, image, onDelete, onChangeStep, isLast}: Props) => {
    const handleDelete = () => {
      onDelete(id);
    };

    const handleEditStep = () => {
      onChangeStep({id, text, orderNumber, image});
    };

    const handleLoadImage = () => {
      handleEditStep();
      console.log('Implement logic with image after MVP');
    };

    return (
      <View style={isLast ? s.lastItemContainer : s.container}>
        <View style={s.content}>
          <View style={s.leftBlock}>
            <View style={s.circle}>
              <StyledText style={s.numberText}>{orderNumber}</StyledText>
            </View>
          </View>
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

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleDelete}
            style={s.rightBlock}>
            <DeleteIcon
              width={ICON_SIZE.EXTRA_SMALL}
              height={ICON_SIZE.EXTRA_SMALL}
              fill={COLOR.RED2}
            />
          </TouchableOpacity>
        </View>

        <View style={s.textAreaWrapper}>
          <TextArea
            text={text}
            numberOfLines={2}
            onPressDisabled={handleEditStep}
            disabled
          />
        </View>
      </View>
    );
  },
);

export default StepCard;
