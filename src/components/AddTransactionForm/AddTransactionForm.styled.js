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
`;

export const StyledField = styled(Field)`
  width: 280px;
  height: 75px;
  color: rgba(255, 255, 255, 0.6);
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0 20px;
`;

export const StyledSelect = styled.select`
  width: 280px;
  height: 75px;
  color: #fbfbfb;
  background: transparent;
  padding: 0 20px;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
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

export const StyledDatePicker = styled(DatePicker)`
  width: 280px;
  height: 75px;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.mainWhite};
  background: transparent;
  padding: 0 20px;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
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
