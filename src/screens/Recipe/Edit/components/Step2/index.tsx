import React from 'react';
import {View} from 'react-native';

import {StyledButton, StyledText} from 'src/components';
import s from './styles';
import {ButtonColor} from 'src/constants/theme';

type Props = {
  backText: string;
  saveText: string;
  onNavigateBack: () => void;
  onSaveRecipe: () => void;
};

const Step2 = React.memo(
  ({backText, saveText, onNavigateBack, onSaveRecipe}: Props) => (
    <View style={s.container}>
      <View style={s.body}>
        <StyledText>Recipe Step 2 In Progress...</StyledText>
      </View>

      <View style={s.footer}>
        <View style={s.buttonWrapper}>
          <StyledButton
            text={backText}
            onPress={onNavigateBack}
            color={ButtonColor.Green}
          />
        </View>

        <View style={s.buttonSpace} />

        <View style={s.buttonWrapper}>
          <StyledButton
            text={saveText}
            onPress={onSaveRecipe}
            color={ButtonColor.Green}
            solid
          />
        </View>
      </View>
    </View>
  ),
);

export default Step2;
