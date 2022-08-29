import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import Modal from 'react-native-modal';

import {MOCK_MEAL_TYPES} from 'src/services/api/mealPlan';
import {COLOR} from 'src/constants/theme';
import {WeekCalendar} from 'src/components';
import MealTypeCard from './components/MealTypeCard';
import s from './styles';
import {mealPlanActions, RootState} from 'src/store';
import {RequestStatus} from 'src/store/types';

const WeekPlan = () => {
  const dispatch = useDispatch();

  // TODO: Get from Redux, fetch from API
  const mealTypes = MOCK_MEAL_TYPES;
  const [selectedDay, setSelectedDay] = useState(new Date());
  const selectedMealPlan = useSelector(
    (state: RootState) => state.mealPlan.selectedMealPlan,
  );
  const requestStatus = useSelector(
    (state: RootState) => state.mealPlan.status,
  );

  const loading = useMemo(
    () => requestStatus === RequestStatus.Loading,
    [requestStatus],
  );

  const handleSelectDay = (date: Date) => {
    setSelectedDay(date);
  };

  useEffect(() => {
    if (selectedDay) {
      dispatch(mealPlanActions.fetchMealPlanByDay(selectedDay));
    }
  }, [dispatch, selectedDay]);

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
            const recipes =
              selectedMealPlan.recipes.filter(
                recipe => recipe.mealType.id === mealType.id,
              ) ?? [];

            const products =
              selectedMealPlan.products.filter(
                product => product.mealType.id === mealType.id,
              ) ?? [];

            return (
              <View key={mealType.id} style={s.cardWrapper}>
                <MealTypeCard
                  mealPlanId={selectedMealPlan.id}
                  mealTypeName={mealType.name}
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
