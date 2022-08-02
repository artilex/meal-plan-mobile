import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import HeaderRightButtons from 'src/navigation/components/HeaderRightButtons';
import {RecipeScreens, RecipeStackParamList} from 'src/navigation/types';
import {BORDER, PADDING} from 'src/constants/theme';
import {StyledText} from 'src/components';
import RecipeCard from './components/RecipeCard';
import s from './styles';

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

  useEffect(() => {
    const navigateToCreateScreen = () => {
      navigation.navigate(RecipeScreens.Edit, {recipeId: null});
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

  const navigateToDetailScreen = () => {
    navigation.navigate(RecipeScreens.Detail, {recipeId: 'rp1'});
  };

  const keyExtractor = (item: any) => item.id;
  const renderItem = ({item}: {item: any}) => (
    <RecipeCard
      id={item.id}
      name={item.name}
      imageUrl={item.image}
      onOpen={navigateToDetailScreen}
    />
  );
  const ListEmpty = () => (
    <View
      style={{
        borderLeftWidth: BORDER.WIDTH,
        borderRightWidth: BORDER.WIDTH,
        borderColor: BORDER.COLOR,
        paddingVertical: PADDING.EXTRA_LARGE * 1.5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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
