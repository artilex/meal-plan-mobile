import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

import s from './styles';

type Props = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const BottomSheetModal = React.memo(({isVisible, onClose, children}: Props) => (
  <Modal
    isVisible={isVisible}
    onSwipeComplete={onClose}
    onBackdropPress={onClose}
    swipeDirection={'down'}
    style={s.modal}>
    <View style={s.buttonWrapper}>
      <View style={s.topLine} />
    </View>

    <View style={s.container}>{children}</View>
  </Modal>
));

export default BottomSheetModal;
