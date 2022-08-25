import {CalendarDay} from 'src/types';

export const DAYS_IN_WEEK = 7;

export const getWeekDayNames = (
  shorDayNames: string[],
  firstDay: number = 0,
): string[] => {
  let dayNames = [...shorDayNames];

  if (firstDay > 0 && firstDay < DAYS_IN_WEEK) {
    dayNames = dayNames.slice(firstDay).concat(dayNames.slice(0, firstDay));
  }

  return dayNames;
};

export const getWeekDays = (current: Date, firstDay: number): CalendarDay[] => {
  const startOfCurrentWeek = getStartOfWeek(current, firstDay);
  const weekDates = [];

  for (let dayIndex = 0; dayIndex < DAYS_IN_WEEK; dayIndex++) {
    const day = addDays(startOfCurrentWeek, dayIndex);
    weekDates.push({
      date: day,
      isToday: sameDays(day, new Date()),
      isSelected: sameDays(day, current),
      isCurrent: true,
    });
  }

  return weekDates;
};

export const getStartOfWeek = (current: Date, firstDay: number): Date => {
  const currentDay = current.getDay();

  let daysFromFirst = currentDay - firstDay;
  if (daysFromFirst < 0) {
    daysFromFirst += DAYS_IN_WEEK;
  }

  return addDays(current, -daysFromFirst);
};

export const addDays = (current: Date, days: number): Date => {
  const finalDate = new Date(current);
  finalDate.setDate(current.getDate() + days);

  return finalDate;
};

export const sameDays = (first: Date, second: Date): boolean => {
  const sameYear = first.getFullYear() === second.getFullYear();
  const sameMonth = first.getMonth() === second.getMonth();
  const sameDay = first.getDate() === second.getDate();

  return sameYear && sameMonth && sameDay;
};
