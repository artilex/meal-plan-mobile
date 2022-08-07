import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, BORDER, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
  searchContainer: {
    marginTop: PADDING.SMALL,
    paddingHorizontal: PADDING.REGULAR,
    paddingBottom: PADDING.SMALL,
    borderBottomWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  searchWrapper: {
    flex: 1,
  },
  addButtonContainer: {
    position: 'absolute',
    zIndex: 10,
    right: PADDING.EXTRA_LARGE,
    bottom: PADDING.EXTRA_LARGE,
  },
  emptyList: {
    borderLeftWidth: BORDER.WIDTH,
    borderRightWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
    paddingVertical: PADDING.EXTRA_LARGE * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
