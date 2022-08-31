import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';

import {ShoppingListScreen} from 'src/screens';
import BurgerMenuButton from '../components/BurgerMenuButton';
import {ShoppingParamList, ShoppingScreens} from '../types';
import {DefaultInnerNavigatorOptions} from '../constants';
import s from './styles';
import HeaderTitle from 'src/navigation/components/HeaderTitle';
import {StyledText} from 'src/components';
import {BRAND_COLOR, PADDING} from 'src/constants/theme';

const Stack = createStackNavigator<ShoppingParamList>();

const ShoppingNavigator = () => {
  const {t} = useTranslation();

  // TODO: Change and move headerRight to the separate component, dropdown modal list
  return (
    <SafeAreaView style={s.safeArea} edges={['bottom']}>
      <Stack.Navigator screenOptions={DefaultInnerNavigatorOptions}>
        <Stack.Screen
          name={ShoppingScreens.List}
          component={ShoppingListScreen}
          options={{
            headerLeft: BurgerMenuButton,
            headerTitle: () => (
              <HeaderTitle title={t('screenNames.shoppingList')} />
            ),
            headerRight: () => (
              <View style={{paddingRight: PADDING.REGULAR}}>
                <StyledText style={{color: BRAND_COLOR.SECONDARY}}>
                  {t('calendar.day.today')}
                </StyledText>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default ShoppingNavigator;
