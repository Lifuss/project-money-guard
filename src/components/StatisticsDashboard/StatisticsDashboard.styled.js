import styled from 'styled-components';

export const SelectBtn = styled.button`
  background-color: transparent;
  color: white;
  height: 50px;
  padding: 12px 20px;
  font-size: 16px;
  min-width: 181px;
  border-radius: 8px;
  display: flex;
  font-family: Poppins;
  font-weight: 400;
  justify-content: space-between;
  max-width: 160px;
  align-items: stretch;
  border: 1px solid rgba(255, 255, 255, 0.6);
  position: relative;
`;
export const SelectSvg = styled.svg`
  position: absolute;
  width: 23px;
  height: 23px;
  right: 20px;
  top: 10px;
`;

export const Options = styled.button`
  padding: 6px 20px;
  display: block;
  width: 100%;
  text-align: left;
  border: none;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: transparent;
  margin: 0;
  position: relative;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #ff868d;
  }
`;
