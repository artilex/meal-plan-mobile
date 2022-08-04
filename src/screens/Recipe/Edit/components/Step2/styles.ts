import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    padding: PADDING.REGULAR,
  },
  buttonWrapper: {
    flex: 1,
  },
  buttonSpace: {
    width: PADDING.REGULAR,
  },
});
