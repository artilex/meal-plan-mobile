import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {getButtonHeight} from 'src/components/StyledButton/utils';
import {ButtonColor, COLOR, ICON_SIZE} from 'src/constants/theme';
import StyledText from '../StyledText';
import {
  styles,
  redStyles,
  greenStyles,
  blueStyles,
  disabledStyles,
  getRootStyles,
} from './styles';

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

  const iconSize = small ? ICON_SIZE.EXTRA_SMALL : ICON_SIZE.SMALL;
  const buttonHeight = getButtonHeight(Boolean(small), Boolean(Icon));
  const rootStyles = getRootStyles(buttonHeight);

  const containerStyles = ({pressed}: {pressed: boolean}) => [
    styles.borderContainer,
    solidWithColor && styles.borderSolid,
    solidWithColor && colorStyles.border,
    pressed && styles.borderPressed,
    pressed && solidWithColor && styles.borderSolidPressed,
    disabled && disabledStyles.border,
  ];

  return (
    <View style={[rootStyles.container, stretch && rootStyles.stretched]}>
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
              width={iconSize}
              height={iconSize}
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
