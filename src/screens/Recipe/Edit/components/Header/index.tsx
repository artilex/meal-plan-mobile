import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import CloseIcon from 'src/assets/images/close-x.svg';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import {StyledText} from 'src/components';
import s from './styles';

type Props = {
  step: number;
  stepCount: number;
  title: string;
  onCancel: () => void;
};

const Header = React.memo(({step, stepCount, title, onCancel}: Props) => (
  <View style={s.container}>
    <TouchableOpacity
      activeOpacity={0.7}
      style={s.iconWrapper}
      onPress={onCancel}>
      <CloseIcon
        width={ICON_SIZE.REGULAR}
        height={ICON_SIZE.REGULAR}
        fill={COLOR.RED2}
      />
    </TouchableOpacity>

    <View style={s.titleWrapper}>
      <StyledText style={s.titleText} bold>
        {title}
      </StyledText>
    </View>

    <View style={s.rightCounter}>
      <StyledText>{step}</StyledText>
      <StyledText style={s.counterGrayText}>/{stepCount}</StyledText>
    </View>
  </View>
));

export default Header;
