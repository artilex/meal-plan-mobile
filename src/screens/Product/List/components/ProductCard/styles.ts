import {StyleSheet} from 'react-native';
import {
  BORDER,
  COLOR,
  FONT_SIZE,
  ICON_SIZE,
  PADDING,
} from 'src/constants/theme';

const {LARGE: SIZE} = ICON_SIZE;

export default StyleSheet.create({
  container: {
    flex: 1,
    borderLeftWidth: BORDER.WIDTH,
    borderRightWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
  },
  swipeableContainer: {
    flexDirection: 'row',
  },
  image: {
    marginHorizontal: PADDING.REGULAR,
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: COLOR.GREEN1,
  },
  content: {
    flex: 1,
  },
  nameText: {
    fontSize: FONT_SIZE.LARGE,
  },
  categoryText: {
    color: COLOR.GRAY2,
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: PADDING.SMALL,
  },
  buttonWrapper: {
    marginRight: PADDING.SMALL,
  },
});
