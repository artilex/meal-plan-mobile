import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {getWeekDayNames, getWeekDays} from 'src/utils/dateUtils';
import WeekDayName from './WeekDayName';
import WeekDay from './WeekDay';
import s from './styles';

type Props = {
  firstDayIndex?: number;
  selectedDay: Date;
  onSelectDay: (date: Date) => void;
};

const WeekCalendar = React.memo(
  ({firstDayIndex = 0, selectedDay, onSelectDay}: Props) => {
    const {t} = useTranslation();

    const weekDayNames = useMemo(
      () =>
        getWeekDayNames(
          [
            t('calendar.day.su'),
            t('calendar.day.mo'),
            t('calendar.day.tu'),
            t('calendar.day.we'),
            t('calendar.day.th'),
            t('calendar.day.fr'),
            t('calendar.day.sa'),
          ],
          firstDayIndex,
        ),
      [t, firstDayIndex],
    );
    const weekDays = useMemo(
      () => getWeekDays(selectedDay, firstDayIndex),
      [selectedDay, firstDayIndex],
    );

    return (
      <View>
        <View style={s.row}>
          {weekDayNames.map(dayName => (
            <WeekDayName key={dayName} dayName={dayName} />
          ))}
        </View>

        <View style={s.row}>
          {weekDays.map(({date, isToday, isSelected, isCurrent}) => {
            const handleSelectDay = () => {
              onSelectDay(date);
            };

            return (
              <WeekDay
                key={date.getDate()}
                day={date.getDate()}
                isToday={isToday}
                isSelected={isSelected}
                isDisabled={!isCurrent}
                onSelectDay={handleSelectDay}
              />
            );
          })}
        </View>
      </View>
    );
  },
);

export default WeekCalendar;
