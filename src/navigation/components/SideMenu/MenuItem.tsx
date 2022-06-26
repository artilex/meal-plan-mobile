import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {COLOR, ICON_SIZE, TEXT_COLOR} from 'src/constants/theme';
import {StyledText} from 'src/components';
import s from './styles';

type Props = {
  label: string;
  Icon: FC<SvgProps>;
  isActive: boolean;
  onPress: () => void;
};

const {SMALL: iconSize} = ICON_SIZE;

const MenuItem = ({label, Icon, isActive, onPress}: Props) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    style={[s.itemContainer, isActive && s.activeItemContainer]}>
    <Icon
      width={iconSize}
      height={iconSize}
      fill={isActive ? COLOR.GREEN2 : TEXT_COLOR.THIRD}
      style={s.itemIcon}
    />
    <StyledText style={[s.itemText, isActive && s.activeItemText]} bold>
      {label}
    </StyledText>
  </TouchableOpacity>
);

export default MenuItem;
