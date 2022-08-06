import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  BORDER,
  COLOR,
  DISABLED_COLOR,
  FONT_SIZE,
  LINE_HEIGHT,
  PADDING,
} from 'src/constants/theme';

export const redStyles = StyleSheet.create({
  border: {
    backgroundColor: COLOR.RED1,
  },
  background: {
    backgroundColor: COLOR.RED2,
  },
  text: {
    color: COLOR.RED2,
  },
});

export const greenStyles = StyleSheet.create({
  border: {
    backgroundColor: COLOR.GREEN2,
  },
  background: {
    backgroundColor: COLOR.GREEN1,
  },
  text: {
    color: COLOR.GREEN1,
  },
});

export const blueStyles = StyleSheet.create({
  border: {
    backgroundColor: COLOR.BLUE4,
  },
  background: {
    backgroundColor: COLOR.BLUE1,
  },
  text: {
    color: COLOR.BLUE1,
  },
});

export const disabledStyles = StyleSheet.create({
  border: {
    paddingBottom: BORDER.WIDTH,
    backgroundColor: DISABLED_COLOR.BORDER,
  },
  background: {
    backgroundColor: DISABLED_COLOR.BACKGROUND,
  },
  text: {
    color: DISABLED_COLOR.TEXT,
  },
});

export const getRootStyles = (height: number) =>
  StyleSheet.create({
    container: {
      justifyContent: 'flex-end',
      height,
    },
    stretched: {
      width: '100%',
    },
  });

export const styles = StyleSheet.create({
  borderContainer: {
    backgroundColor: BORDER.COLOR,
    borderRadius: BORDER.RADIUS,
    padding: BORDER.WIDTH,
    paddingBottom: BORDER.BOTTOM_WIDTH,
  },
  borderSolid: {
    padding: 0,
    paddingBottom: BORDER.BOTTOM_WIDTH,
  },
  borderPressed: {
    paddingBottom: BORDER.WIDTH,
  },
  borderSolidPressed: {
    paddingBottom: 0,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
    borderRadius: BORDER.RADIUS,
    paddingVertical: PADDING.REGULAR,
    paddingHorizontal: PADDING.EXTRA_LARGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallInnerContainer: {
    paddingVertical: PADDING.SMALL,
    paddingHorizontal: PADDING.REGULAR,
  },
  icon: {
    marginRight: PADDING.SMALL,
  },
  text: {
    color: COLOR.GRAY2,
    fontSize: FONT_SIZE.LARGE,
    textTransform: 'uppercase',
  },
  smallText: {
    fontSize: FONT_SIZE.SMALL,
    lineHeight: LINE_HEIGHT.SMALL,
  },
  textSolid: {
    color: COLOR.WHITE,
  },
});
