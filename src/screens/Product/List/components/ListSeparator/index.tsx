import React from 'react';
import {View} from 'react-native';

import s from './styles';

const ListSeparator = React.memo(() => {
  return <View style={s.line} />;
});

export default ListSeparator;
