import {StyleSheet} from 'react-native';

import {BACKGROUND_COLOR, BORDER, PADDING} from 'src/constants/theme';
import {adapt} from 'src/constants/layout';

const IMAGE_SIZE = adapt(170);

export default StyleSheet.create({
  container: {
    width: IMAGE_SIZE + BORDER.WIDTH * 2,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
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
    paddingHorizontal: PADDING.REGULAR,
  },
  text: {
    fontSize: 14,
  },
});
