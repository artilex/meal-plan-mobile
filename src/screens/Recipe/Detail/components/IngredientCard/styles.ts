import {StyleSheet} from 'react-native';
import {COLOR, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: PADDING.SMALL,
  },
  textWrapper: {
    flex: 1,
  },
  quantityText: {
    color: COLOR.GRAY2,
  },
});
