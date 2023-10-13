import React, { useState } from 'react';
import { SelectBtn, Options } from './StatisticsDashboard.styled';
import { Scrollbars } from 'react-custom-scrollbars-2';
const StatisticsDashboard = ({
  isOpen,
  setIsOpen,
  isOpenYear,
  setIsOpenYear,
}) => {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedYear, setSelectedYear] = useState('2023');
  const onMonthClick = month => {
    setSelectedMonth(month);
    setIsOpen(!isOpen);
  };
  const onYearClick = year => {
    setSelectedYear(year);
    setIsOpenYear(!isOpenYear);
  };
  const years = ['2023', '2022', '2021', '2020', '2019'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div
      style={{
        display: 'flex',
        gap: '32px',
        marginTop: '60px',
      }}
    >
      <div>
        <SelectBtn onClick={() => setIsOpen(!isOpen)}>
          {selectedMonth}
        </SelectBtn>
        {isOpen && (
          <Scrollbars
            style={{
              width: 181,
              height: 157,
              position: 'absolute',
              zIndex: '2',
              backgroundColor: ' rgba(98, 63, 139, 1)',
            }}
          >
            {months.map(month => (
              <Options key={month} onClick={() => onMonthClick(month)}>
                {month}
              </Options>
            ))}
          </Scrollbars>
        )}
      </div>

      <div>
        <SelectBtn onClick={() => setIsOpenYear(!isOpenYear)}>
          {selectedYear}
        </SelectBtn>
        {isOpenYear && (
          <Scrollbars
            style={{
              width: 181,
              height: 157,
              position: 'absolute',
              zIndex: '2',
              backgroundColor: ' rgba(98, 63, 139, 1)',
            }}
          >
            {years.map(year => (
              <Options key={year} onClick={() => onYearClick(year)}>
                {year}
              </Options>
            ))}
          </Scrollbars>
        )}
      </div>
    </div>
  );
};

export default StatisticsDashboard;
