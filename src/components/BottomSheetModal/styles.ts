import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, BORDER, PADDING} from 'src/constants/theme';
import {adapt} from 'src/constants/layout';

export default StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  buttonWrapper: {
    alignItems: 'center',
    paddingBottom: PADDING.SMALL,
  },
  topLine: {
    height: PADDING.SMALL,
    borderRadius: PADDING.SMALL,
    width: adapt(75),
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
  container: {
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
    borderTopLeftRadius: BORDER.RADIUS,
    borderTopRightRadius: BORDER.RADIUS,
    padding: PADDING.REGULAR,
    overflow: 'hidden',
  },
});
