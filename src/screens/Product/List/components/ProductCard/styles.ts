import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, COLOR, FONT_SIZE, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  swipeableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
  image: {
    marginHorizontal: PADDING.REGULAR,
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
