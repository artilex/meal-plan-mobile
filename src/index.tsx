import React from 'react';
import {View} from 'react-native';

import {StyledText, StyledButton} from 'src/components';
import {COLOR} from 'src/constants/theme';
import 'src/services/i18n';

const aaa = 'AaBbCcDdEeFfGgHhIiPpRrSsTtQqZzYy. Hello, WORLD!';

const App = () => (
  <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
    <StyledText>{aaa}</StyledText>
    <StyledText bold>{aaa}</StyledText>
    <View style={{width: '100%', flexDirection: 'row'}}>
      <View style={{flex: 1, marginHorizontal: 10}}>
        <StyledButton
          text={'Button green'}
          onPress={() => console.log('CLICK1')}
          color={COLOR.PRIMARY}
        />
      </View>
      <View style={{flex: 1, marginHorizontal: 10}}>
        <StyledButton
          text={'Button green'}
          onPress={() => console.log('CLICK1')}
          color={COLOR.PRIMARY}
        />
      </View>
    </View>

    <StyledButton
      text={'Button green'}
      onPress={() => console.log('CLICK1')}
      color={COLOR.PRIMARY}
    />
    <StyledButton
      text={'Button neutral'}
      onPress={() => console.log('CLICK2')}
    />
    <StyledButton
      text={'Button Disabled'}
      onPress={() => console.log('CLICK3')}
      disabled
    />
  </View>
);

// TODO: DO NOT REMOVE THOSE TODOs, KEEP IT FOR FUTURE PROJECTS
// _TODO: Add Fonts
// _TODO: Add theme
// _TODO: Make absolute imports
// _TODO: Implement the Text Component
// _TODO: Implement the Button Component
// _TODO: Add i18n
// TODO: Add navigator
// TODO: Implement Menu Navigator (with an empty auth stack)
// TODO: Implement the API service
// TODO: Mock the Food Items API
// TODO: Create the Food Item List
// TODO: Create the Food Item Card
// TODO: Implement creating the new Food Item

export default App;
