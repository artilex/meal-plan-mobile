import React, {FC} from 'react';
import {SvgProps} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';

import s from './styles';

type Props = {
  Icon: FC<SvgProps>;
  color: string;
  onPress: () => void;
};

const SwipeableActionLayout = React.memo(({Icon, color, onPress}: Props) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={s.actionContainer}>
    <Icon width={32} height={32} fill={color} />
  </TouchableOpacity>
));

export default SwipeableActionLayout;
