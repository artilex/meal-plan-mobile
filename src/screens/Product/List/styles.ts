import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
    paddingHorizontal: PADDING.LARGE,
  },
  emptyList: {
    paddingVertical: PADDING.EXTRA_LARGE * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
