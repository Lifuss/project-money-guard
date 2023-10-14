import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import {
  addTransactionThunk,
  fetchTransactionCategory,
} from 'redux/transactions/operations';
import { object, string } from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../images/sprite.svg';
import { selectCategories } from 'redux/transactions/selectors';

// const categories = [
//   'Main expenses',
//   'Products',
//   'Car',
//   'Self Care',
//   'Child Care',
//   'Household Products',
//   'Education',
//   'Leisure',
//   'Other expenses',
//   'Entertainment',
// ];

const AddSchema = object({
  amount: string().required(),
  comment: string().min(2, 'Too Short!').max(50, 'Too Long!'),
  category: string().required(),
});

const AddTransactionForm = () => {
  const dispatch = useDispatch();
  // const transactions = useSelector(selectTransactions);

  const categories = useSelector(selectCategories);

  useEffect(() => {
    // dispatch(fetchTransactionsThunk());
    dispatch(fetchTransactionCategory());
  }, [dispatch]);

  const [startDate, setStartDate] = useState();

  const handleSubmit = values => {
    console.log('submit', values);
    const addFormData = {
      amount: values.type === 'EXPENSE' ? -values.amount : values.amount,
      // categoryId: values.category.id,
      categoryId:
        values.type === 'EXPENSE'
          ? values.category
          : '063f1132-ba5d-42b4-951d-44011ca46262', //categoryId INCOME
      // categoryId: '27eb4b75-9a42-4991-a802-4aefe21ac3ce', //PRODUCTS
      comment: values.comment,
      transactionDate: values.transactionDate,
      type: values.type === 'EXPENSE' ? 'EXPENSE' : 'INCOME',
    };
    console.log(addFormData);
    dispatch(addTransactionThunk(addFormData));
  };

  return (
    <div>
      <StyledContainer>
        <AddFormTitle>Add transaction</AddFormTitle>
        <Formik
          initialValues={{
            type: 'EXPENSE',
            category: '',
            amount: '',
            transactionDate: new Date(),
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
                <option>INCOME</option>
                <option>EXPENSE</option>
              </StyledSelect>
              {values.type !== 'INCOME' ? (
                <StyledSelect
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                >
                  <option disabled value="">
                    Select a category
                  </option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </StyledSelect>
              ) : null}

              <StyledField
                name="amount"
                placeholder="0.00"
                value={values.amount}
              />

              <StyledDatePicker
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
