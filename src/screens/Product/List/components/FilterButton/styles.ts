import {StyleSheet} from 'react-native';
import {adapt} from 'src/constants/layout';
import {BACKGROUND_COLOR, BORDER, COLOR, PADDING} from 'src/constants/theme';

export const buttonStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: PADDING.REGULAR,
  },
  redCircle: {
    position: 'absolute',
    right: 2,
    bottom: 10,
    width: 8,
    height: 8,
    backgroundColor: COLOR.RED2,
    borderRadius: 10,
  },
});

export const listItemStyles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING.LARGE,
    paddingVertical: PADDING.REGULAR,
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
    paddingTop: PADDING.SMALL,
    paddingBottom: PADDING.SMALL,
  },
  footer: {
    paddingTop: PADDING.SMALL,
    flexDirection: 'row',
    paddingHorizontal: adapt(PADDING.REGULAR),
  },
  buttonWrapper: {
    flex: 1,
    paddingHorizontal: adapt(PADDING.REGULAR),
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
