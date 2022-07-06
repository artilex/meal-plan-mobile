import {StyleSheet} from 'react-native';
import {COLOR, FONT_SIZE, ICON_SIZE, PADDING} from 'src/constants/theme';

const {LARGE: SIZE} = ICON_SIZE;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchableContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: PADDING.REGULAR,
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
