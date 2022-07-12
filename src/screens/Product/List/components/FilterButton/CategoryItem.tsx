import React from 'react';
import {View} from 'react-native';

import {listItemStyles as s} from './styles';
import {StyledText} from 'src/components';

type Props = {
  name: string;
};

const CategoryItem = React.memo(({name}: Props) => {
  return (
    <View style={s.container}>
      <StyledText>{name}</StyledText>
    </View>
  );
});

export default CategoryItem;
