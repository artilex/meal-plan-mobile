import {StyleSheet} from 'react-native';
import {COLOR, ICON_SIZE, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: PADDING.LARGE,
    justifyContent: 'center',
  },
  icon: {
    width: ICON_SIZE.REGULAR,
    height: ICON_SIZE.REGULAR,
    borderRadius: ICON_SIZE.REGULAR,
    backgroundColor: COLOR.PRIMARY,
  },
});
