import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, BORDER, PADDING} from 'src/constants/theme';
import {adapt} from 'src/constants/layout';

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
  filterContainer: {
    justifyContent: 'center',
    paddingLeft: PADDING.REGULAR,
  },
  emptyList: {
    borderLeftWidth: BORDER.WIDTH,
    borderRightWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
    paddingVertical: PADDING.EXTRA_LARGE * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Modal
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: adapt(330),
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
    borderRadius: BORDER.RADIUS,
    overflow: 'hidden',
    paddingTop: PADDING.EXTRA_LARGE,
  },
  modalCloseWrapper: {
    position: 'absolute',
    right: PADDING.REGULAR,
    top: PADDING.REGULAR,
    zIndex: 10,
  },
});
