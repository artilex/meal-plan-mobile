import React from 'react';
import {View} from 'react-native';

import StyledText from '../StyledText';
import {weekDayNameStyles as s} from './styles';

type Props = {
  dayName: string;
};

const WeekDayName = React.memo(({dayName}: Props) => (
  <View style={s.container}>
    <StyledText style={s.text}>{dayName}</StyledText>
  </View>
));

export default WeekDayName;
