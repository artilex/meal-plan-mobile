import {Dimensions, StyleSheet} from 'react-native';

import {
  BACKGROUND_COLOR,
  BORDER,
  BRAND_COLOR,
  COLOR,
  PADDING,
} from 'src/constants/theme';
import {adapt} from 'src/constants/layout';

const SPACE_COUNT = 3;
const SCREEN_WIDTH = Dimensions.get('window').width;
const IMAGE_SIZE = adapt(170);
const CARD_SIZE = IMAGE_SIZE + BORDER.WIDTH * 2;
const IMAGE_SPACE = (SCREEN_WIDTH - CARD_SIZE * 2) / SPACE_COUNT;

export default StyleSheet.create({
  container: {
    width: CARD_SIZE,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
    marginLeft: IMAGE_SPACE,
    marginTop: PADDING.REGULAR,
  },
  imageWrapper: {
    borderWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
    borderRadius: BORDER.RADIUS,
    overflow: 'hidden',
  },
  selectedImageWrapper: {
    borderColor: BRAND_COLOR.PRIMARY,
  },
  imageFilter: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLOR.WHITE + 'CC',
    zIndex: 10,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  textWrapper: {
    flex: 1,
    padding: PADDING.SMALL,
  },
  text: {
    fontSize: 14,
    lineHeight: 16,
  },
});
