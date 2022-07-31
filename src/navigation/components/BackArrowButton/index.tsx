import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import BackArrowIcon from 'src/assets/images/back-arrow.svg';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import {ProductStackParamList, RecipeStackParamList} from '../../types';
import s from './styles';

type NavigationType = StackNavigationProp<
  ProductStackParamList | RecipeStackParamList
>;

const BackArrowButton = () => {
  const navigation = useNavigation<NavigationType>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={s.container}
      onPress={handleGoBack}>
      <BackArrowIcon
        width={ICON_SIZE.EXTRA_SMALL}
        height={ICON_SIZE.EXTRA_SMALL}
        fill={COLOR.GRAY2}
      />
    </TouchableOpacity>
  );
};

export default BackArrowButton;
