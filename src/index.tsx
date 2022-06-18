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
// _TODO: Add navigator
// _TODO: Implement Menu Navigator (with an empty auth stack)
// TODO: Implement the API service
// TODO: Mock the Food Items API
// TODO: Create the Food Item List
// TODO: Create the Food Item Card
// TODO: Implement creating the new Food Item

export default App;
