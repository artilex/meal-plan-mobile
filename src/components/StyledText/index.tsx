import React from 'react';
import {Text, TextProps} from 'react-native';

import s from './styles';

type Props = TextProps & {
  bold?: boolean;
};

const StyledText = ({bold, children, style, ...rest}: Props) => (
  <Text style={[s.default, style, bold && s.bold]} {...rest}>
    {children}
  </Text>
);

export default StyledText;
