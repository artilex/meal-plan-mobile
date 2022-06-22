import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  BORDER,
  COLOR,
  DISABLED_COLOR,
  FONT_SIZE,
  PADDING,
  TEXT_COLOR,
} from 'src/constants/theme';

export const styles = (color?: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: color ?? BACKGROUND_COLOR.PRIMARY,
      borderRadius: BORDER.RADIUS,
      paddingVertical: PADDING.REGULAR,
      paddingHorizontal: PADDING.EXTRA_LARGE,
      alignItems: 'center',
    },
    disabled: {
      //
    },
    text: {
      color: color ? COLOR.WHITE : TEXT_COLOR.PRIMARY,
      fontSize: FONT_SIZE.LARGE,
    },
    disabledText: {
      color: DISABLED_COLOR.TEXT,
    },
  });
