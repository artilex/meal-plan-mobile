import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {COLOR, ICON_SIZE} from 'src/constants/theme';
import PlusIcon from 'src/assets/images/bold-plus.svg';
import SearchIcon from 'src/assets/images/bold-search.svg';
import s from './styles';

type Props = {
  navigateToCreate: () => void;
  navigateToSearch: () => void;
};

const HeaderRightButtons = React.memo(
  ({navigateToCreate, navigateToSearch}: Props) => (
    <View style={s.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={navigateToCreate}
        style={s.iconWrapper}>
        <PlusIcon
          width={ICON_SIZE.EXTRA_SMALL}
          height={ICON_SIZE.EXTRA_SMALL}
          fill={COLOR.GREEN1}
        />
      </TouchableOpacity>

      <View style={s.spacer} />

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={navigateToSearch}
        style={s.iconWrapper}>
        <SearchIcon
          width={ICON_SIZE.EXTRA_SMALL}
          height={ICON_SIZE.EXTRA_SMALL}
          fill={COLOR.GREEN1}
        />
      </TouchableOpacity>
    </View>
  ),
);

export default HeaderRightButtons;
