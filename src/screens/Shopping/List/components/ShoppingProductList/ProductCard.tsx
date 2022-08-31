import React, {useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';

import ActiveIcon from 'src/assets/images/active-check-mark.svg';
import InactiveIcon from 'src/assets/images/inactive-check-mark.svg';
import {ProductUnit} from 'src/services/api/types';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import {StyledText} from 'src/components';
import {cardStyles as s} from './styles';

type Props = {
  id: string;
  name: string;
  quantity: {
    value: number;
    unit: ProductUnit;
  };
  isActive: boolean;
  onCheck: (id: string) => void;
  isLast: boolean;
};

const ProductCard = React.memo(
  ({id, name, quantity, isActive, onCheck, isLast}: Props) => {
    const Icon = useMemo(
      () => (isActive ? ActiveIcon : InactiveIcon),
      [isActive],
    );

    const handleCheck = () => {
      onCheck(id);
    };

    return (
      <View style={[s.container, isLast && s.lastItemContainer]}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleCheck}
          style={s.content}>
          <StyledText numberOfLines={1} bold>
            {name}
          </StyledText>
          <StyledText style={s.quantityText}>
            {quantity.value + ' ' + quantity.unit.name}
          </StyledText>
        </TouchableOpacity>

        <View style={s.rightWrapper}>
          <Icon
            width={ICON_SIZE.SMALL}
            height={ICON_SIZE.SMALL}
            fill={COLOR.RED2}
          />
        </View>
      </View>
    );
  },
);

export default ProductCard;
