import {StyleSheet} from 'react-native';
import {COLOR, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // TODO: Implement dynamic opacity by scroll, from 44 to CC
    backgroundColor: COLOR.GRAY1 + '88', // 88 is opacity
    paddingVertical: PADDING.REGULAR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  rightSide: {
    flexDirection: 'row',
  },
  buttonWrapper: {
    paddingHorizontal: PADDING.REGULAR,
  },
});
