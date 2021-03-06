import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

import BackArrowButton from 'src/navigation/components/BackArrowButton';
import HeaderTitle from 'src/navigation/components/HeaderTitle';
import {BACKGROUND_COLOR} from 'src/constants/theme';
import {ProductEditScreen, ProductListScreen} from 'src/screens';
import {categoryActions, productActions} from 'src/store';
import {ProductStackParamList, ProductScreens} from '../types';
import {DefaultInnerNavigatorOptions} from '../constants';
import {getRootInnerNavigatorOptions} from '../utils';

const Stack = createStackNavigator<ProductStackParamList>();

const ProductNavigator = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryActions.fetch());
    dispatch(productActions.fetch());
  }, [dispatch]);

  return (
    <SafeAreaView style={s.safeArea} edges={['bottom']}>
      <Stack.Navigator screenOptions={DefaultInnerNavigatorOptions}>
        <Stack.Screen
          name={ProductScreens.List}
          component={ProductListScreen}
          options={getRootInnerNavigatorOptions(t('screenNames.productList'))}
        />
        <Stack.Screen
          name={ProductScreens.Edit}
          component={ProductEditScreen}
          options={props => {
            const title = props.route.params?.productId
              ? t('screenNames.editProduct')
              : t('screenNames.createProduct');

            return {
              headerLeft: BackArrowButton,
              headerTitle: () => <HeaderTitle title={title} />,
            };
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.PRIMARY,
  },
});

export default ProductNavigator;
