import {StyleSheet} from 'react-native';
import {
  BORDER,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  PADDING,
} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: PADDING.EXTRA_SMALL,
    paddingHorizontal: PADDING.LARGE,
    backgroundColor: COLOR.GRAY3,
    borderRadius: BORDER.RADIUS,
  },
  selectedContainer: {
    backgroundColor: COLOR.GREEN1,
  },
  text: {
    fontSize: FONT_SIZE.SMALL,
    color: COLOR.GRAY1,
  },
  selectedText: {
    color: COLOR.WHITE,
    fontFamily: FONT_FAMILY.BOLD,
    marginRight: PADDING.SMALL,
  },
  spacer: {
    height: 0,
    width: PADDING.SMALL,
  },
});
