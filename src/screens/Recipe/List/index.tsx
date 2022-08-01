import React from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RecipeStackParamList} from 'src/navigation/types';
import {StyledText} from 'src/components';
import s from './styles';
import RecipeCard from 'src/screens/Recipe/List/components/RecipeCard';
import {PADDING} from 'src/constants/theme';

type NavigationType = StackNavigationProp<RecipeStackParamList>;

const recipes = [
  {
    id: 'rp1',
    name: 'Классические оладушки',
    image:
      'https://www.clementoni.com/media/prod/no/35058/paradise-beach-500-pcs-high-quality-collection_LkQCtwj.jpg',
  },
  {
    id: 'rp2',
    name: 'Паста с курицей в сливочном соусе',
    image:
      'https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fit,f_auto,fl_progressive,q_auto,w_1333/v1428564372/article/R10391_image1',
  },
  {
    id: 'rp3',
    name: 'Салат "Цезарь"',
    image:
      'https://assets.entrepreneur.com/content/3x2/2000/20150225224437-computer.jpeg',
  },
  {
    id: 'rp4',
    name: 'Треугольники из лаваша с бананом',
  },
  {
    id: 'rp5',
    name: 'Омлет "Рулет" с сыром и овощной салат',
  },
  {
    id: 'rp6',
    name: 'Овсяноблин с шоколадом',
  },
  {
    id: 'rp7',
    name: 'ПП-шаверма',
  },
  {
    id: 'rp8',
    name: 'Рубленные котлеты с сыром',
  },
  {
    id: 'rp9',
    name: 'Творожная запеканка с шоколадом',
  },
  {
    id: 'rp10',
    name: 'Рис с овощами',
  },
  {
    id: 'rp11',
    name: 'Запеканка с курицей и брокколи',
  },
  {
    id: 'rp12',
    name: 'Оладьи с шоколадом',
  },
  {
    id: 'rp13',
    name: 'ПП-пицца на сковороде',
  },
  {
    id: 'rp14',
    name: 'ПП-хачапури',
  },
  {
    id: 'rp15',
    name: 'Рыбка с овощами',
  },
  {
    id: 'rp16',
    name: 'Творожная галета',
  },
  {
    id: 'rp17',
    name: 'Суп с куриными фрикадельками',
  },
  {
    id: 'rp18',
    name: 'Конвертики с курицей и грибами',
  },
  {
    id: 'rp19',
    name: 'Куриные котлеты с сыром',
  },
  {
    id: 'rp20',
    name: 'Кекс в микроволновке',
  },
  {
    id: 'rp21',
    name: 'Гречка с грибами и свининой',
  },
  {
    id: 'rp22',
    name: 'Омлет с овощами',
  },
  {
    id: 'rp23',
    name: 'ПП Люля-Кебаб из курицы',
  },
  {
    id: 'rp24',
    name: 'Творожная запеканка с нектарином',
  },
  {
    id: 'rp25',
    name: 'Вок с курицей',
  },
  {
    id: 'rp26',
    name: 'Рисовый блинчик',
  },
  {
    id: 'rp27',
    name: 'Салат с тунцом',
  },
  {
    id: 'rp28',
    name: 'Ленивые вареники с шоколадом',
  },
  {
    id: 'rp29',
    name: 'Мясные рулетики',
  },
];

const RecipeList = () => {
  const navigation = useNavigation<NavigationType>();

  const keyExtractor = (item: any) => item.id;
  const renderItem = ({item}: {item: any}) => (
    <RecipeCard
      id={item.id}
      name={item.name}
      imageUrl={item.image}
      onOpen={() => console.log('Open Recipe')}
    />
  );
  const ListSeparator = () => <View style={s.listSeparator} />;
  // const ListEmpty = () => (
  //   <View style={s.emptyList}>
  //     <StyledText>Empty...</StyledText>
  //   </View>
  // );

  return (
    <View style={s.container}>
      <StyledText>Recipe List</StyledText>
      <FlatList
        // refreshing={refreshing}
        // onRefresh={refreshProducts}
        data={recipes}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={s.listColumnWrapper}
        ItemSeparatorComponent={ListSeparator}
        // ListEmptyComponent={ListEmpty}
        // ListFooterComponent={() => (
        //   <View style={{height: ICON_SIZE.EXTRA_LARGE + PADDING.EXTRA_LARGE}} />
        // )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecipeList;
