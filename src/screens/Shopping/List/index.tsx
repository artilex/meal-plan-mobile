import React from 'react';
import {View} from 'react-native';

import {StyledText} from 'src/components';
import s from './styles';
import ShoppingProductList from 'src/screens/Shopping/List/components/ShoppingProductList';
import {ShoppingProduct} from 'src/services/api/types';

const ShoppingList = () => {
  const Pp: ShoppingProduct = {
    category: {id: '1', name: 'Category Name'},
    id: '1',
    image: null,
    name: 'Product Name',
    quantity: {
      unit: {
        id: '1',
        name: 'Tttt',
        shortName: 'Tt',
      },
      value: 1,
    },
  };
  return (
    <View style={s.container}>
      <ShoppingProductList
        products={[
          {
            category: {id: '1', name: 'Category Name'},
            id: '1',
            image: null,
            name: 'Product Name 1',
            quantity: {
              unit: {
                id: '1',
                name: 'Tttt',
                shortName: 'Tt',
              },
              value: 1,
            },
          },
          {
            category: {id: '1', name: 'Category Name'},
            id: '2',
            image: null,
            name: 'Product Name 2',
            quantity: {
              unit: {
                id: '1',
                name: 'Tttt',
                shortName: 'Tt',
              },
              value: 1,
            },
          },
          {
            category: {id: '1', name: 'Category Name'},
            id: '3',
            image: null,
            name: 'Product Name 3',
            quantity: {
              unit: {
                id: '1',
                name: 'Tttt',
                shortName: 'Tt',
              },
              value: 1,
            },
          },
        ]}
      />
    </View>
  );
};

export default ShoppingList;
