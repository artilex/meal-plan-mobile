import React, {useRef, useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native';

import SearchIcon from 'src/assets/images/search-icon.svg';
import {COLOR, ICON_SIZE} from 'src/constants/theme';
import StyledTextInput from '../StyledTextInput';
import s from './styles';

const {EXTRA_SMALL: SIZE} = ICON_SIZE;

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

  const renderIcon = () => (
    <TouchableOpacity style={s.iconWrapper} onPress={handleSearch}>
      <SearchIcon width={SIZE} height={SIZE} stroke={COLOR.GREEN1} />
    </TouchableOpacity>
  );

  return (
    <StyledTextInput
      textInputRef={textInputRef}
      value={inputText}
      onChangeText={setInputText}
      RightComponent={renderIcon}
    />
  );
};

export default SearchInput;
