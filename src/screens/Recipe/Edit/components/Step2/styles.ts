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
  body: {
    flex: 1,
    paddingHorizontal: PADDING.REGULAR,
  },
  ingredientsBlock: {
    paddingTop: PADDING.REGULAR,
  },
  ingredientList: {
    borderWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
    borderRadius: BORDER.RADIUS,
  },
  stepsBlock: {
    paddingTop: PADDING.REGULAR,
  },
  labelText: {
    color: COLOR.GRAY2,
    fontSize: FONT_SIZE.LARGE,
    fontFamily: FONT_FAMILY.BOLD,
    paddingBottom: PADDING.SMALL,
  },
  ingredientButtonWrapper: {
    alignItems: 'center',
    paddingTop: PADDING.LARGE,
  },
  footer: {
    flexDirection: 'row',
    padding: PADDING.REGULAR,
  },
  buttonWrapper: {
    flex: 1,
  },
  buttonSpace: {
    width: PADDING.REGULAR,
  },
});
