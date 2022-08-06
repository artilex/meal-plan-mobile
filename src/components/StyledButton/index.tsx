import React, {FC} from 'react';
import {Pressable, View} from 'react-native';

import {
  styles,
  redStyles,
  greenStyles,
  blueStyles,
  disabledStyles,
} from './styles';
import StyledText from '../StyledText';
import {ButtonColor, COLOR, ICON_SIZE} from 'src/constants/theme';
import {SvgProps} from 'react-native-svg';

type Props = {
  text?: string;
  Icon?: FC<SvgProps>;
  color?: ButtonColor;
  solid?: boolean;
  disabled?: boolean;
  small?: boolean;
  stretch?: boolean;
  onPress: () => void;
};

const COLOR_STYLES = [redStyles, greenStyles, blueStyles];
const TEXT_COLORS = [COLOR.RED2, COLOR.GREEN1, COLOR.BLUE1];

const StyledButton = ({
  text,
  Icon,
  color = -1,
  solid,
  disabled,
  small,
  stretch,
  onPress,
}: Props) => {
  const colorStyles = COLOR_STYLES[color];
  const solidWithColor = solid && colorStyles;
  const iconColor = solid ? COLOR.WHITE : TEXT_COLORS[color];

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
          {!!Icon && (
            <Icon
              width={ICON_SIZE.SMALL}
              height={ICON_SIZE.SMALL}
              fill={iconColor}
              style={styles.icon}
            />
          )}

          {!!text && (
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
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default StyledButton;
