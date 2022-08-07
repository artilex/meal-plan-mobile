import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, BORDER, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
  header: {
    padding: PADDING.REGULAR,
  },
  body: {
    flex: 1,
  },
  emptyListContainer: {
    marginHorizontal: PADDING.REGULAR,
    padding: PADDING.REGULAR,
    borderWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
    borderRadius: BORDER.RADIUS,
  },
  separator: {
    height: 1,
    backgroundColor: BORDER.COLOR,
  },
});
