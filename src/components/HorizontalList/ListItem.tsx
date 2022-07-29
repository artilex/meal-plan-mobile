import React from 'react';
import {TouchableOpacity} from 'react-native';

import StyledText from 'src/components/StyledText';
import CancelIcon from 'src/assets/images/close-x.svg';
import {COLOR, FONT_SIZE} from 'src/constants/theme';
import s from './styles';

type Props = {
  id: string;
  value: string;
  isSelected: boolean;
  onSelect: (itemId: string) => void;
};

const ListItem = React.memo(({id, value, isSelected, onSelect}: Props) => {
  const handlePress = () => {
    onSelect(id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style={[s.container, isSelected && s.selectedContainer]}>
      <StyledText style={[s.text, isSelected && s.selectedText]}>
        {value}
      </StyledText>
      {isSelected && (
        <CancelIcon
          width={FONT_SIZE.REGULAR}
          height={FONT_SIZE.REGULAR}
          fill={COLOR.WHITE}
        />
      )}
    </TouchableOpacity>
  );
});

export default ListItem;
