import React, {useState} from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import Modal from 'react-native-modal';

import {MOCK_MEAL_PLAN, MOCK_MEAL_TYPES} from 'src/services/api/mealPlan';
import {COLOR} from 'src/constants/theme';
import {WeekCalendar} from 'src/components';
import MealTypeCard from './components/MealTypeCard';
import s from './styles';

// type NavigationType = StackNavigationProp<RecipeStackParamList>;

const WeekPlan = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  // TODO: Get from Redux, fetch from API
  const mealTypes = MOCK_MEAL_TYPES;
  const selectedMealPlan = MOCK_MEAL_PLAN;

  const handleSelectDay = (date: Date) => {
    setSelectedDay(date);
  };
  // const dispatch = useDispatch();
  // const navigation = useNavigation<NavigationType>();

  // const recipes = useSelector((state: RootState) => state.recipe.list);
  // const status = useSelector((state: RootState) => state.recipe.status);
  // const loading = useMemo(() => status === RequestStatus.Loading, [status]);

  // useEffect(() => {
  //   dispatch(recipeActions.fetchRecipes());
  // }, [dispatch]);

  return (
    <View style={s.container}>
      <Modal isVisible={false}>
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
