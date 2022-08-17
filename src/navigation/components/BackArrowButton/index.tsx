import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BackArrowIcon from 'src/assets/images/back-arrow.svg';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import {DynamicStackNavigationProp} from '../../types';
import s from './styles';

type Props = {
  iconColor?: string;
  onBack?: () => void;
};

const BackArrowButton = ({iconColor = COLOR.GRAY2, onBack}: Props) => {
  const navigation = useNavigation<DynamicStackNavigationProp>();

  const handleGoBack = () => {
    if (onBack) {
      onBack();
    }

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
        fill={iconColor}
      />
    </TouchableOpacity>
  );
};

export default BackArrowButton;
