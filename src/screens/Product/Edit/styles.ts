import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  PADDING,
} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
    alignItems: 'center',
    paddingHorizontal: PADDING.LARGE,
  },
  body: {
    flex: 1,
    width: '100%',
  },
  label: {
    paddingBottom: PADDING.SMALL,
    paddingTop: PADDING.REGULAR,
    color: COLOR.GRAY2,
    fontSize: FONT_SIZE.LARGE,
    fontFamily: FONT_FAMILY.BOLD,
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  footer: {
    paddingVertical: PADDING.LARGE,
    width: '100%',
  },
});
