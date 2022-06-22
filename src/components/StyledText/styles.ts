import {StyleSheet} from 'react-native';
import {FONT_FAMILY, FONT_SIZE, TEXT_COLOR} from 'src/constants/theme';

export default StyleSheet.create({
  default: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: TEXT_COLOR.PRIMARY,
  },
  bold: {
    fontFamily: FONT_FAMILY.BOLD,
  },
});
