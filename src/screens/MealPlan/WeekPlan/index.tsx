import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import Modal from 'react-native-modal';

import {fetchMealPlanByDay, MOCK_MEAL_TYPES} from 'src/services/api/mealPlan';
import {MealPlan} from 'src/services/api/types';
import {COLOR} from 'src/constants/theme';
import {WeekCalendar} from 'src/components';
import MealTypeCard from './components/MealTypeCard';
import s from './styles';

const WeekPlan = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedMealPlan, setSelectedMealPlan] = useState<MealPlan>();
  const [loading, setLoading] = useState(false);
  // TODO: Get from Redux, fetch from API
  const mealTypes = MOCK_MEAL_TYPES;

  const handleSelectDay = (date: Date) => {
    setSelectedDay(date);
  };

  useEffect(() => {
    if (selectedDay) {
      setLoading(true);

      fetchMealPlanByDay(selectedDay)
        .then(setSelectedMealPlan)
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectedDay]);

  return (
    <View style={s.container}>
      <Modal isVisible={loading}>
        <ActivityIndicator size={'large'} color={COLOR.WHITE} />
      </Modal>

      <View style={s.calendarWrapper}>
        <WeekCalendar selectedDay={selectedDay} onSelectDay={handleSelectDay} />
      </View>

      <ScrollView contentContainerStyle={s.scrollView}>
        {mealTypes &&
          mealTypes.length > 0 &&
          mealTypes.map(mealType => {
            if (!selectedMealPlan) {
              return null;
            }

            const recipes =
              selectedMealPlan.recipes?.filter(
                recipe => recipe.mealType.id === mealType.id,
              ) ?? [];

            const products =
              selectedMealPlan.products?.filter(
                product => product.mealType.id === mealType.id,
              ) ?? [];

            return (
              <View key={mealType.id} style={s.cardWrapper}>
                <MealTypeCard
                  {...mealType}
                  recipes={recipes}
                  products={products}
                />
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default WeekPlan;
