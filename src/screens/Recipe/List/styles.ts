import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, BORDER, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: PADDING.SMALL,
    borderBottomWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
  },
});
