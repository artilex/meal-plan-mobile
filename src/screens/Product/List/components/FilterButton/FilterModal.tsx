import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

import {StyledText} from 'src/components';
import {COLOR} from 'src/constants/theme';
import {Category} from 'src/services/api/product';
import CloseIcon from 'src/assets/images/close-x.svg';
import ListSeparator from '../ListSeparator';
import CategoryItem from './CategoryItem';
import styles, {modalStyles as s} from './styles';

type Props = {
  categories: Category[];
  isVisible: boolean;
  onClose: () => void;
};

const FilterModal = React.memo(({categories, isVisible, onClose}: Props) => {
  const keyExtractor = (item: Category) => item.id;
  const renderItem = ({item}: {item: Category}) => (
    <CategoryItem name={item.name} />
  );
  const ListEmpty = () => (
    <View style={styles.emptyList}>
      <StyledText>Empty...</StyledText>
    </View>
  );

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={s.rootContainer}>
      <View style={s.container}>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={onClose}
          style={s.closeWrapper}>
          <CloseIcon width={32} height={32} fill={COLOR.GREEN1} />
        </TouchableOpacity>

        <FlatList
          data={categories}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={ListSeparator}
          ListEmptyComponent={ListEmpty}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Modal>
  );
});

export default FilterModal;
