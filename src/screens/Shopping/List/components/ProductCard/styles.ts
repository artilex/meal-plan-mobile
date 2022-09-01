import {StyleSheet} from 'react-native';
import {BORDER, COLOR, FONT_SIZE, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: PADDING.REGULAR,
    paddingRight: PADDING.EXTRA_SMALL,
    paddingVertical: PADDING.SMALL,
    borderBottomWidth: BORDER.WIDTH,
    borderBottomColor: BORDER.COLOR,
  },
  lastItemContainer: {
    borderBottomWidth: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: PADDING.REGULAR,
  },
  quantityText: {
    color: COLOR.GRAY2,
    lineHeight: FONT_SIZE.REGULAR,
  },
  rightWrapper: {
    padding: PADDING.SMALL,
  },
});
