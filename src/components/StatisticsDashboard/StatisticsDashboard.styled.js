import styled from 'styled-components';

export const StyledSelectMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  min-width: 316px;
  max-width: 316px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    padding: 20px 0 0 0;
    min-width: 192px;
    max-width: 192px;
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
    borderRadius: '8px',
    background: ' rgba(133, 93, 175, 0.13) ',
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
    borderRadius: '8px ',
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
