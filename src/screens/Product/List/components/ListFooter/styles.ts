import {StyleSheet} from 'react-native';
import {BORDER, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    paddingBottom: PADDING.EXTRA_LARGE * 4,
  },
  border: {
    height: BORDER.RADIUS,
    borderBottomLeftRadius: BORDER.RADIUS,
    borderBottomRightRadius: BORDER.RADIUS,
    borderWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
    borderTopWidth: 0,
    overflow: 'hidden',
  },
});
