import {StyleSheet} from 'react-native';
import {BORDER_RADIUS, COLOR, FONT_SIZE, PADDING} from 'src/constants/theme';

export const styles = (color?: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: color ?? COLOR.WHITE,
      borderRadius: BORDER_RADIUS.REGULAR,
      paddingVertical: PADDING.REGULAR,
      paddingHorizontal: PADDING.EXTRA_LARGE,
      alignItems: 'center',
    },
    disabled: {
      //
    },
    text: {
      color: color ? COLOR.WHITE : COLOR.TEXT_PRIMARY,
      fontSize: FONT_SIZE.LARGE,
    },
    disabledText: {
      color: COLOR.TEXT_SECONDARY,
    },
  });
