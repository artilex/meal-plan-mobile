import {BORDER, ICON_SIZE, LINE_HEIGHT, PADDING} from 'src/constants/theme';

export const getButtonHeight = (isSmall: boolean, hasIcon: boolean): number => {
  const horizontalPadding = isSmall ? PADDING.SMALL : PADDING.REGULAR;
  const iconSize = isSmall ? ICON_SIZE.EXTRA_SMALL : ICON_SIZE.SMALL;
  const textHeight = isSmall ? LINE_HEIGHT.SMALL : LINE_HEIGHT.REGULAR;
  const contentHeight = hasIcon ? iconSize : textHeight;

  return (
    BORDER.WIDTH + BORDER.BOTTOM_WIDTH + horizontalPadding * 2 + contentHeight
  );
};
