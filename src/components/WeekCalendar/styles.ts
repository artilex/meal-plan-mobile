import {StyleSheet} from 'react-native';

import {
  BORDER,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  PADDING,
  TEXT_COLOR,
} from 'src/constants/theme';

export default StyleSheet.create({
  // container: {
  //   marginHorizontal: PADDINGS.regular,
  // },
  // calendarHeaderContainer: {
  //   flexDirection: 'row',
  //   marginVertical: PADDINGS.regular,
  // },
  // calendarHeaderTitle: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  // calendarHeaderTitleWrapper: {
  //   flex: 1,
  // },
  // titleText: {
  //   fontSize: FONT_SIZES.regular,
  //   fontFamily: FONT_FAMILY.extraBold,
  // },
  container: {
    flexDirection: 'row',
  },
  // weekDayNamesContainer: {
  //   flexDirection: 'row',
  // },
  // weekDayNameContainer: {
  //   flex: 1,
  //   alignItems: 'center',
  // },
  // weekDayNameText: {
  //   fontFamily: FONT_FAMILY.extraBold,
  //   fontSize: FONT_SIZES.small,
  //   color: COLORS.graySecondary,
  // },
  dayContainer: {
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
    borderColor: BORDER.COLOR,
  },
  daySelectedToday: {
    backgroundColor: COLOR.BLUE1,
  },
  dayText: {
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.PRIMARY,
    fontSize: FONT_SIZE.REGULAR,
  },
  dayTodayText: {
    color: COLOR.BLUE1,
  },
  dayTodaySelectedText: {
    color: COLOR.WHITE,
  },
  dayDisabledText: {
    color: COLOR.GRAY1,
  },
  // horizontalSplitter: {
  //   width: PADDINGS.regular,
  // },
});
