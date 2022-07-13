import {StyleSheet} from 'react-native';
import {adapt} from 'src/constants/layout';
import {
  BACKGROUND_COLOR,
  BORDER,
  COLOR,
  ICON_SIZE,
  PADDING,
} from 'src/constants/theme';

export const buttonStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: PADDING.REGULAR,
  },
});

export const listItemStyles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING.REGULAR,
    paddingVertical: PADDING.SMALL,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeContainer: {
    backgroundColor: COLOR.GRAY4,
  },
  textWrapper: {
    flex: 1,
  },
  iconWrapper: {
    marginLeft: PADDING.REGULAR,
  },
});

export const listModalStyles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: adapt(330),
    height: '80%',
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
    borderRadius: BORDER.RADIUS,
    overflow: 'hidden',
    paddingTop: ICON_SIZE.SMALL + PADDING.REGULAR * 2,
    paddingBottom: PADDING.SMALL,
  },
  footer: {
    borderTopWidth: BORDER.WIDTH,
    borderTopColor: BORDER.COLOR,
    paddingTop: PADDING.SMALL,
    paddingHorizontal: adapt(PADDING.EXTRA_LARGE * 2),
  },
  emptyList: {
    borderLeftWidth: BORDER.WIDTH,
    borderRightWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
    paddingVertical: PADDING.EXTRA_LARGE * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeWrapper: {
    position: 'absolute',
    right: PADDING.REGULAR,
    top: PADDING.REGULAR,
    zIndex: 10,
  },
});
