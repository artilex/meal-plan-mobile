import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import DeleteIcon from 'src/assets/images/delete-icon.svg';
import NextArrowIcon from 'src/assets/images/next-arrow.svg';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import {StyledText} from 'src/components';
import s from './styles';

const defaultRecipeImagePath = '../../../../../assets/images/covered-dish.png';
const defaultProductImagePath =
  '../../../../../assets/images/default-product.png';

type Props = {
  itemId: string;
  itemName: string;
  itemDescription: string;
  itemImage: string | null;
  onPress: () => void;
  onDelete: () => void;
  isRecipe?: boolean;
};

const MealCard = React.memo(
  ({
    itemName,
    itemDescription,
    itemImage,
    onPress,
    onDelete,
    isRecipe,
  }: Props) => {
    const hasImage = Boolean(itemImage);
    const defaultSource = isRecipe
      ? require(defaultRecipeImagePath)
      : require(defaultProductImagePath);

    return (
      <Swipeable
        onSwipeableOpen={onDelete}
        renderRightActions={() => (
          <View style={s.deleteContainer}>
            <View>
              <DeleteIcon
                width={ICON_SIZE.REGULAR}
                height={ICON_SIZE.REGULAR}
                fill={COLOR.WHITE}
              />
            </View>
          </View>
        )}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={s.container}>
          <View style={s.leftBlock}>
            <Image
              source={hasImage ? {uri: itemImage} : defaultSource}
              defaultSource={defaultSource}
              style={[s.image, !hasImage && s.defaultImage]}
            />
          </View>

          <View style={s.content}>
            <StyledText style={s.titleText}>{itemName}</StyledText>
            <StyledText style={s.descriptionText}>{itemDescription}</StyledText>
          </View>

          <View style={s.rightBlock}>
            <NextArrowIcon
              width={ICON_SIZE.SMALL}
              height={ICON_SIZE.SMALL}
              fill={COLOR.GRAY3}
            />
          </View>
        </TouchableOpacity>
      </Swipeable>
    );
  },
);

export default MealCard;
