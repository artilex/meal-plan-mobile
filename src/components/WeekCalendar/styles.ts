import {StyleSheet} from 'react-native';

import {
  BORDER,
  BRAND_COLOR,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  PADDING,
  TEXT_COLOR,
} from 'src/constants/theme';

export const weekDayNameStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.SMALL,
    color: COLOR.GRAY2,
  },
});

export const weekDayStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING.EXTRA_SMALL,
  },
  dayWrapper: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  daySelected: {
    borderWidth: BORDER.WIDTH,
    borderColor: BRAND_COLOR.PRIMARY,
  },
  daySelectedToday: {
    backgroundColor: BRAND_COLOR.PRIMARY,
  },
  dayText: {
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.SECONDARY,
    fontSize: FONT_SIZE.REGULAR,
  },
  dayTodayText: {
    color: BRAND_COLOR.PRIMARY,
  },
  dayTodaySelectedText: {
    color: COLOR.WHITE,
  },
  dayDisabledText: {
    color: COLOR.GRAY1,
  },
});

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
