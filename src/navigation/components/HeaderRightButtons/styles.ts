import {StyleSheet} from 'react-native';
import {PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingRight: PADDING.SMALL,
  },
  iconWrapper: {
    padding: PADDING.SMALL,
  },
  spacer: {
    width: PADDING.SMALL,
  },
});
