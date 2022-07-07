import {StyleSheet} from 'react-native';
import {BORDER, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    paddingTop: PADDING.LARGE,
  },
  border: {
    height: BORDER.RADIUS,
    borderTopLeftRadius: BORDER.RADIUS,
    borderTopRightRadius: BORDER.RADIUS,
    borderWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
    borderBottomWidth: 0,
    overflow: 'hidden',
  },
});
