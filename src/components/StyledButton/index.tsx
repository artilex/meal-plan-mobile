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
  small?: boolean;
  stretch?: boolean;
  onPress: () => void;
};

const COLOR_STYLES = [redStyles, greenStyles, blueStyles];

const StyledButton = ({
  text,
  color = -1,
  solid,
  disabled,
  small,
  stretch,
  onPress,
}: Props) => {
  const colorStyles = COLOR_STYLES[color];
  const solidWithColor = solid && colorStyles;

  const containerStyles = ({pressed}: {pressed: boolean}) => [
    styles.borderContainer,
    solidWithColor && styles.borderSolid,
    solidWithColor && colorStyles.border,
    pressed && styles.borderPressed,
    pressed && solidWithColor && styles.borderSolidPressed,
    disabled && disabledStyles.border,
  ];

  return (
    <View
      style={[
        styles.rootContainer,
        small && styles.smallRootContainer,
        stretch && styles.stretchedRootContainer,
      ]}>
      <Pressable style={containerStyles} onPress={onPress} disabled={disabled}>
        <View
          style={[
            styles.innerContainer,
            small && styles.smallInnerContainer,
            solid && colorStyles && colorStyles.background,
            disabled && disabledStyles.background,
          ]}>
          <StyledText
            style={[
              styles.text,
              small && styles.smallText,
              colorStyles && colorStyles.text,
              solid && colorStyles && styles.textSolid,
              disabled && disabledStyles.text,
            ]}
            bold>
            {text}
          </StyledText>
        </View>
      </Pressable>
    </View>
  );
};

export default StyledButton;
