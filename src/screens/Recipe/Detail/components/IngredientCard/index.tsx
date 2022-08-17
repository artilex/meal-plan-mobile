import React from 'react';
import {View} from 'react-native';

import s from './styles';
import {StyledText} from 'src/components';

type Props = {
  name: string;
  quantityValue: number;
  quantityUnit: string;
};

const IngredientCard = React.memo(
  ({name, quantityValue, quantityUnit}: Props) => {
    return (
      <View style={s.container}>
        <View style={s.textWrapper}>
          <StyledText>{name}</StyledText>
        </View>

        <StyledText style={s.quantityText}>
          {`${quantityValue} ${quantityUnit}`}
        </StyledText>
      </View>
    );
  },
);

export default IngredientCard;
