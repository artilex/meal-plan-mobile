import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  BORDER,
  COLOR,
  FONT_SIZE,
  PADDING,
} from 'src/constants/theme';
import {getAdaptedImageSize} from 'src/constants/layout';

const IMAGE_SIZE = getAdaptedImageSize();

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
    paddingVertical: PADDING.REGULAR,
  },
  leftBlock: {
    paddingHorizontal: PADDING.REGULAR,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: BORDER.RADIUS,
  },
  defaultImage: {
    borderWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    lineHeight: FONT_SIZE.LARGE,
  },
  descriptionText: {
    fontSize: FONT_SIZE.SMALL,
    color: COLOR.GRAY2,
  },
  rightBlock: {
    justifyContent: 'center',
  },

  deleteContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: PADDING.REGULAR,
    backgroundColor: COLOR.RED2,
  },
});
