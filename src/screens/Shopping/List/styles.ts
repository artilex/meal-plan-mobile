import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  BORDER,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  PADDING,
} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
  scrollView: {
    padding: PADDING.REGULAR,
  },
  titleText: {
    color: COLOR.GRAY2,
    fontSize: FONT_SIZE.EXTRA_LARGE,
    fontFamily: FONT_FAMILY.BOLD,
    paddingBottom: PADDING.SMALL,
  },
  listWrapper: {
    borderWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
    borderRadius: BORDER.RADIUS,
    marginBottom: PADDING.LARGE,
  },
  emptyList: {
    alignItems: 'center',
    paddingVertical: PADDING.EXTRA_SMALL,
  },
});
