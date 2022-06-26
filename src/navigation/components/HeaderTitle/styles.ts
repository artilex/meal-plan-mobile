import {StyleSheet} from 'react-native';
import {COLOR, FONT_SIZE} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: COLOR.GRAY2,
    fontSize: FONT_SIZE.LARGE,
  },
});
