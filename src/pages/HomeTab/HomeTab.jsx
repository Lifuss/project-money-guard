import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import Modal from 'components/Modal/Modal';
// import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
// import ModalEditTransaction from 'components/ModalEditTransaction/ModalEditTransaction';
import MobileList from 'components/TransactionsList/MobileList';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import useModal from 'hooks/useModal';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { StyledHomeTabContainer } from './HomeTab.styled';

const HomeTab = () => {
  const { isOpen, close } = useModal();

  const isTable = useMediaQuery({
    query: '(min-width:768px)',
  });
  return (
    <StyledHomeTabContainer>
      {isTable ? <TransactionsList /> : <MobileList />}
      <ButtonAddTransactions />
      {/* <ModalAddTransaction /> */}
      {/* <ModalEditTransaction /> */}
      {/* <AddTransactionForm /> */}
      {isOpen && <Modal close={close}></Modal>}
    </StyledHomeTabContainer>
  );
};

export default HomeTab;
