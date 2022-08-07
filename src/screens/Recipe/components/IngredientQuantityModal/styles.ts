import {StyleSheet} from 'react-native';
import {COLOR, FONT_SIZE, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  row: {
    paddingBottom: PADDING.LARGE,
  },
  label: {
    paddingBottom: PADDING.REGULAR,
    color: COLOR.GRAY2,
    fontSize: FONT_SIZE.LARGE,
  },
  footer: {
    paddingTop: PADDING.REGULAR,
  },
});
