import { Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTransactionThunk } from 'redux/transactions/operations';
import sprite from '../../images/sprite.svg';
import { object, string } from 'yup';
import {
  BtnSave,
  CustomRadioInput,
  CustomRadioLabel,
  EditBtnBox,
  EditFormTitle,
  StyledAmounDateEdit,
  StyledEditAmount,
  StyledEditContainer,
  StyledEditDatePicker,
  StyledEditField,
  StyledEditForm,
  StyledIconCalendar,
  StyledReqField,
  StyledWrapper,
  StyledlabelBox,
} from './EditTransactionForm.styled';

const handleNumberInput = e => {
  const inputValue = e.target.value;
  const newValue = inputValue.replace(/[-+eE]/g, '');
  e.target.value = newValue;
};
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${day}.${month}.${year}`;
}

const EditTransactionForm = ({ transaction, close }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState();
  const [selectedType, setSelectedType] = useState(transaction.type);

  const AddSchema = object({
    amount: string().required().min(1, 'Too Short!').max(12, 'Too Long!'),
    comment: string().min(2, 'Too Short!').max(50, 'Too Long!'),
    type: string().oneOf(['INCOME', 'EXPENSE'], 'Invalid transaction type'),
  });

  const handleSubmit = values => {
    const editData = {
      id: transaction.id,
      amount:
        values.type === 'EXPENSE'
          ? -Math.abs(values.amount)
          : Math.abs(values.amount),
      transactionDate: values.transactionDate,
      type: values.type,
      comment: values.comment,
    };
    dispatch(updateTransactionThunk(editData));
    close();
  };

  return (
    <div>
      <StyledEditContainer>
        <EditFormTitle>Edit transaction</EditFormTitle>
        <Formik
          initialValues={{
            id: transaction.id,
            amount: transaction.amount,
            transactionDate: formatDate(transaction.transactionDate),
            comment: transaction.comment,
            type: transaction.type,
          }}
          validationSchema={AddSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values, handleChange, setFieldValue }) => (
            <StyledEditForm autoComplete="off">
              <StyledlabelBox>
                <CustomRadioLabel value="INCOME" selected={selectedType}>
                  <CustomRadioInput
                    type="radio"
                    name="type"
                    value="INCOME"
                    disabled={values.type === 'EXPENSE' ? true : false}
                    checked={values.type === 'INCOME'}
                    onChange={() => {
                      setFieldValue('type', 'INCOME');
                      setSelectedType('INCOME');
                    }}
                  />
                  Income
                </CustomRadioLabel>
                <span>/</span>
                <CustomRadioLabel value="EXPENSE" selected={selectedType}>
                  <CustomRadioInput
                    type="radio"
                    name="type"
                    disabled={values.type === 'INCOME' ? true : false}
                    value="EXPENSE"
                    checked={values.type === 'EXPENSE'}
                    onChange={() => {
                      setFieldValue('type', 'EXPENSE');
                      setSelectedType('EXPENSE');
                    }}
                  />
                  Expense
                </CustomRadioLabel>
              </StyledlabelBox>
              <StyledAmounDateEdit>
                <StyledEditAmount
                  name="amount"
                  type="number"
                  onInput={handleNumberInput}
                  value={values.amount.toString().replace('-', '')}
                  placeholder="0.0"
                />
                {errors.amount && touched.amount ? (
                  <StyledReqField>{errors.amount}</StyledReqField>
                ) : null}

                <StyledWrapper>
                  <label>
                    <StyledEditDatePicker
                      name="transactionDate"
                      value={values.transactionDate}
                      onChange={transactionDate => {
                        handleChange({
                          target: {
                            name: 'transactionDate',
                            value: transactionDate,
                          },
                        });
                        setStartDate(transactionDate);
                      }}
                      dateFormat="dd.MM.yyyy"
                      showIcon
                      selected={startDate}
                      maxDate={new Date()}
                      style={{ float: 'left' }}
                      icon={
                        <StyledIconCalendar width="24" height="24">
                          <use href={`${sprite}#calendar`} />
                        </StyledIconCalendar>
                      }
                    />
                  </label>
                </StyledWrapper>
              </StyledAmounDateEdit>
              <StyledEditField
                name="comment"
                type="text"
                value={values.comment}
                placeholder="Comment"
              />
              {errors.comment && touched.comment ? (
                <div>{errors.comment}</div>
              ) : null}

              <EditBtnBox>
                <BtnSave type="submit">Save</BtnSave>
              </EditBtnBox>
            </StyledEditForm>
          )}
        </Formik>
      </StyledEditContainer>
    </div>
  );
};

export default EditTransactionForm;
