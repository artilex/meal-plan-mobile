import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  BORDER,
  COLOR,
  FONT_SIZE,
  PADDING,
} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
    flexDirection: 'row',
    borderBottomWidth: BORDER.WIDTH,
    borderBottomColor: BORDER.COLOR,
  },
  iconWrapper: {
    padding: PADDING.SMALL,
  },
  titleWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: COLOR.GRAY2,
    fontSize: FONT_SIZE.LARGE,
  },
  rightCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: PADDING.SMALL,
  },
  counterGrayText: {
    color: COLOR.GRAY2,
  },
});
