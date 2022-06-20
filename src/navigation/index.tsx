import 'react-native-gesture-handler';

import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StyledText} from 'src/components';
import {RootNavigatorOptions, SCREEN_NAMES} from './constants';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const EmptyScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
          <Stack.Screen
            name={SCREEN_NAMES.DRAWER.ROOT}
            component={DrawerNavigator}
          />
        ) : (
          <Stack.Screen name={SCREEN_NAMES.AUTH.ROOT} component={EmptyScreen} />
        )}
        <Stack.Screen name={SCREEN_NAMES.ERROR.ROOT} component={EmptyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
