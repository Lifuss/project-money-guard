import { styles } from 'components/StatisticsDashboard/StatisticsDashboard.styled';
import { styledSort } from './SortTransaction.styled';
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const SortTransaction = ({ value, setSortCriteria }) => {
  const options = [
    { value: 'date', label: 'Date' },
    { value: 'amount', label: 'Amount' },
    { value: 'category', label: 'Category' },
  ];
  return (
    <>
      <Select
        styles={{ ...styles, ...styledSort }}
        value={value}
        onChange={value => setSortCriteria(value)}
        options={options}
        placeholder={value.label}
        theme={theme => ({
          ...theme,
          colors: {
            neutral50: '#fff',
          },
        })}
      />
    </>
  );
};

export default SortTransaction;

SortTransaction.propTypes = {
  value: PropTypes.string,
  setSortCriteria: PropTypes.func,
};
