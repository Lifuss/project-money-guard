import React, { useEffect, useState } from 'react';
import {
  AddFormTitle,
  AmountDateBox,
  BtnAdd,
  BtnBox,
  StyledContainer,
  StyledDatePicker,
  StyledFieldAmount,
  StyledFieldComment,
  StyledForm,
  StyledRadioBox,
  StyledRadioInput,
  StyledSelectMainDiv,
  StyledTextSpan,
  StyledWrapper,
  SwitcherRoundMinus,
  SwitcherRoundPlus,
  SwitcherSquare,
  styles,
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
import { selectAllCategories } from 'redux/transactions/selectors';
import Select from 'react-select';

const AddSchema = object({
  amount: string().required(),
  comment: string().min(2, 'Too Short!').max(50, 'Too Long!'),
  category: string(),
});

const AddTransactionForm = ({ close }) => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState({
    value: 'Select a category',
    label: 'Select a category',
  });

  const [transactionType, setTransactionType] = useState('EXPENSE');
  const [isSwitcherRoundPlusVisible, setIsSwitcherRoundPlusVisible] =
    useState(false);
  const [isSwitcherRoundMinusVisible, setIsSwitcherRoundMinusVisible] =
    useState(true);

  const onCategoryChange = category => {
    setSelectedCategory(category);
  };

  const categories = useSelector(selectAllCategories);
  // console.log(categories);

  useEffect(() => {
    dispatch(fetchTransactionCategory());
  }, [dispatch]);

  const [startDate, setStartDate] = useState();

  const handleSwitcherClick = (values, setFieldValue) => {
    console.log('This is switcher click');
    const newTransactionType =
      transactionType === 'EXPENSE' ? 'INCOME' : 'EXPENSE';
    setTransactionType(transactionType === 'EXPENSE' ? 'INCOME' : 'EXPENSE');
    setFieldValue('type', newTransactionType);
    setTransactionType(newTransactionType);

    if (transactionType === 'EXPENSE') {
      setIsSwitcherRoundPlusVisible(true);
      setIsSwitcherRoundMinusVisible(false);
    } else {
      setIsSwitcherRoundPlusVisible(false);
      setIsSwitcherRoundMinusVisible(true);
    }
    console.log(transactionType);
  };

  const handleSubmit = (values, selectedCategory) => {
    // console.log('Submit, values', values);
    const addFormData = {
      amount: values.type === 'EXPENSE' ? -values.amount : values.amount,
      categoryId:
        values.type === 'EXPENSE'
          ? selectedCategory.id
          : '063f1132-ba5d-42b4-951d-44011ca46262', // categoryId INCOME
      comment: values.comment,
      transactionDate: values.transactionDate,
      // type: values.type,
      type: transactionType,
    };
    // console.log('Submit, addFormData', addFormData);
    dispatch(addTransactionThunk(addFormData));
    close();
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
          // onSubmit={values => handleSubmit(values, selectedCategory)}
          onSubmit={(values, { setFieldValue }) =>
            handleSubmit(values, selectedCategory)
          }
        >
          {({ errors, touched, values, handleChange, setFieldValue }) => (
            <StyledForm autoComplete="off">
              <input type="hidden" name="type" value={values.type} />
              <StyledRadioBox>
                <label>
                  <StyledRadioInput
                    type="radio"
                    name="type"
                    value="INCOME"
                    checked={values.type === 'INCOME'}
                    onChange={handleChange}
                  />
                  <StyledTextSpan
                    style={{
                      color: values.type === 'INCOME' ? '#FFB627' : '#ffffff99',
                    }}
                  >
                    Income
                  </StyledTextSpan>
                </label>
                <SwitcherSquare
                  onClick={() => handleSwitcherClick(values, setFieldValue)}
                >
                  {/* {values.type === 'INCOME' ? (
                    <SwitcherRoundPlus>
                      <svg width="20" height="20">
                        <use href={`${sprite}#plus`} />
                      </svg>
                    </SwitcherRoundPlus>
                  ) : (
                    <SwitcherRoundMinus>
                      <svg width="20" height="20">
                        <use href={`${sprite}#minus`} />
                      </svg>
                    </SwitcherRoundMinus>
                  )} */}
                  {/* ================================= */}
                  {isSwitcherRoundPlusVisible && (
                    <SwitcherRoundPlus>
                      <svg width="20" height="20">
                        <use href={`${sprite}#plus`} />
                      </svg>
                    </SwitcherRoundPlus>
                  )}

                  {isSwitcherRoundMinusVisible && (
                    <SwitcherRoundMinus>
                      <svg width="20" height="20">
                        <use href={`${sprite}#minus`} />
                      </svg>
                    </SwitcherRoundMinus>
                  )}
                  {/* ========================= */}
                </SwitcherSquare>
                <label>
                  <StyledRadioInput
                    type="radio"
                    name="type"
                    value="EXPENSE"
                    checked={values.type === 'EXPENSE'}
                    onChange={handleChange}
                  />
                  <StyledTextSpan
                    style={{
                      color:
                        values.type === 'EXPENSE' ? '#FF868D' : '#ffffff99',
                    }}
                  >
                    Expense
                  </StyledTextSpan>
                </label>
              </StyledRadioBox>

              {values.type === 'EXPENSE' ? (
                <StyledSelectMainDiv>
                  <Select
                    name="category"
                    styles={styles}
                    value={selectedCategory}
                    onChange={value => onCategoryChange(value)}
                    options={categories
                      ?.filter(option => option.type === 'EXPENSE')
                      .map(option => ({
                        value: option.type,
                        label: option.name,
                        id: option.id,
                      }))}
                    placeholder={selectedCategory.label}
                    theme={theme => ({
                      ...theme,
                      colors: {
                        neutral50: '#fff',
                      },
                    })}
                  />
                </StyledSelectMainDiv>
              ) : null}

              <AmountDateBox>
                <StyledFieldAmount
                  name="amount"
                  placeholder="0.00"
                  value={values.amount}
                />
                <StyledWrapper>
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
                    placeholderText={`${new Date().toLocaleDateString(
                      'uk-UA'
                    )}`}
                    showIcon
                    selected={startDate}
                    maxDate={new Date()}
                    style={{ float: 'left' }}
                    icon={
                      <svg width="24" height="24">
                        <use href={`${sprite}#calendar`} />
                      </svg>
                    }
                  />
                </StyledWrapper>
              </AmountDateBox>
              <StyledFieldComment
                name="comment"
                type="comment"
                placeholder="Comment"
              />
              {errors.comment && touched.comment ? (
                <div>{errors.comment}</div>
              ) : null}
              <BtnBox>
                <BtnAdd type="submit">Add</BtnAdd>
              </BtnBox>
            </StyledForm>
          )}
        </Formik>
      </StyledContainer>
    </div>
  );
};

export default AddTransactionForm;
