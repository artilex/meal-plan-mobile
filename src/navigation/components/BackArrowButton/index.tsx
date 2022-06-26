import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BackArrowIcon from 'src/assets/images/back-arrow.svg';
import s from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {COLOR, ICON_SIZE} from 'src/constants/theme';

const {SMALL} = ICON_SIZE;

const BackArrowButton = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={s.container}
      onPress={handleGoBack}>
      <BackArrowIcon width={SMALL} height={SMALL} fill={COLOR.GRAY2} />
    </TouchableOpacity>
  );
};

export default BackArrowButton;
