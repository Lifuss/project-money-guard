import styled from 'styled-components';
import { Form, Field } from 'formik';
import DatePicker from 'react-datepicker';

export const StyledEditContainer = styled.div`
  padding: 20px 0;
`;

export const StyledEditForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
`;

export const StyledEditField = styled(Field)`
  width: 280px;
  height: 75px;
  color: rgba(255, 255, 255, 0.6);
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0 20px;
`;

export const EditFormTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 34px;
`;

export const StyledEditDatePicker = styled(DatePicker)`
  width: 280px;
  height: 75px;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.mainWhite};
  background: transparent;
  padding: 0 20px;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
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
export const StyledlabelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const StyledInputType = styled.span``;

export const CustomRadioInput = styled.input`
  display: none;
`;

export const CustomRadioLabel = styled.label`
  position: relative;
  cursor: pointer;
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
`;
