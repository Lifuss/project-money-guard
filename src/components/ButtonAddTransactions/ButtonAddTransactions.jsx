import React from 'react';
import sprite from '../../images/sprite.svg';
import { AddBtnCircle } from './ButtonAddTransactions.styled';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal/Modal';
import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';

const ButtonAddTransactions = ({ transaction }) => {
  const { open, close, isOpen, data } = useModal();
  return (
    <>
      <AddBtnCircle type="button" onClick={() => open(transaction)}>
        <svg width="20" height="20">
          <use href={`${sprite}#plus`} />
        </svg>
      </AddBtnCircle>
      {isOpen && (
        <Modal close={close}>
          <AddTransactionForm transaction={data} close={close} />
        </Modal>
      )}
    </>
  );
};

export default ButtonAddTransactions;
