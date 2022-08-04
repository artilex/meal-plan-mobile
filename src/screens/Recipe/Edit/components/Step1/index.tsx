import React from 'react';
import {View} from 'react-native';

import {StyledButton, StyledText} from 'src/components';
import s from './styles';
import {ButtonColor} from 'src/constants/theme';

type Props = {
  nextText: string;
  onNavigateNext: () => void;
};

const Step1 = React.memo(({nextText, onNavigateNext}: Props) => (
  <View style={s.container}>
    <View style={s.body}>
      <StyledText>Recipe Step 1 In Progress...</StyledText>
    </View>

    <View style={s.footer}>
      <StyledButton
        text={nextText}
        onPress={onNavigateNext}
        color={ButtonColor.Green}
        solid
      />
    </View>
  </View>
));

export default Step1;
