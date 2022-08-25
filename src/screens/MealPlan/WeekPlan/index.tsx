import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import Modal from 'react-native-modal';

import {COLOR} from 'src/constants/theme';
import {StyledText} from 'src/components';
import s from './styles';
import WeekCalendar from 'src/components/WeekCalendar';

// type NavigationType = StackNavigationProp<RecipeStackParamList>;

const WeekPlan = () => {
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

      <StyledText>Hey</StyledText>

      <WeekCalendar
        weekDays={[
          {
            date: new Date(),
            isToday: false,
            isSelected: false,
            isCurrent: false,
          },
          {
            date: new Date(),
            isToday: false,
            isSelected: false,
            isCurrent: false,
          },
          {
            date: new Date(),
            isToday: false,
            isSelected: false,
            isCurrent: false,
          },
          {
            date: new Date(),
            isToday: false,
            isSelected: false,
            isCurrent: false,
          },
          {
            date: new Date(),
            isToday: false,
            isSelected: false,
            isCurrent: false,
          },
          {
            date: new Date(),
            isToday: false,
            isSelected: false,
            isCurrent: false,
          },
          {
            date: new Date(),
            isToday: false,
            isSelected: false,
            isCurrent: false,
          },
        ]}
        onSelectDay={() => null}
      />

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
