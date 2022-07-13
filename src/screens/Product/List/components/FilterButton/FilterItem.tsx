import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import ActiveCheckMark from 'src/assets/images/active-check-mark.svg';
import InactiveCheckMark from 'src/assets/images/inactive-check-mark.svg';
import {StyledText} from 'src/components';
import {listItemStyles as s} from './styles';
import {COLOR, ICON_SIZE} from 'src/constants/theme';

type Props = {
  id: string;
  name: string;
  isActive: boolean;
  onSelect: (id: string) => void;
};

const FilterItem = React.memo(({id, name, isActive, onSelect}: Props) => {
  const CheckMarkIcon = isActive ? ActiveCheckMark : InactiveCheckMark;

  const handleSelect = () => {
    onSelect(id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[s.container, isActive && s.activeContainer]}
      onPress={handleSelect}>
      <View style={s.textWrapper}>
        <StyledText>{name}</StyledText>
      </View>

      <View style={s.iconWrapper}>
        <CheckMarkIcon
          width={ICON_SIZE.EXTRA_EXTRA_SMALL}
          height={ICON_SIZE.EXTRA_EXTRA_SMALL}
          fill={COLOR.GREEN1}
        />
      </View>
    </TouchableOpacity>
  );
});

export default FilterItem;
