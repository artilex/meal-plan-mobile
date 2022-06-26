import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, COLOR, PADDING} from 'src/constants/theme';
import {adapt} from 'src/constants/layout';

export default StyleSheet.create({
  rootContainer: {
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
    width: adapt(310),
  },
  container: {
    paddingVertical: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: adapt(30),
    paddingRight: adapt(20),
  },
  activeItemContainer: {
    backgroundColor: COLOR.GRAY4,
  },
  itemIcon: {
    marginRight: PADDING.EXTRA_LARGE,
  },
  activeItemText: {
    color: COLOR.GREEN2,
  },
});
