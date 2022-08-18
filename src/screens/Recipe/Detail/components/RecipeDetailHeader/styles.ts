import {StyleSheet} from 'react-native';
import {COLOR, PADDING} from 'src/constants/theme';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: COLOR.GRAY1 + '44', // 44 is opacity
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
  tempButton: {
    width: 36,
    height: 36,
    borderRadius: 36,
    backgroundColor: COLOR.GREEN1,
  },
});
