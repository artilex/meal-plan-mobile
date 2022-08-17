import {StyleSheet} from 'react-native';
import {BORDER, COLOR, ICON_SIZE, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    borderWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
    borderRadius: BORDER.RADIUS,
    marginTop: PADDING.REGULAR,
    padding: PADDING.REGULAR,
  },
  imageWrapper: {
    paddingTop: PADDING.REGULAR,
    alignItems: 'center',
  },
  image: {
    aspectRatio: 1,
    height: undefined,
    width: '100%',
    borderRadius: BORDER.RADIUS,
  },
  circle: {
    width: ICON_SIZE.SMALL,
    height: ICON_SIZE.SMALL,
    borderRadius: ICON_SIZE.SMALL,
    backgroundColor: COLOR.GRAY2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: PADDING.REGULAR,
  },
  textWrapper: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
  },
});
