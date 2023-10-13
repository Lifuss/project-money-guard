import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import EditTransactionForm from 'components/EditTransactionForm/EditTransactionForm';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import ModalEditTransaction from 'components/ModalEditTransaction/ModalEditTransaction';
import MobileList from 'components/TransactionsList/MobileList';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { StyledContainer } from 'styles/GlobalStyles';

const HomeTab = () => {
  const isTable = useMediaQuery({
    query: '(min-width:768px)',
  });
  return (
    <StyledContainer>
      {isTable ? <TransactionsList /> : <MobileList />}
      <ButtonAddTransactions />
      <ModalAddTransaction />
      <ModalEditTransaction />
      <AddTransactionForm />
      <EditTransactionForm />
    </StyledContainer>
  );
};

export default HomeTab;
