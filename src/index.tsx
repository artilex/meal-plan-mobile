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
// _TODO: Add Fonts
// _TODO: Add theme
// _TODO: Make absolute imports
// _TODO: Implement the Text Component
// _TODO: Implement the Button Component
// _TODO: Add i18n
// _TODO: Add navigation to the app
// _TODO: Implement basic navigation (Menu Navigator with an empty auth stack)
// _TODO: Configure navigation (with nested navigators)
// _TODO: Configure the theme
// _TODO: Change button to solid (main/active) and outline (passive/inactive)
// _TODO: Add the ability to use SVG images
// _TODO: Create the Side Menu
// _TODO: Create Header (with menu button, title and back/close button)
// _TODO: (ONLY FOR THIS PROJECT) Add to Git
// _TODO: Implement the API service
// _TODO: Mock the Food Items (Products) API
// _TODO: Create the Food Item (Product) List
// _TODO: Create the Food Item (Product) Card
// _TODO: Implement creating the new Food Item (Product)
// _TODO: Add Redux Saga to the app
// TODO: Add Redux to store categories and products
// TODO: Mock the Recipe Items API
// TODO: Create the Recipe Item List
// TODO: Create the Recipe Item Card
// TODO: Implement creating the new Recipe Item
// TODO: Add Splash Screen and logo

export default App;
