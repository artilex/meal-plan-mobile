import React, {useCallback, useEffect, useMemo} from 'react';
import {Dimensions, Image, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import BottomSheet from '@gorhom/bottom-sheet';

import {RecipeScreens, RecipeStackParamList} from 'src/navigation/types';
import {recipeActions, RootState} from 'src/store';
import {StyledText} from 'src/components';
import s from './styles';

const defaultImagePath = '../../../assets/images/covered-dish.png';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

type RouteProps = RouteProp<RecipeStackParamList, RecipeScreens.Detail>;

const RecipeDetail = () => {
  const dispatch = useDispatch();
  const route = useRoute<RouteProps>();

  const recipeData = useSelector(
    (state: RootState) => state.recipe.editableRecipe,
  );

  const snapPoints = useMemo(() => [screenHeight - screenWidth, '100%'], []);

  useEffect(() => {
    dispatch(recipeActions.getRecipeById(route.params?.recipeId ?? null));
  }, [dispatch, route.params?.recipeId]);

  return (
    <View style={s.container}>
      <Image
        source={
          recipeData.cover ? {uri: recipeData.cover} : require(defaultImagePath)
        }
        defaultSource={require(defaultImagePath)}
        style={s.image}
      />

      <BottomSheet index={1} detached snapPoints={snapPoints}>
        <View>
          <StyledText>Awesome</StyledText>
        </View>
      </BottomSheet>
    </View>
  );
};

export default RecipeDetail;
