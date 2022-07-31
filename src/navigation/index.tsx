import 'react-native-gesture-handler';

import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StyledText} from 'src/components';
import {BACKGROUND_COLOR} from 'src/constants/theme';
import DrawerNavigator from './navigators/DrawerNavigator';
import {RootNavigatorOptions} from './constants';
import {RootScreens, RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

const EmptyScreen = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: BACKGROUND_COLOR.PRIMARY,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <StyledText>In progress...</StyledText>
  </View>
);

const AppNavigator = () => {
  // TODO: Implement authentication
  const isSignedIn = true;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={RootNavigatorOptions}>
        {isSignedIn ? (
          <Stack.Screen name={RootScreens.Drawer} component={DrawerNavigator} />
        ) : (
          <Stack.Screen name={RootScreens.Auth} component={EmptyScreen} />
        )}
        <Stack.Screen name={RootScreens.Error} component={EmptyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
