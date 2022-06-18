import React from 'react';
import {TouchableOpacity} from 'react-native';

import {styles} from './styles';
import StyledText from '../StyledText';

type Props = {
  text: string;
  onPress: () => void;
  color?: string;
  disabled?: boolean;
};

const StyledButton = ({text, color, disabled, onPress}: Props) => {
  const s = styles(color);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[s.container, disabled && s.disabled]}
      onPress={onPress}
      disabled={disabled}>
      <StyledText style={[s.text, disabled && s.disabledText]} bold>
        {text}
      </StyledText>
    </TouchableOpacity>
  );
};

export default StyledButton;
