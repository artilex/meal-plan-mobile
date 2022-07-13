import React, {useRef, useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';

import SearchIcon from 'src/assets/images/search-icon.svg';
import ClearIcon from 'src/assets/images/close-x.svg';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import StyledTextInput from '../StyledTextInput';
import s from './styles';

type Props = {
  text: string;
  onSearch: (text: string) => void;
};

const SearchInput = ({text, onSearch}: Props) => {
  const textInputRef = useRef<TextInput>(null);
  const [inputText, setInputText] = useState(text);

  const handleSearch = () => {
    onSearch(inputText);
    textInputRef.current?.blur();
  };

  const handleClear = () => {
    setInputText('');
    onSearch('');
    textInputRef.current?.blur();
  };

  const renderIcons = () => (
    <View style={s.iconContainer}>
      {!!inputText && (
        <TouchableOpacity style={s.clearIcon} onPress={handleClear}>
          <ClearIcon width={18} height={18} fill={COLOR.BLACK2} />
        </TouchableOpacity>
      )}

      <TouchableOpacity style={s.searchIcon} onPress={handleSearch}>
        <SearchIcon
          width={ICON_SIZE.EXTRA_EXTRA_SMALL}
          height={ICON_SIZE.EXTRA_EXTRA_SMALL}
          stroke={COLOR.GREEN1}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={s.container}>
      <StyledTextInput
        textInputRef={textInputRef}
        value={inputText}
        onChangeText={setInputText}
        onSubmitEditing={handleSearch}
        RightComponent={renderIcons}
        returnKeyType={'search'}
      />
    </View>
  );
};

export default SearchInput;
