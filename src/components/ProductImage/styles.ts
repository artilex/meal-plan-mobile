import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  BORDER,
  ICON_SIZE,
  PADDING,
} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
  default: {
    borderWidth: BORDER.BOTTOM_WIDTH,
    borderColor: BORDER.COLOR,
    borderRadius: ICON_SIZE.EXTRA_EXTRA_LARGE,
    padding: PADDING.SMALL,
    overflow: 'hidden',
  },
});
