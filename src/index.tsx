import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'src/services/i18n';

import AppNavigator from 'src/navigation';

const App = () => (
  <SafeAreaProvider>
    <AppNavigator />
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
// TODO: Change button to solid (main/active) and outline (passive/inactive)
// TODO: Create the Side Menu
// TODO: Create Header (with menu button, title and back/close button)
// TODO: (ONLY FOR THIS PROJECT) Add to Git
// TODO: Implement the API service
// TODO: Mock the Food Items API
// TODO: Create the Food Item List
// TODO: Create the Food Item Card
// TODO: Implement creating the new Food Item

export default App;
