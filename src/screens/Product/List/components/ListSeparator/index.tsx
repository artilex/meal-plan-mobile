import React from 'react';
import {View} from 'react-native';

import s from './styles';

const ListSeparator = React.memo(() => {
  return (
    <View style={s.container}>
      <View style={s.line} />
    </View>
  );
});

export default ListSeparator;
