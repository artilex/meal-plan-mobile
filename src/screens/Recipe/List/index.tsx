import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import Modal from 'react-native-modal';
import HeaderRightButtons from 'src/navigation/components/HeaderRightButtons';
import {RecipeScreens, RecipeStackParamList} from 'src/navigation/types';
import {Recipe} from 'src/services/api/types';
import {fetchRecipes} from 'src/services/api/recipe';
import {COLOR} from 'src/constants/theme';
import {recipeActions} from 'src/store';
import {StyledText} from 'src/components';
import RecipeCard from './components/RecipeCard';
import s from './styles';

type NavigationType = StackNavigationProp<RecipeStackParamList>;

const RecipeList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationType>();

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchRecipes()
      .then(setRecipes)
      .catch(error => {
        console.log('fetchRecipes error');
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const navigateToCreateScreen = () => {
      navigation.navigate(RecipeScreens.Edit);
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
    // TODO: Replace it back, start fetching and setting editableRecipe in Redux here
    //  but now do it on edit screen and pass only recipeId
    // navigation.navigate(RecipeScreens.Detail, {recipeId: 'rp1'});
    dispatch(recipeActions.getRecipeById(recipeId ?? null));
    navigation.navigate(RecipeScreens.Edit);
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

  // TODO: Move Inline components above to global or local components
  // TODO: Move PlusButton with wrapper to global components and replace it in ProductList too
  // TODO: Implement the Header:
  //  1 Search that can open
  //  2 Plus button to add new recipe
  //  3 Filter button from Product List
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
