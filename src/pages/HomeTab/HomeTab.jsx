import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import Modal from 'components/Modal/Modal';
// import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
// import ModalEditTransaction from 'components/ModalEditTransaction/ModalEditTransaction';
import MobileList from 'components/TransactionsList/MobileList';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import useModal from 'hooks/useModal';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { StyledContainer } from 'styles/GlobalStyles';

const HomeTab = () => {
  const { isOpen, close } = useModal();

  const isTable = useMediaQuery({
    query: '(min-width:768px)',
  });
  return (
    <StyledContainer>
      
      {isTable ? <TransactionsList /> : <MobileList />}
      <ButtonAddTransactions />
      {/* <ModalAddTransaction /> */}
      {/* <ModalEditTransaction /> */}
      {/* <AddTransactionForm /> */}
      {isOpen && <Modal close={close}></Modal>}
    </StyledContainer>
  );
};

export default HomeTab;
