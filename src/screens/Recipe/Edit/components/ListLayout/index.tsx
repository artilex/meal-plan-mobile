import React from 'react';
import {View} from 'react-native';

import AddIcon from 'src/assets/images/circle-plus.svg';
import {ButtonColor} from 'src/constants/theme';
import {StyledButton, StyledText} from 'src/components';
import s from './styles';

type Props = {
  children: React.ReactNode;
  title: string;
  addItemText: string;
  onAddItem: () => void;
};

const ListLayout = React.memo(
  ({children, title, addItemText, onAddItem}: Props) => (
    <View>
      <StyledText style={s.labelText}>{title}</StyledText>

      {children}

      <View style={s.addButtonWrapper}>
        <StyledButton
          Icon={AddIcon}
          text={addItemText}
          color={ButtonColor.Green}
          onPress={onAddItem}
          small
        />
      </View>
    </View>
  ),
);

export default ListLayout;
