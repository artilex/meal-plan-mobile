import {StyleSheet} from 'react-native';
import {BORDER, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    borderLeftWidth: BORDER.WIDTH,
    borderRightWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
  },
  line: {
    height: BORDER.WIDTH,
    backgroundColor: BORDER.COLOR,
    marginVertical: PADDING.REGULAR,
  },
});
