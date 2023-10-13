import React, { useState } from 'react';
import {
  AddFormTitle,
  BtnAdd,
  BtnBox,
  BtnCancel,
  StyledContainer,
  StyledDatePicker,
  StyledField,
  StyledForm,
  StyledSelect,
} from './AddTransactionForm.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addTransactionThunk } from 'redux/transactions/operations';
import { object, string } from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../images/sprite.svg';

const categories = [
  'Main expenses',
  'Products',
  'Car',
  'Self Care',
  'Child Care',
  'Household Products',
  'Education',
  'Leisure',
  'Other expenses',
  'Entertainment',
];

const AddSchema = object({
  amount: string().required().min(2, 'Too Short!').max(50, 'Too Long!'),
  comment: string().min(2, 'Too Short!').max(50, 'Too Long!'),
  category: string().oneOf(categories).required(),
});

const AddTransactionForm = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState();
  const handleSubmit = values => {
    console.log('submit', values);
    dispatch(addTransactionThunk(values));
  };
  return (
    <div>
      <StyledContainer>
        <AddFormTitle>Add transaction</AddFormTitle>
        <Formik
          initialValues={{
            type: 'Expense',
            category: '',
            amount: '',
            date: new Date().toLocaleDateString('uk-UA'),
            comment: '',
          }}
          validationSchema={AddSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values, handleChange }) => (
            <StyledForm autoComplete="off">
              <StyledSelect
                name="type"
                value={values.type}
                onChange={handleChange}
              >
                <option>Income</option>
                <option>Expense</option>
              </StyledSelect>
              <StyledSelect
                name="category"
                value={values.category}
                onChange={handleChange}
              >
                <option disabled value="">
                  Select a category
                </option>
                {categories.map(category => (
                  <option key={category}>{category}</option>
                ))}
              </StyledSelect>
              <StyledField name="amount" placeholder="0.00" />

              <StyledDatePicker
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
                dateFormat="dd.MM.yyyy"
                // placeholderText={`${new Date().toLocaleDateString('uk-UA')}`}
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

              <StyledField
                name="comment"
                type="comment"
                placeholder="Comment"
              />
              {errors.comment && touched.comment ? (
                <div>{errors.comment}</div>
              ) : null}

              <BtnBox>
                <BtnAdd type="submit">Add</BtnAdd>
                <BtnCancel type="submit">Cancel</BtnCancel>
              </BtnBox>
            </StyledForm>
          )}
        </Formik>
      </StyledContainer>
    </div>
  );
};

export default AddTransactionForm;
