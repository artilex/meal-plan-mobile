import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {getProductCategories} from 'src/services/api/product';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import FilterIcon from 'src/assets/images/filter.svg';
import FilterListModal from './FilterListModal';
import {buttonStyles as s} from './styles';

type Props = {
  selectedCategory: string;
  onSelect: (categoryId: string) => void;
};

const FilterButton = React.memo(({selectedCategory, onSelect}: Props) => {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getProductCategories()
      .then(setCategories)
      .catch(error => console.log('getProductCategories: ', error));
  }, []);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={handleOpenModal}
        style={s.container}>
        <FilterIcon
          width={ICON_SIZE.EXTRA_SMALL}
          height={ICON_SIZE.EXTRA_SMALL}
          fill={COLOR.GREEN1}
        />
        {!!selectedCategory && <View style={s.redCircle} />}
      </TouchableOpacity>

      {showModal && (
        <FilterListModal
          selectedCategory={selectedCategory}
          categories={categories}
          onClose={handleCloseModal}
          onApply={onSelect}
        />
      )}
    </>
  );
});

export default FilterButton;
