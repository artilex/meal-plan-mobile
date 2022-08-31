import {StyleSheet} from 'react-native';
import {BORDER, COLOR, FONT_SIZE, PADDING} from 'src/constants/theme';

export const listStyles = StyleSheet.create({
  scrollView: {
    padding: PADDING.REGULAR,
  },
  container: {
    borderWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
    borderRadius: BORDER.RADIUS,
    paddingBottom: PADDING.EXTRA_SMALL,
  },
  emptyList: {
    alignItems: 'center',
    paddingVertical: PADDING.EXTRA_SMALL,
  },
});

export const cardStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: PADDING.REGULAR,
    paddingRight: PADDING.EXTRA_SMALL,
    borderBottomWidth: BORDER.WIDTH,
    borderBottomColor: BORDER.COLOR,
  },
  lastItemContainer: {
    borderBottomWidth: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  quantityText: {
    color: COLOR.GRAY2,
    lineHeight: FONT_SIZE.REGULAR,
  },
  rightWrapper: {
    padding: PADDING.SMALL,
  },
});
