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
    padding: PADDING.REGULAR,
    paddingTop: 0,
  },
  body: {
    flex: 1,
  },
  imageWrapper: {
    marginTop: PADDING.REGULAR,
    paddingVertical: PADDING.EXTRA_LARGE * 1.5,
    borderRadius: BORDER.RADIUS,
    borderWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageText: {
    marginTop: PADDING.EXTRA_LARGE,
    fontSize: FONT_SIZE.LARGE,
  },
  inputBlock: {
    paddingTop: PADDING.LARGE,
  },
  labelText: {
    color: COLOR.GRAY2,
    fontSize: FONT_SIZE.LARGE,
    fontFamily: FONT_FAMILY.BOLD,
    paddingBottom: PADDING.SMALL,
  },
  footer: {
    paddingTop: PADDING.REGULAR,
  },
});
