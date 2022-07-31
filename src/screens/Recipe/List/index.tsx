import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RecipeStackParamList} from 'src/navigation/types';
import {StyledText} from 'src/components';
import s from './styles';

type NavigationType = StackNavigationProp<RecipeStackParamList>;

const RecipeList = () => {
  const navigation = useNavigation<NavigationType>();

  // const keyExtractor = (item: Product) => item.id;
  // const renderItem = ({item}: {item: Product}) => (
  //   <ProductCard
  //     productId={item.id}
  //     productName={item.name}
  //     categoryName={item.category?.name}
  //     onDelete={deleteProduct}
  //     onEdit={handleEditProduct}
  //   />
  // );
  // const ListEmpty = () => (
  //   <View style={s.emptyList}>
  //     <StyledText>Empty...</StyledText>
  //   </View>
  // );

  return (
    <View style={s.container}>
      <StyledText>Recipe List</StyledText>
      {/*<FlatList*/}
      {/*  refreshing={refreshing}*/}
      {/*  onRefresh={refreshProducts}*/}
      {/*  data={products}*/}
      {/*  keyExtractor={keyExtractor}*/}
      {/*  renderItem={renderItem}*/}
      {/*  ItemSeparatorComponent={ListSeparator}*/}
      {/*  ListEmptyComponent={ListEmpty}*/}
      {/*  ListFooterComponent={() => (*/}
      {/*    <View style={{height: ICON_SIZE.EXTRA_LARGE + PADDING.EXTRA_LARGE}} />*/}
      {/*  )}*/}
      {/*  showsVerticalScrollIndicator={false}*/}
      {/*/>*/}
    </View>
  );
};

export default RecipeList;
