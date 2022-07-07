import React from 'react';
import {View} from 'react-native';

import s from './styles';

const ListFooter = React.memo(() => {
  return (
    <View style={s.container}>
      <View style={s.border} />
    </View>
  );
});

export default ListFooter;
