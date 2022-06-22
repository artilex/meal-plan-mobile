import {StyleSheet} from 'react-native';
import {BRAND_COLOR, ICON_SIZE, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: PADDING.LARGE,
    justifyContent: 'center',
  },
  icon: {
    width: ICON_SIZE.REGULAR,
    height: ICON_SIZE.REGULAR,
    borderRadius: ICON_SIZE.REGULAR,
    backgroundColor: BRAND_COLOR.PRIMARY,
  },
});
