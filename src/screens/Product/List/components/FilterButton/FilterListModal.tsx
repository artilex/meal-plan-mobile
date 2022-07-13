import React, {useCallback, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

import {StyledButton, StyledText} from 'src/components';
import {ButtonColor, COLOR, ICON_SIZE} from 'src/constants/theme';
import {Category} from 'src/services/api/product';
import CloseIcon from 'src/assets/images/close-x.svg';
import ListSeparator from '../ListSeparator';
import FilterItem from './FilterItem';
import {listModalStyles as s} from './styles';
import {useTranslation} from 'react-i18next';

type Props = {
  categories: Category[];
  isVisible: boolean;
  onClose: () => void;
  onApply: () => void;
};

const FilterListModal = React.memo(
  ({categories, isVisible, onClose, onApply}: Props) => {
    const {t} = useTranslation();

    const [selectedCategoryId, setSelectedCategoryId] = useState('');

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

    const handleCloseModal = useCallback(() => {
      setSelectedCategoryId('');
      onClose();
    }, [onClose]);

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
      <Modal
        isVisible={isVisible}
        onBackdropPress={handleCloseModal}
        style={s.rootContainer}>
        <View style={s.container}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={handleCloseModal}
            style={s.closeWrapper}>
            <CloseIcon
              width={ICON_SIZE.SMALL}
              height={ICON_SIZE.SMALL}
              fill={COLOR.GREEN1}
            />
          </TouchableOpacity>

          <FlatList
            data={categories}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ItemSeparatorComponent={ListSeparator}
            ListEmptyComponent={ListEmpty}
            showsVerticalScrollIndicator={false}
          />

          <View style={s.footer}>
            <StyledButton
              text={t('common.apply')}
              onPress={onApply}
              color={ButtonColor.Green}
              solid
              small
            />
          </View>
        </View>
      </Modal>
    );
  },
);

export default FilterListModal;
