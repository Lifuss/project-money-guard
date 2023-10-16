import styled from 'styled-components';

export const StyledSortTransactionBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5em;
`;

export const styledSort = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    width: 150,
    borderRadius: '8px',
    background: ' rgba(133, 93, 175, 0.13) ',
    borderColor: 'rgba(255, 255, 255, 0.3)',
  }),
};
