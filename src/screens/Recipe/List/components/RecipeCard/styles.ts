import {Dimensions, StyleSheet} from 'react-native';

import {BACKGROUND_COLOR, BORDER, PADDING} from 'src/constants/theme';
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
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  textWrapper: {
    paddingVertical: PADDING.SMALL,
  },
  text: {
    fontSize: 14,
  },
});
