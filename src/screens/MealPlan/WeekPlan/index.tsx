import React, {useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import Modal from 'react-native-modal';

import {COLOR} from 'src/constants/theme';
import {WeekCalendar} from 'src/components';
import s from './styles';

// type NavigationType = StackNavigationProp<RecipeStackParamList>;

const WeekPlan = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());

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

      <FlatList
        // refreshing={refreshing}
        // onRefresh={refreshProducts}
        data={[]}
        keyExtractor={undefined}
        renderItem={undefined}
        numColumns={2}
        ListEmptyComponent={undefined}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WeekPlan;
