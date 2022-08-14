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
  initQuantity?: string;
  initUnitId?: string;
  onSave: (quantity: number, unitId: string) => void;
  onClose: () => void;
};

const IngredientQuantityModal = ({
  initQuantity = '1',
  initUnitId = '',
  onSave,
  onClose,
}: Props) => {
  const {t} = useTranslation();

  const [quantity, setQuantity] = useState<string>(initQuantity);
  const [unitId, setUnitId] = useState(initUnitId);
  const [units, setUnits] = useState<ProductUnit[]>([]);

  // TODO: Add validation
  const buttonDisabled = !quantity || quantity === '0' || !unitId;

  // TODO: Replace it to fetch from Redux
  useEffect(() => {
    fetchProductUnits()
      .then(setUnits)
      .catch(error => {
        console.log('fetchProductUnits error');
        console.log(error);
      });
  }, []);

  const handleSave = () => {
    onSave(Number(quantity), unitId);
  };

  // isVisible = true in order to unmount component on close
  return (
    <BottomSheetModal isVisible={true} onClose={onClose}>
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
