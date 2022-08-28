import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, BORDER, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
  calendarWrapper: {
    paddingVertical: PADDING.EXTRA_SMALL,
    borderBottomWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
  },
  scrollView: {
    paddingHorizontal: PADDING.REGULAR,
    paddingTop: PADDING.REGULAR,
  },
  cardWrapper: {
    paddingBottom: PADDING.REGULAR,
  },
});
