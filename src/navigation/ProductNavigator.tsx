import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

import {ProductEditScreen, ProductListScreen} from 'src/screens';
import BurgerMenuButton from 'src/navigation/components/BurgerMenuButton';
import CartButton from 'src/navigation/components/CartButton';
import HeaderTitle from 'src/navigation/components/HeaderTitle';
import BackArrowButton from 'src/navigation/components/BackArrowButton';
import {BACKGROUND_COLOR, BORDER} from 'src/constants/theme';
import {ProductNavigatorParamList, ScreenNames} from 'src/navigation/types';
import {useDispatch} from 'react-redux';
import {categoryActions, productActions} from 'src/store';

const Stack = createStackNavigator<ProductNavigatorParamList>();

const ProductNavigator = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryActions.fetch());
    dispatch(productActions.fetch());
  }, [dispatch]);

  // TODO: Move common screen options to utils or constants
  return (
    <SafeAreaView style={s.safeArea} edges={['bottom']}>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.ProductListScreen}
          component={ProductListScreen}
          options={{
            headerBackgroundContainerStyle: {
              borderBottomWidth: BORDER.WIDTH,
              borderBottomColor: BORDER.COLOR,
            },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerLeft: BurgerMenuButton,
            headerTitle: () => (
              <HeaderTitle title={t('screenNames.productList')} />
            ),
            headerRight: CartButton,
          }}
        />
        <Stack.Screen
          name={ScreenNames.ProductEditScreen}
          component={ProductEditScreen}
          options={props => {
            const hasProductId = !!props.route.params?.productId;

            return {
              headerBackgroundContainerStyle: {
                borderBottomWidth: BORDER.WIDTH,
                borderBottomColor: BORDER.COLOR,
              },
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerLeft: BackArrowButton,
              headerTitle: () => (
                <HeaderTitle
                  title={
                    hasProductId
                      ? t('screenNames.editProduct')
                      : t('screenNames.createProduct')
                  }
                />
              ),
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
