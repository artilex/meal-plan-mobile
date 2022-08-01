import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
  listSeparator: {
    height: PADDING.REGULAR,
  },
  listColumnWrapper: {
    justifyContent: 'space-evenly',
  },
});
