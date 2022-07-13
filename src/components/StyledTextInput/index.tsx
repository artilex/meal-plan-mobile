import React, {RefObject, useState} from 'react';
import {TextInput, TextInputProps, View} from 'react-native';

import s from './styles';

type Props = TextInputProps & {
  textInputRef: RefObject<TextInput>;
  RightComponent?: () => JSX.Element;
};

const StyledTextInput = ({textInputRef, RightComponent, ...props}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={s.container}>
      <TextInput
        ref={textInputRef}
        style={s.textInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />

      {!!RightComponent && (
        <View style={s.rightContainer}>
          <RightComponent />
        </View>
      )}
    </View>
  );
};

export default StyledTextInput;
