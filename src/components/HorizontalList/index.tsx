import React from 'react';
import {FlatList, View} from 'react-native';

import ListItem from './ListItem';
import s from './styles';

type Item = {
  id: string;
  name: string;
};

type Props = {
  data: Item[];
  selectedId: string;
  onSelect: (itemId: string) => void;
};

const HorizontalList = React.memo(({data, selectedId, onSelect}: Props) => {
  const selectedItem = data.find(item => item.id === selectedId);
  const itemsToShow = selectedItem ? [selectedItem] : data;

  const flatListRef = React.useRef<FlatList>(null);
  const handleSelect = (itemId: string) => {
    if (selectedId === itemId) {
      onSelect('');
    } else {
      onSelect(itemId);
      flatListRef?.current?.scrollToOffset({animated: true, offset: 0});
    }
  };

  const keyExtractor = (item: Item) => item.id;
  const Spacer = () => <View style={s.spacer} />;
  const renderItem = ({item}: {item: Item}) => (
    <ListItem
      id={item.id}
      value={item.name}
      isSelected={selectedId === item.id}
      onSelect={handleSelect}
    />
  );

  return (
    <FlatList
      ref={flatListRef}
      data={itemsToShow}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={Spacer}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    />
  );
});

export default HorizontalList;
