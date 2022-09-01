import React, {useMemo, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import ActiveIcon from 'src/assets/images/active-check-mark.svg';
import InactiveIcon from 'src/assets/images/inactive-check-mark.svg';
import {ProductUnit} from 'src/services/api/types';
import {BRAND_COLOR, ICON_SIZE} from 'src/constants/theme';
import {ProductImage, StyledText} from 'src/components';
import s from './styles';

type Props = {
  id: string;
  name: string;
  quantity: {
    value: number;
    unit: ProductUnit;
  };
  isActive: boolean;
  onCheck: (id: string, status: boolean) => void;
  isLast: boolean;
};

const ProductCard = React.memo(
  ({id, name, quantity, isActive, onCheck, isLast}: Props) => {
    const [status, setStatus] = useState(isActive);
    const Icon = useMemo(() => (status ? ActiveIcon : InactiveIcon), [status]);

    const handleCheck = () => {
      setStatus(oldState => !oldState);
      onCheck(id, !status);
    };

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleCheck}
        style={[s.container, isLast && s.lastItemContainer]}>
        <ProductImage image={''} disabled />

        <View style={s.content}>
          <StyledText numberOfLines={1} bold>
            {name}
          </StyledText>

          <StyledText style={s.quantityText}>
            {quantity.value + ' ' + quantity.unit.name}
          </StyledText>
        </View>

        <View style={s.rightWrapper}>
          <Icon
            width={ICON_SIZE.SMALL}
            height={ICON_SIZE.SMALL}
            fill={BRAND_COLOR.PRIMARY}
          />
        </View>
      </TouchableOpacity>
    );
  },
);

export default ProductCard;
