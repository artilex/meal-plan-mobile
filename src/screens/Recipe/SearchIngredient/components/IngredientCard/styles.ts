import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, FONT_SIZE, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
    flexDirection: 'row',
  },
  image: {
    marginHorizontal: PADDING.REGULAR,
    paddingVertical: PADDING.SMALL,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: FONT_SIZE.LARGE,
  },
  rightWrapper: {
    paddingHorizontal: PADDING.REGULAR,
    justifyContent: 'center',
  },
});
