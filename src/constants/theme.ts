// COLORS
//------------------------------------------------------------------------------
export const COLOR = Object.freeze({
  WHITE: '#FFFFFF',
  BLACK1: '#3C3C3C',
  BLACK2: '#4B4B4B',
  GRAY1: '#777777',
  GRAY2: '#AFAFAF',
  GRAY3: '#E5E5E5',
  GRAY4: '#F7F7F7',
  RED1: '#EA2B2B',
  RED2: '#FF4B4B',
  RED3: '#FFDFE0',
  GREEN1: '#58CC02',
  GREEN2: '#58A700',
  GREEN3: '#43C000',
  GREEN4: '#89E219',
  GREEN5: '#D7FFB8',
  BLUE1: '#1CB0F6',
  BLUE2: '#2B70C9',
  BLUE3: '#1453a3',
  BLUE4: '#1899D6',
  BLUE5: '#84D8FF',
  BLUE6: '#DDF4FF',
  PURPLE: '#CE82FF',
  PINK: '#FFCAFF',
  BROWN: '#B66E28',
  ORANGE: '#FF9600',
  YELLOW: '#FFC800',
});

export const BRAND_COLOR = Object.freeze({
  PRIMARY: COLOR.GREEN1,
  SECONDARY: COLOR.GREEN2,
});

export const BACKGROUND_COLOR = Object.freeze({
  PRIMARY: COLOR.WHITE,
});

export enum ButtonColor {
  Red = 0,
  Green = 1,
  Blue = 2,
}

export const TEXT_COLOR = Object.freeze({
  PRIMARY: COLOR.BLACK1,
  SECONDARY: COLOR.BLACK2,
  THIRD: COLOR.GRAY1,
});

export const DISABLED_COLOR = Object.freeze({
  BACKGROUND: COLOR.GRAY3,
  BORDER: COLOR.GRAY3,
  TEXT: COLOR.GRAY2,
});

export const INPUT_COLOR = Object.freeze({
  BACKGROUND: COLOR.GRAY4,
  TEXT: COLOR.BLACK2,
});

export const BORDER = Object.freeze({
  COLOR: COLOR.GRAY3,
  WIDTH: 2,
  BOTTOM_WIDTH: 4,
  RADIUS: 16,
});

// FONT
//------------------------------------------------------------------------------
export const FONT_FAMILY = Object.freeze({
  REGULAR: 'Inter-Medium',
  BOLD: 'Inter-Bold',
});

export const FONT_SIZE = Object.freeze({
  SMALL: 12,
  REGULAR: 15,
  LARGE: 17,
  EXTRA_LARGE: 22,
});

export const LINE_HEIGHT = Object.freeze({
  SMALL: 15,
  REGULAR: 25,
  LARGE: 27,
  EXTRA_LARGE: 32,
});

// SIZES
//------------------------------------------------------------------------------
export const PADDING = Object.freeze({
  EXTRA_SMALL: 4,
  SMALL: 8,
  REGULAR: 12,
  LARGE: 16,
  EXTRA_LARGE: 20,
});

export const ICON_SIZE = Object.freeze({
  EXTRA_EXTRA_SMALL: 24,
  EXTRA_SMALL: 28,
  SMALL: 32,
  REGULAR: 36,
  LARGE: 44,
  EXTRA_LARGE: 56,
  EXTRA_EXTRA_LARGE: 64,
});
