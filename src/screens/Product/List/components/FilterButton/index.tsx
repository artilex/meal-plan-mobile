import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';

import {getProductCategories} from 'src/services/api/product';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import FilterIcon from 'src/assets/images/filter.svg';
import FilterModal from './FilterModal';
import s from './styles';

const FilterButton = React.memo(() => {
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
      </TouchableOpacity>

      <FilterModal
        categories={categories}
        isVisible={showModal}
        onClose={handleCloseModal}
      />
    </>
  );
});

export default FilterButton;
