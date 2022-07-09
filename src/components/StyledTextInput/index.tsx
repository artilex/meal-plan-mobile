import React, {RefObject, useState} from 'react';
import {TextInput, View} from 'react-native';

import s from './styles';

type Props = {
  textInputRef: RefObject<TextInput>;
  value: string;
  onChangeText: (text: string) => void;
  RightComponent?: () => JSX.Element;
};

const StyledTextInput = ({
  textInputRef,
  value,
  onChangeText,
  RightComponent,
}: Props) => {
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
        value={value}
        onChangeText={onChangeText}
        style={s.textInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
