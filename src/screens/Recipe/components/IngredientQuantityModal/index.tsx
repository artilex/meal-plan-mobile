import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {fetchProductUnits} from 'src/services/api/product';
import {ProductUnit} from 'src/services/api/types';
import {ButtonColor} from 'src/constants/theme';
import {
  BottomSheetModal,
  HorizontalList,
  StyledButton,
  StyledText,
  StyledTextInput,
} from 'src/components';
import s from './styles';

type Props = {
  isVisible: boolean;
  onSave: (quantity: number, unitId: string) => void;
  onClose: () => void;
};

const IngredientQuantityModal = ({isVisible, onSave, onClose}: Props) => {
  const {t} = useTranslation();

  const [quantity, setQuantity] = useState<string>('1');
  const [unitId, setUnitId] = useState('');
  const [units, setUnits] = useState<ProductUnit[]>([]);

  // TODO: Add validation
  const buttonDisabled = !quantity || quantity === '0' || !unitId;

  // TODO: Replace with Redux
  useEffect(() => {
    fetchProductUnits()
      .then(setUnits)
      .catch(error => {
        console.log('fetchProductUnits error');
        console.log(error);
      });
  }, []);

  const handleClose = () => {
    setQuantity('1');
    setUnitId('');
    onClose();
  };

  const handleSave = () => {
    handleClose();

    onSave(Number(quantity), unitId);
  };

  return (
    <BottomSheetModal isVisible={isVisible} onClose={handleClose}>
      <View style={s.row}>
        <StyledText style={s.label}>{t('recipe.quantity')}</StyledText>
        <StyledTextInput
          placeholder={t('recipe.enterQuantity')}
          value={quantity}
          onChangeText={setQuantity}
          keyboardType={'number-pad'}
        />
      </View>

      <View style={s.row}>
        <StyledText style={s.label}>{t('recipe.unitOfMeasure')}</StyledText>
        <HorizontalList data={units} selectedId={unitId} onSelect={setUnitId} />
      </View>

      <View style={s.footer}>
        <StyledButton
          text={t('common.save')}
          onPress={handleSave}
          color={ButtonColor.Green}
          disabled={buttonDisabled}
          solid
        />
      </View>
    </BottomSheetModal>
  );
};

export default IngredientQuantityModal;
