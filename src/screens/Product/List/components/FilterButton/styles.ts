import {StyleSheet} from 'react-native';
import {adapt} from 'src/constants/layout';
import {BACKGROUND_COLOR, BORDER, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
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
});

export const listItemStyles = StyleSheet.create({
  container: {
    //
  },
});

export const modalStyles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: adapt(330),
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
    borderRadius: BORDER.RADIUS,
    overflow: 'hidden',
    paddingTop: PADDING.EXTRA_LARGE,
  },
  closeWrapper: {
    position: 'absolute',
    right: PADDING.REGULAR,
    top: PADDING.REGULAR,
    zIndex: 10,
  },
});
