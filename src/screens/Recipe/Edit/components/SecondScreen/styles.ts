import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
  body: {
    flex: 1,
    paddingHorizontal: PADDING.REGULAR,
  },
  ingredientsBlock: {
    paddingTop: PADDING.REGULAR,
  },
  stepsBlock: {
    paddingVertical: PADDING.REGULAR,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: PADDING.REGULAR,
    paddingBottom: PADDING.REGULAR,
  },
  buttonWrapper: {
    flex: 1,
  },
  buttonSpace: {
    width: PADDING.REGULAR,
  },
});
