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
    borderColor: BORDER.COLOR,
    borderRadius: ICON_SIZE.EXTRA_EXTRA_LARGE,
    padding: PADDING.EXTRA_SMALL,
    borderWidth: BORDER.WIDTH,
    overflow: 'hidden',
  },
  bigContainer: {
    padding: PADDING.REGULAR,
    borderWidth: BORDER.BOTTOM_WIDTH,
  },
});
