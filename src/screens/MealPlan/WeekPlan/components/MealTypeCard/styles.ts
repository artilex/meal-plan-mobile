import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  BORDER,
  FONT_FAMILY,
  FONT_SIZE,
  PADDING,
} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
    borderRadius: BORDER.RADIUS,
    borderWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: PADDING.REGULAR,
  },
  withBorder: {
    borderBottomWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
  },
  titleText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.LARGE,
  },
  content: {
    //
  },
  cardSpace: {
    height: 1,
    width: '100%',
    backgroundColor: BORDER.COLOR,
  },
});
