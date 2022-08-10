import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import CameraIcon from 'src/assets/images/camera.svg';
import DeleteIcon from 'src/assets/images/close-x.svg';
import {
  BORDER,
  COLOR,
  FONT_SIZE,
  ICON_SIZE,
  PADDING,
} from 'src/constants/theme';
import {StyledText, TextArea} from 'src/components';

type Props = {
  id: string;
  text: string;
  orderNumber: number;
  image: string;
  onDelete: (id: string) => void;
  onChangeStep: () => void;
  isLast: boolean;
};

const StepCard = React.memo(
  ({id, text, orderNumber, image, onDelete, onChangeStep, isLast}: Props) => {
    const handleDelete = () => {
      onDelete(id);
    };

    const handleOpenModal = () => {
      onChangeStep();
    };

    const handleLoadImage = () => {
      handleOpenModal();
      console.log('Implement this after MVP');
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
            onPressDisabled={handleOpenModal}
            disabled
          />
        </View>
      </View>
    );
  },
);

const s = StyleSheet.create({
  container: {
    marginBottom: PADDING.EXTRA_LARGE * 2,
  },
  lastItemContainer: {
    marginBottom: PADDING.EXTRA_LARGE,
  },
  content: {
    flexDirection: 'row',
    marginBottom: PADDING.REGULAR,
  },
  leftBlock: {
    paddingRight: PADDING.SMALL,
  },
  circle: {
    width: ICON_SIZE.SMALL,
    height: ICON_SIZE.SMALL,
    borderRadius: ICON_SIZE.SMALL,
    backgroundColor: COLOR.GRAY2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.LARGE,
  },
  imageWrapper: {
    flex: 1,
    backgroundColor: COLOR.GRAY4,
    borderRadius: BORDER.RADIUS,
    paddingVertical: PADDING.EXTRA_LARGE,
    alignItems: 'center',
  },
  rightBlock: {
    paddingLeft: PADDING.SMALL,
  },
  textAreaWrapper: {
    flex: 1,
  },
});

export default StepCard;
