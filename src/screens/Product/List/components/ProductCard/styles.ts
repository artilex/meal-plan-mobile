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
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: BORDER.WIDTH,
    borderRightWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
  },
  touchableContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
  removeWrapper: {
    paddingHorizontal: PADDING.SMALL,
  },
});
