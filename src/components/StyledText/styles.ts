import {StyleSheet} from 'react-native';
import {COLOR, FONT_FAMILY, FONT_SIZE} from 'src/constants/theme';

export default StyleSheet.create({
  default: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.TEXT_PRIMARY,
  },
  bold: {
    fontFamily: FONT_FAMILY.BOLD,
  },
});
