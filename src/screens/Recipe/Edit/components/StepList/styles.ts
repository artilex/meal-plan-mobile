import {StyleSheet} from 'react-native';
import {
  BORDER,
  COLOR,
  FONT_SIZE,
  ICON_SIZE,
  PADDING,
} from 'src/constants/theme';

export const listStyles = StyleSheet.create({
  emptyList: {
    alignItems: 'center',
    paddingVertical: PADDING.EXTRA_SMALL,
  },
});

export const cardStyles = StyleSheet.create({
  container: {
    marginBottom: PADDING.EXTRA_LARGE * 2,
  },
  lastItemContainer: {
    marginBottom: PADDING.EXTRA_LARGE,
  },
  content: {
    flexDirection: 'row',
    marginBottom: PADDING.REGULAR,
  },
  leftBlock: {
    paddingRight: PADDING.SMALL,
  },
  circle: {
    width: ICON_SIZE.SMALL,
    height: ICON_SIZE.SMALL,
    borderRadius: ICON_SIZE.SMALL,
    backgroundColor: COLOR.GRAY2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.LARGE,
  },
  imageWrapper: {
    flex: 1,
    backgroundColor: COLOR.GRAY4,
    borderRadius: BORDER.RADIUS,
    paddingVertical: PADDING.EXTRA_LARGE,
    alignItems: 'center',
  },
  rightBlock: {
    paddingLeft: PADDING.SMALL,
  },
  textAreaWrapper: {
    flex: 1,
  },
});
