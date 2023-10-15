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
  StyledEditContainer,
  StyledEditDatePicker,
  StyledEditField,
  StyledEditForm,
  StyledlabelBox,
} from './EditTransactionForm.styled';

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
    const EditData = {
      id: transaction.id,
      amount:
        values.type === 'EXPENSE'
          ? -Math.abs(values.amount)
          : Math.abs(values.amount),
      transactionDate: values.transactionDate,
      type: values.type,
      comment: values.comment,
    };
    dispatch(updateTransactionThunk(EditData));
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
            transactionDate: transaction.transactionDate,
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

              <StyledEditField
                name="amount"
                type="number"
                value={values.amount}
                placeholder="0.0"
              />
              {errors.amount && touched.amount ? (
                <div>{errors.amount}</div>
              ) : null}

              <StyledEditDatePicker
                name="transactionDate"
                value={values.transactionDate}
                onChange={date => {
                  handleChange({
                    target: {
                      name: 'transactionDate',
                      value: date,
                    },
                  });
                  setStartDate(date);
                }}
                dateFormat="dd.MM.yy"
                showIcon
                selected={startDate}
                maxDate={new Date()}
                style={{ float: 'right' }}
                icon={
                  <svg width="24" height="24">
                    <use href={`${sprite}#calendar`} />
                  </svg>
                }
              />

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
