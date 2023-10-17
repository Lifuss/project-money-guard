import { styled } from 'styled-components';
import { Form, Field } from 'formik';
import DatePicker from 'react-datepicker';

export const StyledContainer = styled.div`
  padding: 20px 0;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;

  @media only screen and (min-width: 768px) {
    width: 394px;
  }
`;

export const StyledFieldAmount = styled(Field)`
  width: 280px;
  height: 75px;
  color: rgba(255, 255, 255, 0.6);
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0 20px;
  outline: none;

  @media only screen and (min-width: 768px) {
    width: 181px;
  }
`;

export const StyledFieldComment = styled(Field)`
  width: 280px;
  height: 75px;
  color: rgba(255, 255, 255, 0.6);
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0 20px;
  outline: none;
  @media only screen and (min-width: 768px) {
    width: 394px;
  }
`;

export const AddFormTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 34px;
`;

export const StyledRadioBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const StyledRadioInput = styled.input`
  display: none;
`;

export const StyledTextSpan = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  font-weight: 600;
`;

export const SwitcherSquare = styled.div`
  width: 80px;
  height: 40px;
  border-radius: 30px;
  background: #fff;
  position: relative;
`;

export const SwitcherRoundPlus = styled.div`
  width: 44px;
  height: 44px;
  background: #ffb627;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -2px;
  left: -2px;
`;

export const SwitcherRoundMinus = styled.div`
  width: 44px;
  height: 44px;
  background: #ff868d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -2px;
  left: 38px;
`;

export const AmountDateBox = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 280px;
  height: 75px;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.mainWhite};
  background: transparent;
  padding: 0 20px;
  border: none;
  outline: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);

  @media only screen and (min-width: 768px) {
    width: 181px;
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
    top: 25px;
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

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BtnAdd = styled.button`
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

//================= select ==================

export const StyledSelectMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 280px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    padding: 20px 0 0 0;
    width: 394px;
  }
  @media only screen and (min-width: 1280px) {
    margin-top: 60px;
    min-width: 213px;
    max-width: 213px;
    gap: 32px;
  }
`;

export const styles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    minWidth: 280,
    maxWidth: 280,
    minHeight: 50,
    border: 'none',
    borderRadius: 'none',
    borderBottom: '1px solid gray',
    paddingTop: '42px',
    // background: ' rgba(133, 93, 175, 0.13) ',
    '@media only screen and (min-width:768px)': {
      ...styles['@media only screen and (min-width: 768px)'],
      minWidth: 160,
      maxWidth: 160,
    },
    '@media only screen and (min-width:1280px)': {
      ...styles['@media only screen and (min-width: 1280px)'],
      minWidth: 181,
      maxWidth: 181,
    },
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected ? 'rgba(255, 255, 255, 0.10)' : '',
    color: state.isSelected ? '#FF868D' : '',
    ':hover': {
      background: 'rgba(255, 255, 255, 0.10)',
      color: '#FF868D',
    },
  }),
  menu: baseStyles => ({
    ...baseStyles,
    background:
      'linear-gradient(0deg, rgba(87, 38, 146, 0.813) 0%, rgba(80, 48, 154, 0.9) 43.14%, rgba(99, 63, 159, 0.9) 73.27%, rgba(76, 46, 109, 0.8) 120.03%) ',
    border: 'none ',
    // borderRadius: '8px ',
  }),
  menuList: base => ({
    ...base,

    '::-webkit-scrollbar': {
      width: '4px',
      height: '0px',
    },
    '::-webkit-scrollbar-track': {
      background: '#9065d1',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#6b438c',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#330a65',
    },
  }),
};
