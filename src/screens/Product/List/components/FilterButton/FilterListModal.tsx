import React, {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';
import Modal from 'react-native-modal';
import {useTranslation} from 'react-i18next';

import {StyledButton, StyledText} from 'src/components';
import {ButtonColor} from 'src/constants/theme';
import {Category} from 'src/services/api/types';
import ListSeparator from '../ListSeparator';
import FilterItem from './FilterItem';
import {listModalStyles as s} from './styles';

type Props = {
  selectedCategory: string;
  categories: Category[];
  onClose: () => void;
  onApply: (categoryId: string) => void;
};

const FilterListModal = ({
  selectedCategory,
  categories,
  onClose,
  onApply,
}: Props) => {
  const {t} = useTranslation();

  const [selectedCategoryId, setSelectedCategoryId] =
    useState(selectedCategory);

  const handleSelectCategory = useCallback(
    (categoryId: string) => {
      if (selectedCategoryId === categoryId) {
        setSelectedCategoryId('');
      } else {
        setSelectedCategoryId(categoryId);
      }
    },
    [selectedCategoryId],
  );

  const handleApplyCategory = useCallback(() => {
    onApply(selectedCategoryId);
    onClose();
  }, [selectedCategoryId, onClose, onApply]);

  const keyExtractor = (item: Category) => item.id;

  const renderItem = ({item}: {item: Category}) => (
    <FilterItem
      {...item}
      isActive={item.id === selectedCategoryId}
      onSelect={handleSelectCategory}
    />
  );

  const ListEmpty = () => (
    <View style={s.emptyList}>
      <StyledText>Empty...</StyledText>
    </View>
  );

  return (
    <Modal isVisible={true} onBackdropPress={onClose} style={s.rootContainer}>
      <View style={s.container}>
        <FlatList
          data={categories}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={ListSeparator}
          ListEmptyComponent={ListEmpty}
          showsVerticalScrollIndicator={false}
        />

        <View style={s.footer}>
          <View style={s.buttonWrapper}>
            <StyledButton
              text={t('common.cancel')}
              onPress={onClose}
              color={ButtonColor.Green}
              small
            />
          </View>

          <View style={s.buttonWrapper}>
            <StyledButton
              text={t('common.apply')}
              onPress={handleApplyCategory}
              color={ButtonColor.Green}
              solid
              small
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterListModal;
