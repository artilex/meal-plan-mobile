import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import StyledText from '../StyledText';
import {weekDayStyles as s} from './styles';

type Props = {
  day: number;
  isToday?: boolean;
  isSelected?: boolean;
  isDisabled?: boolean;
  onSelectDay: () => void;
};

const WeekDay = React.memo(
  ({day, isToday, isSelected, isDisabled, onSelectDay}: Props) => (
    <View style={s.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onSelectDay}
        style={[
          s.dayWrapper,
          isSelected && isToday && s.daySelectedToday,
          isSelected && !isToday && s.daySelected,
        ]}>
        <StyledText
          style={[
            s.dayText,
            isToday && !isSelected && s.dayTodayText,
            isToday && isSelected && s.dayTodaySelectedText,
            isDisabled && s.dayDisabledText,
          ]}>
          {day}
        </StyledText>
      </TouchableOpacity>
    </View>
  ),
);

export default WeekDay;