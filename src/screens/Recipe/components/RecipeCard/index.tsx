import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import CheckmarkIcon from 'src/assets/images/checkmark.svg';
import {BRAND_COLOR, ICON_SIZE} from 'src/constants/theme';
import {StyledText} from 'src/components';
import s from './styles';

const defaultImagePath = '../../../../assets/images/covered-dish.png';

type Props = {
  id: string;
  name: string;
  imageUrl?: string;
  onPress: (id: string) => void;
  isSelected?: boolean;
};

const RecipeCard = React.memo(
  ({id, name, imageUrl, onPress, isSelected}: Props) => {
    const handlePress = () => {
      onPress(id);
    };

    return (
      <TouchableOpacity
        style={s.container}
        activeOpacity={0.8}
        onPress={handlePress}>
        <View style={[s.imageWrapper, isSelected && s.selectedImageWrapper]}>
          {isSelected && (
            <View style={s.imageFilter}>
              <CheckmarkIcon
                fill={BRAND_COLOR.PRIMARY}
                width={ICON_SIZE.EXTRA_LARGE}
                height={ICON_SIZE.EXTRA_LARGE}
              />
            </View>
          )}

          <Image
            source={imageUrl ? {uri: imageUrl} : require(defaultImagePath)}
            defaultSource={require(defaultImagePath)}
            style={s.image}
          />
        </View>

        <View style={s.textWrapper}>
          <StyledText
            numberOfLines={2}
            ellipsizeMode={'tail'}
            style={s.text}
            bold>
            {name}
          </StyledText>
        </View>
      </TouchableOpacity>
    );
  },
);

export default RecipeCard;
