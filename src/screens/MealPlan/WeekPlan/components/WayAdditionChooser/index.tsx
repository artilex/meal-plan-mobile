import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

import {BottomSheetModal, StyledButton} from 'src/components';
import {ButtonColor} from 'src/constants/theme';
import s from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {CommonParamList, CommonScreens} from 'src/navigation/types';

type Props = {
  typeId: number;
  day: string;
  isVisible: boolean;
  onClose: () => void;
};

type NavigationProp = StackNavigationProp<CommonParamList>;

const WayAdditionChooser = React.memo(
  ({typeId, day, isVisible, onClose}: Props) => {
    const {t} = useTranslation();
    const navigation = useNavigation<NavigationProp>();

    const navigateToRecipeList = () => {
      onClose();
      navigation.navigate(CommonScreens.TakeRecipe, {
        mealTypeId: typeId,
        day,
      });
    };

    const navigateToProductList = () => {
      //
    };

    return (
      <BottomSheetModal isVisible={isVisible} onClose={onClose}>
        <View style={s.buttonWrapper}>
          <StyledButton
            text={t('mealPlan.recipe')}
            color={ButtonColor.Green}
            onPress={navigateToRecipeList}
            solid
          />
        </View>

        <View style={s.buttonWrapper}>
          <StyledButton
            text={t('mealPlan.product')}
            color={ButtonColor.Green}
            onPress={navigateToProductList}
            solid
          />
        </View>
      </BottomSheetModal>
    );
  },
);

export default WayAdditionChooser;
