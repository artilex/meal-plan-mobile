import React from 'react';
import {TouchableOpacity} from 'react-native';

import StyledTextInput from '../StyledTextInput';
import StyledText from '../StyledText';
import s from './styles';

type Props = {
  text: string;
  numberOfLines: number;
  placeholder?: string;
  onChangeText?: (value: string) => void;
  onPressDisabled?: () => void;
  disabled?: boolean;
};

const TextArea = React.memo(
  ({
    text,
    numberOfLines,
    placeholder,
    onChangeText,
    onPressDisabled,
    disabled,
  }: Props) => {
    if (disabled) {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPressDisabled}
          style={s.disabledContainer}>
          <StyledText style={s.disabledText}>{text}</StyledText>
        </TouchableOpacity>
      );
    }

    // TODO: The height for text inside and placeholder is different, fix it.
    return (
      <StyledTextInput
        value={text}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={s.textArea}
        numberOfLines={numberOfLines}
        blurOnSubmit={true}
        multiline
      />
    );
  },
);

export default TextArea;
