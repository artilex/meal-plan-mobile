import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  COLOR,
  FONT_SIZE,
  ICON_SIZE,
  PADDING,
} from 'src/constants/theme';

const {LARGE: SIZE} = ICON_SIZE;

export default StyleSheet.create({
  swipeableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
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
    paddingVertical: PADDING.REGULAR,
  },
  nameText: {
    fontSize: FONT_SIZE.LARGE,
  },
  categoryText: {
    color: COLOR.GRAY2,
  },
  // SwipeableActionLayout
  actionContainer: {
    justifyContent: 'center',
    backgroundColor: COLOR.GRAY3,
    paddingHorizontal: PADDING.EXTRA_LARGE,
  },
});
