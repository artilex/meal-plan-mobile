import {StyleSheet} from 'react-native';
import {BORDER, COLOR, FONT_SIZE, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  imageWrapper: {
    backgroundColor: COLOR.GRAY4,
    borderRadius: BORDER.RADIUS,
    paddingVertical: PADDING.EXTRA_LARGE,
    alignItems: 'center',
  },
  row: {
    paddingTop: PADDING.REGULAR,
  },
  label: {
    paddingBottom: PADDING.SMALL,
    color: COLOR.GRAY2,
    fontSize: FONT_SIZE.LARGE,
  },
  footer: {
    paddingTop: PADDING.REGULAR,
  },
});
