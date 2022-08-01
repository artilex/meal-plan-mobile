import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import s from './styles';
import {StyledText} from 'src/components';

const defaultImagePath = '../../../../../assets/images/covered-dish.png';

type Props = {
  id: string;
  name: string;
  imageUrl?: string;
  onOpen: (id: string) => void;
};

const RecipeCard = React.memo(({id, name, imageUrl, onOpen}: Props) => {
  const handlePress = () => {
    onOpen(id);
  };

  return (
    <TouchableOpacity
      style={s.container}
      activeOpacity={0.8}
      onPress={handlePress}>
      <Image
        source={imageUrl ? {uri: imageUrl} : require(defaultImagePath)}
        defaultSource={require(defaultImagePath)}
        style={s.image}
      />
      <View style={s.textWrapper}>
        <StyledText style={s.text} bold>
          {name}
        </StyledText>
      </View>
    </TouchableOpacity>
  );
});

export default RecipeCard;
