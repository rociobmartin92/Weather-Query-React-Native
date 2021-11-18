import React from 'react';
import { Overlay } from 'react-native-elements';
import { styles } from './Modal.style';

export default function Modal(props) {
  const { isVisible, setIsVisible, children } = props;

  const closeModal = () => setIsVisible(false);

  return (
    <Overlay
      isVisible={isVisible}
      overlayStyle={styles.overlay}
      onBackdropPress={closeModal}
    >
      {children}
    </Overlay>
  );
}
