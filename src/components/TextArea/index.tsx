import React from 'react';

import StyledTextInput from '../StyledTextInput';
import s from './styles';

type Props = {
  text: string;
  numberOfLines: number;
  placeholder?: string;
  onChangeText: (value: string) => void;
};

const TextArea = ({text, numberOfLines, placeholder, onChangeText}: Props) => (
  <StyledTextInput
    value={text}
    placeholder={placeholder}
    onChangeText={onChangeText}
    style={s.textArea}
    numberOfLines={numberOfLines}
    multiline
  />
);

export default TextArea;
