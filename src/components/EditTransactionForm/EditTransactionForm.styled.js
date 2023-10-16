import styled from 'styled-components';
import { Form, Field } from 'formik';
import DatePicker from 'react-datepicker';

export const StyledEditContainer = styled.div`
  padding: 20px;
`;

export const EditFormTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 32px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 30px;
  }
`;

export const StyledlabelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 50px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;
export const StyledEditForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
`;

export const CustomRadioLabel = styled.label`
  position: relative;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;

  color: ${({ value, selected }) => {
    if (
      (selected === 'INCOME' && value === 'INCOME') ||
      (selected === 'EXPENSE' && value === 'EXPENSE')
    ) {
      return value === 'INCOME' ? '#FFB627' : '#FF868D';
    } else {
      return '#E0E0E0';
    }
  }};

  @media only screen and (min-width: 768px) {
    font-weight: 700;
  }
`;

export const CustomRadioInput = styled.input`
  display: none;
`;

export const StyledAmounDateEdit = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
    margin-bottom: 30px;
  }
`;
export const StyledEditAmount = styled(Field)`
  width: 280px;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  color: ${({ theme }) => theme.colors.mainWhite};
  background: transparent;
  border: none;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.4);
  padding: 8px;
  padding-left: 20px;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    width: 180px;
    text-align: center;
  }
`;

export const StyledEditField = styled(Field)`
  width: 280px;
  padding: 0 20px 8px 20px;

  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  color: ${({ theme }) => theme.colors.mainWhite};

  @media only screen and (min-width: 768px) {
    width: 394px;
    padding: 0 8px 8px 8px;
  }
`;

export const StyledEditDatePicker = styled(DatePicker)`
  width: 280px;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  color: ${({ theme }) => theme.colors.mainWhite};
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    width: 180px;
  }
`;

export const StyledWrapper = styled.div`
  .react-datepicker__view-calendar-icon input {
    padding: 6px 5px 5px 20px;
  }
  .react-datepicker__input {
    border: 2px solid #333;
    border-radius: 4px;
    padding: 8px;
  }
  .react-datepicker__input-container {
    padding-bottom: 15px;
  }
  .react-datepicker__input-container .react-datepicker__calendar-icon {
    position: absolute;
    padding: 0.5rem;
    box-sizing: content-box;
    right: 5px;
    top: -2px;
  }
  .react-datepicker__calendar-icon {
    width: 24px;
    height: 24px;
    vertical-align: -0.125em;
  }
  .react-datepicker__month-container {
    float: left;
    background: radial-gradient(#3f2e96, #5f478c);
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name,
  .react-datepicker__current-month {
    color: ${({ theme }) => theme.colors.mainWhite};
  }
  .react-datepicker__day:hover {
    background: ${({ theme }) => theme.backgrounds.active};
  }
  .react-datepicker__header {
    background: ${({ theme }) => theme.backgrounds.tableHead};
  }
  .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled,
  .react-datepicker__year-text--disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.backgrounds.white40};
  }
  .react-datepicker__day--disabled:hover,
  .react-datepicker__month-text--disabled:hover,
  .react-datepicker__quarter-text--disabled:hover,
  .react-datepicker__year-text--disabled:hover {
    background-color: ${({ theme }) => theme.backgrounds.white40};
    border-radius: 0;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: ${({ theme }) => theme.backgrounds.active};
  }
`;

export const EditBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BtnSave = styled.button`
  width: 280px;
  height: 50px;
  padding: 13px 100px;
  border-radius: 20px;
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainWhite};
  background: ${({ theme }) => theme.backgrounds.btnGradient};
  margin-top: 40px;
`;

export const EditBtnCancel = styled.button`
  width: 280px;
  height: 50px;
  padding: 13px 100px;
  border-radius: 20px;
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #623f8b;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  text-align: center;
`;
