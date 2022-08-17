import React from 'react';
import {Image, View} from 'react-native';

import s from './styles';
import {StyledText} from 'src/components';

type Props = {
  orderNumber: number;
  text: string;
  image: string | null;
};

const StepCard = React.memo(({text, orderNumber, image}: Props) => {
  return (
    <View style={s.container}>
      <View style={s.content}>
        <View style={s.circle}>
          <StyledText>{orderNumber}</StyledText>
        </View>

        <View style={s.textWrapper}>
          <StyledText>{text}</StyledText>
        </View>
      </View>

      {!!image && (
        <View style={s.imageWrapper}>
          <Image source={{uri: image}} style={s.image} />
        </View>
      )}
    </View>
  );
});

export default StepCard;
