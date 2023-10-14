import styled from 'styled-components';

export const SelectBtn = styled.button`
  background-color: transparent;
  color: white;
  height: 50px;
  padding: 12px 20px;
  font-size: 16px;
  width: 280px;
  border-radius: 8px;
  display: flex;
  font-family: Poppins;
  font-weight: 400;
  justify-content: space-between;

  align-items: stretch;
  border: 1px solid rgba(255, 255, 255, 0.6);
  position: relative;
  @media only screen and (min-width: 768px) {
    width: 160px;
  }
  @media only screen and (min-width: 1280px) {
    width: 181px;
  }
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
  width: 280px;

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
  @media only screen and (min-width: 768px) {
    width: 160px;
  }
  @media only screen and (min-width: 1280px) {
    width: 181px;
  }
`;
export const SelectMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
    padding: 0;
  }
  @media only screen and (min-width: 1280px) {
    margin-top: 60px;
  }
`;

// @media only screen and (min-width: 768px) {
//   width: 336px;
//   height: 336px;
//   margin-top: 20px;
// }
// @media only screen and (min-width: 1280px) {
//   width: 288px;
//   height: 288px;
// }
