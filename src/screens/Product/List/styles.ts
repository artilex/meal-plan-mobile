import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, BORDER, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
  listWrapper: {
    padding: PADDING.REGULAR,
  },
  flatList: {
    borderColor: BORDER.COLOR,
    borderWidth: BORDER.WIDTH,
    borderRadius: BORDER.RADIUS,
    overflow: 'hidden',
  },
  itemSeparator: {
    height: 0,
    borderBottomWidth: BORDER.WIDTH,
    borderBottomColor: BORDER.COLOR,
  },
  emptyList: {
    paddingVertical: PADDING.EXTRA_LARGE * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
