import {StyleSheet} from 'react-native';
import {PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  clearIcon: {
    justifyContent: 'center',
    paddingHorizontal: PADDING.SMALL,
  },
  searchIcon: {
    justifyContent: 'center',
    paddingHorizontal: PADDING.EXTRA_SMALL,
  },
});
