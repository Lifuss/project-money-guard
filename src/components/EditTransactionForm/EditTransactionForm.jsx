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
  CustomRadioText,
  EditBtnBox,
  EditFormTitle,
  StyledEditContainer,
  StyledEditDatePicker,
  StyledEditField,
  StyledEditForm,
  StyledlabelBox,
} from './EditTransactionForm.styled';

const EditTransactionForm = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState();
  const [selectedType, setSelectedType] = useState('Expense');

  const AddSchema = object({
    amount: string().min(1, 'Too Short!').max(50, 'Too Long!'),
    comment: string().min(2, 'Too Short!').max(50, 'Too Long!'),
  });
  const handleRadioChange = e => {
    setSelectedType(e.target.value);
  };
  const handleSubmit = values => {
    console.log('submit', values);
    dispatch(updateTransactionThunk(values));
  };
  return (
    <div>
      <StyledEditContainer>
        <EditFormTitle>Edit transaction</EditFormTitle>
        <Formik
          initialValues={{
            type: selectedType,
            amount: '',
            date: new Date().toLocaleDateString('uk-UA'),
            comment: '',
          }}
          validationSchema={AddSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values, handleChange }) => (
            <StyledEditForm autoComplete="off">
              <StyledlabelBox>
                <CustomRadioLabel selected={selectedType === 'Income'}>
                  <CustomRadioInput
                    type="radio"
                    name="type"
                    value="Expense"
                    onChange={handleRadioChange}
                  />
                  Income
                </CustomRadioLabel>
                <span>/</span>
                <CustomRadioLabel selected={selectedType === 'Expense'}>
                  <CustomRadioInput
                    type="radio"
                    name="type"
                    value="Income"
                    onChange={handleRadioChange}
                  />
                  Expense
                </CustomRadioLabel>
              </StyledlabelBox>

              <StyledEditField name="amount" type="amount" placeholder="0.0" />
              {errors.amount && touched.amount ? (
                <div>{errors.amount}</div>
              ) : null}
              <StyledEditDatePicker
                name="date"
                value={values.date}
                onChange={date => {
                  handleChange({
                    target: {
                      name: 'date',
                      value: date.toLocaleDateString('uk-UA'),
                    },
                  });
                  setStartDate(date);
                }}
                dateFormat="DD.MM.YY"
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
                type="comment"
                placeholder="Comment"
              />
              {errors.comment && touched.comment ? (
                <div>{errors.comment}</div>
              ) : null}

              <EditBtnBox>
                <BtnSave type="submit">Save</BtnSave>
                {/* <EditBtnCancel type="submit">Cancel</EditBtnCancel> */}
              </EditBtnBox>
            </StyledEditForm>
          )}
        </Formik>
      </StyledEditContainer>
    </div>
  );
};

export default EditTransactionForm;
