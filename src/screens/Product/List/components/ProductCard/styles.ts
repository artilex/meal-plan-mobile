import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, COLOR, FONT_SIZE, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginHorizontal: PADDING.REGULAR,
  },
  content: {
    flex: 1,
    paddingVertical: PADDING.REGULAR,
  },
  nameText: {
    fontSize: FONT_SIZE.LARGE,
  },
  categoryText: {
    color: COLOR.GRAY2,
  },
});
