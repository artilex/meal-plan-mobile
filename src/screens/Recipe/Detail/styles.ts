import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
  image: {
    aspectRatio: 1,
    height: undefined,
    width: '100%',
  },
});
