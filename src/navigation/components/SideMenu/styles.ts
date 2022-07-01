import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  COLOR,
  PADDING,
  TEXT_COLOR,
} from 'src/constants/theme';
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
    paddingLeft: adapt(20),
    paddingRight: adapt(15),
  },
  activeItemContainer: {
    backgroundColor: COLOR.GRAY4,
  },
  itemIcon: {
    marginRight: PADDING.EXTRA_LARGE,
  },
  itemText: {
    color: TEXT_COLOR.PRIMARY,
  },
  activeItemText: {
    color: COLOR.GREEN3,
  },
});
