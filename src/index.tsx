import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import 'src/services/i18n';
import AppNavigator from 'src/navigation';
import {store} from 'src/store';

const App = () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </SafeAreaProvider>
);

// TODO: DO NOT REMOVE THOSE TODOs, KEEP IT FOR FUTURE PROJECTS
// _TODO_: Add Fonts
// _TODO_: Add theme
// _TODO_: Make absolute imports
// _TODO_: Implement the Text Component
// _TODO_: Implement the Button Component
// _TODO_: Add i18n
// _TODO_: Add navigation to the app
// _TODO_: Implement basic navigation (Menu Navigator with an empty auth stack)
// _TODO_: Configure navigation (with nested navigators)
// _TODO_: Configure the theme
// _TODO_: Change button to solid (main/active) and outline (passive/inactive)
// _TODO_: Add the ability to use SVG images
// _TODO_: Create the Side Menu
// _TODO_: Create Header (with menu button, title and back/close button)
// _TODO_: (ONLY FOR THIS PROJECT) Add to Git
// _TODO_: Implement the API service
// _TODO_: Mock the Food Items (Products) API
// _TODO_: Create the Food Item (Product) List
// _TODO_: Create the Food Item (Product) Card
// _TODO_: Implement creating the new Food Item (Product)
// _TODO_: Add Redux Saga to the app
// _TODO_: Add Redux to store categories and products
// _TODO_: Mock the Recipe Items API
// _TODO_: Create the Recipe Item List
// _TODO_: Create the Recipe Item Card
// _TODO_: Implement creating the new Recipe Item
// TODO: Implement Meal Plan Stack
// TODO: Add Splash Screen and logo

export default App;
