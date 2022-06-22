import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR} from 'src/constants/theme';
import {adapt} from 'src/constants/layout';

export default StyleSheet.create({
  rootContainer: {
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
    width: adapt(310),
  },
  container: {
    //
  },
});
