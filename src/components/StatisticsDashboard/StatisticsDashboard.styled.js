import styled from 'styled-components';
export const Select = styled.select`
  background-color: rgba(98, 63, 139, 1);
  color: white;
  height: 50px;
  padding: 12px 20px;
  font-size: 16px;
  min-width: 181px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.6);
`;
export const SelectBtn = styled.button`
  background-color: rgba(98, 63, 139, 1);
  color: white;
  height: 50px;
  padding: 12px 20px;
  font-size: 16px;
  min-width: 181px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.6);
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
