import React from 'react';
import {Pressable, View} from 'react-native';

import {
  styles,
  redStyles,
  greenStyles,
  blueStyles,
  disabledStyles,
} from './styles';
import StyledText from '../StyledText';

export enum ButtonColor {
  Red = 0,
  Green = 1,
  Blue = 2,
}

type Props = {
  text: string;
  color?: ButtonColor;
  solid?: boolean;
  disabled?: boolean;
  onPress: () => void;
};

const COLOR_STYLES = [redStyles, greenStyles, blueStyles];

const StyledButton = ({text, color = -1, solid, disabled, onPress}: Props) => {
  let colorStyles = COLOR_STYLES[color];

  const containerStyles = ({pressed}: {pressed: boolean}) => [
    styles.borderContainer,
    solid && colorStyles && styles.borderSolid,
    solid && colorStyles && colorStyles.border,
    pressed && styles.borderPressed,
    disabled && disabledStyles.border,
  ];

  return (
    <Pressable style={containerStyles} onPress={onPress} disabled={disabled}>
      <View
        style={[
          styles.innerContainer,
          solid && colorStyles && colorStyles.background,
          disabled && disabledStyles.background,
        ]}>
        <StyledText
          style={[
            styles.text,
            colorStyles && colorStyles.text,
            solid && colorStyles && styles.textSolid,
            disabled && disabledStyles.text,
          ]}
          bold>
          {text}
        </StyledText>
      </View>
    </Pressable>
  );
};

export default StyledButton;
