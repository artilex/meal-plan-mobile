import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  BORDER,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  PADDING,
} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: COLOR.GRAY1 + '44', // 44 is opacity
    paddingVertical: PADDING.REGULAR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  imageBackground: {
    aspectRatio: 1,
    height: undefined,
    width: '100%',
    justifyContent: 'flex-end',
  },
  imageFooter: {
    height: PADDING.EXTRA_LARGE,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
    borderTopRightRadius: BORDER.RADIUS,
    borderTopLeftRadius: BORDER.RADIUS,
  },
  content: {
    paddingHorizontal: PADDING.REGULAR,
  },
  titleText: {
    color: COLOR.BLACK2,
    fontSize: FONT_SIZE.EXTRA_LARGE,
    fontFamily: FONT_FAMILY.BOLD,
  },
  descriptionText: {
    color: COLOR.GRAY1,
  },
  horizontalLine: {
    height: BORDER.WIDTH,
    backgroundColor: BORDER.COLOR,
    marginVertical: PADDING.REGULAR,
  },
  labelText: {
    color: COLOR.BLACK2,
    fontSize: FONT_SIZE.LARGE,
    fontFamily: FONT_FAMILY.BOLD,
  },
});
