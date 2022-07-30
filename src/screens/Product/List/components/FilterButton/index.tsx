import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {TouchableOpacity, View} from 'react-native';

import {COLOR, ICON_SIZE} from 'src/constants/theme';
import FilterIcon from 'src/assets/images/filter.svg';
import FilterListModal from './FilterListModal';
import {RootState} from 'src/store';
import {buttonStyles as s} from './styles';

type Props = {
  selectedCategory: string;
  onSelect: (categoryId: string) => void;
};

const FilterButton = React.memo(({selectedCategory, onSelect}: Props) => {
  const categories = useSelector((state: RootState) => state.category.list);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
