import {StyleSheet} from 'react-native';
import {BORDER, FONT_FAMILY, INPUT_COLOR, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  disabledContainer: {
    backgroundColor: INPUT_COLOR.BACKGROUND,
    borderColor: BORDER.COLOR,
    borderWidth: BORDER.WIDTH,
    borderRadius: BORDER.RADIUS,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  disabledText: {
    paddingVertical: PADDING.SMALL,
    paddingHorizontal: PADDING.REGULAR,
    color: INPUT_COLOR.TEXT,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  textArea: {
    textAlignVertical: 'top',
  },
});
