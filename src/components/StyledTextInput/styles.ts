import {StyleSheet} from 'react-native';
import {
  BORDER,
  FONT_FAMILY,
  FONT_SIZE,
  INPUT_COLOR,
  LINE_HEIGHT,
  PADDING,
} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: INPUT_COLOR.BACKGROUND,
    borderColor: BORDER.COLOR,
    borderWidth: BORDER.WIDTH,
    borderRadius: BORDER.RADIUS,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  rightContainer: {
    paddingRight: PADDING.REGULAR,
  },
  textInput: {
    flex: 1,
    paddingVertical: PADDING.SMALL,
    paddingHorizontal: PADDING.REGULAR,
    color: INPUT_COLOR.TEXT,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.LARGE,
    lineHeight: LINE_HEIGHT.REGULAR,
  },
});
