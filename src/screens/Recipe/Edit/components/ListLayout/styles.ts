import {StyleSheet} from 'react-native';
import {COLOR, FONT_FAMILY, FONT_SIZE, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  labelText: {
    color: COLOR.GRAY2,
    fontSize: FONT_SIZE.EXTRA_LARGE,
    fontFamily: FONT_FAMILY.BOLD,
    paddingBottom: PADDING.SMALL,
  },
  addButtonWrapper: {
    paddingTop: PADDING.LARGE,
    alignItems: 'center',
  },
});
