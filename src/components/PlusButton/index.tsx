import React from 'react';
import {TouchableOpacity} from 'react-native';

import PlusIcon from 'src/assets/images/plus-icon.svg';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import s from './styles';

type Props = {
  onPress: () => void;
};

const PlusButton = React.memo(({onPress}: Props) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={s.container}>
    <PlusIcon
      width={ICON_SIZE.EXTRA_LARGE}
      height={ICON_SIZE.EXTRA_LARGE}
      fill={COLOR.WHITE}
    />
  </TouchableOpacity>
));

export default PlusButton;
