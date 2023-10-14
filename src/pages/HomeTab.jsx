import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import EditTransactionForm from 'components/EditTransactionForm/EditTransactionForm';
import Modal from 'components/Modal/Modal';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import ModalEditTransaction from 'components/ModalEditTransaction/ModalEditTransaction';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import useModal from 'hooks/useModal';
import React from 'react';
import { StyledContainer } from 'styles/GlobalStyles';

const HomeTab = () => {
  const { toggle, isOpen, close } = useModal();
  const handleOpen = () => {
    toggle();
  };

  return (
    <StyledContainer>
      <TransactionsList />
      <ButtonAddTransactions />
      <ModalAddTransaction />
      <ModalEditTransaction />
      <AddTransactionForm />
      <EditTransactionForm />
      {isOpen && <Modal handleOpen={handleOpen} close={close}></Modal>}
    </StyledContainer>
  );
};

export default HomeTab;
