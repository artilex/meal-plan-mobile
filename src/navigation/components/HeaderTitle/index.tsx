import React from 'react';
import {View} from 'react-native';

import s from './styles';
import {StyledText} from 'src/components';

type Props = {
  title: string;
};

const HeaderTitle = React.memo(({title}: Props) => (
  <View style={s.container}>
    <StyledText style={s.text} bold>
      {title}
    </StyledText>
  </View>
));

export default HeaderTitle;
