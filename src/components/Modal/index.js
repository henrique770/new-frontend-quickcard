import React from 'react';
import PropTypes from 'prop-types';

import { Clear } from '@styled-icons/material-outlined';

import * as S from './styled';

function Modal({ onClose, children, size }) {
  return (
    <S.Modal>
      <S.ModalContainer size={size}>
        <S.ButtonClose onClick={onClose}>
          <Clear size={30} color="#fff" />
        </S.ButtonClose>
        <S.ModalContent>{children}</S.ModalContent>
      </S.ModalContainer>
    </S.Modal>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  size: PropTypes.number,
};

export default Modal;
