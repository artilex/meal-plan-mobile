import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Modal from 'react-native-modal';

import HeaderRightButtons from 'src/navigation/components/HeaderRightButtons';
import {
  CommonParamList,
  CommonScreens,
  RecipeScreens,
  RecipeStackParamList,
} from 'src/navigation/types';
import {Recipe} from 'src/services/api/types';
import {COLOR} from 'src/constants/theme';
import {recipeActions, RootState} from 'src/store';
import {StyledText} from 'src/components';
import RecipeCard from './components/RecipeCard';
import s from './styles';
import {RequestStatus} from 'src/store/types';

type NavigationType = StackNavigationProp<
  RecipeStackParamList & CommonParamList
>;

const RecipeList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationType>();

  const recipes = useSelector((state: RootState) => state.recipe.list);
  const status = useSelector((state: RootState) => state.recipe.status);
  const loading = useMemo(() => status === RequestStatus.Loading, [status]);

  useEffect(() => {
    dispatch(recipeActions.fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    const navigateToCreateScreen = () => {
      navigation.navigate(CommonScreens.RecipeEdit, {
        fromDetail: false,
      });
    };
    const navigateToSearchScreen = () => {
      navigation.navigate(RecipeScreens.Search);
    };

    navigation.setOptions({
      headerRight: () => (
        <HeaderRightButtons
          navigateToCreate={navigateToCreateScreen}
          navigateToSearch={navigateToSearchScreen}
        />
      ),
    });
  }, [navigation]);

  const navigateToDetailScreen = (recipeId: string) => {
    navigation.navigate(CommonScreens.RecipeDetail, {recipeId});
  };

  const keyExtractor = (item: Recipe) => item.id;
  const renderItem = ({item}: {item: Recipe}) => (
    <RecipeCard
      id={item.id}
      name={item.name}
      imageUrl={item.cover ?? ''}
      onOpen={navigateToDetailScreen}
    />
  );
  const ListEmpty = () => (
    <View style={s.emptyList}>
      <StyledText>Empty...</StyledText>
    </View>
  );

  return (
    <View style={s.container}>
      <Modal isVisible={loading}>
        <ActivityIndicator size={'large'} color={COLOR.WHITE} />
      </Modal>

      <FlatList
        // refreshing={refreshing}
        // onRefresh={refreshProducts}
        data={recipes}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        numColumns={2}
        ListEmptyComponent={ListEmpty}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecipeList;
