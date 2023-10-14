import React, { useEffect, useMemo, useState } from 'react';
import {
  SelectBtn,
  Options,
  SelectSvg,
  SelectMainDiv,
} from './StatisticsDashboard.styled';
import { Scrollbars } from 'react-custom-scrollbars-2';
import sprite from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { fetchTransactionsSummary } from 'redux/transactions/operations';

const StatisticsDashboard = ({
  isOpen,
  setIsOpen,
  isOpenYear,
  setIsOpenYear,
}) => {
  const dispatch = useDispatch();
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedYear, setSelectedYear] = useState(2023);

  console.log('rerender');
  const onMonthClick = month => {
    setSelectedMonth(month);
    setIsOpen(!isOpen);
  };
  const onYearClick = year => {
    setSelectedYear(year);
    setIsOpenYear(!isOpenYear);
  };

  const years = [2023, 2022, 2021, 2020, 2019];
  const months = useMemo(
    () => [
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
    ],
    []
  );
  useEffect(() => {
    console.log(selectedMonth, selectedYear);
    const data = {
      month: months.indexOf(selectedMonth) + 1,
      year: selectedYear,
    };
    dispatch(fetchTransactionsSummary(data));
  }, [dispatch, months, selectedMonth, selectedYear]);
  return (
    <SelectMainDiv>
      <>
        <SelectBtn onClick={() => setIsOpen(!isOpen)}>
          <p>{selectedMonth}</p>
          <SelectSvg>
            {isOpen ? (
              <use href={`${sprite}#arrow_up`} width={22} />
            ) : (
              <use href={`${sprite}#arrow_down`} width={22} />
            )}
          </SelectSvg>
        </SelectBtn>
        {isOpen && (
          <Scrollbars
            style={{
              height: 157,
              width: 181,

              position: 'absolute',
              zIndex: '2',
              background:
                'linear-gradient(0deg, rgba(83, 61, 186, 0.90) 0%, rgba(80, 48, 154, 0.90) 43.14%, rgba(106, 70, 165, 0.9) 73.27%, rgba(79, 46, 115, 0.8))',
            }}
          >
            {months.map(month => (
              <Options key={month} onClick={() => onMonthClick(month)}>
                {month}
              </Options>
            ))}
          </Scrollbars>
        )}
      </>

      <div>
        <SelectBtn onClick={() => setIsOpenYear(!isOpenYear)}>
          {selectedYear}
          <SelectSvg>
            {isOpenYear ? (
              <use href={`${sprite}#arrow_up`} width={22} />
            ) : (
              <use href={`${sprite}#arrow_down`} width={22} />
            )}
          </SelectSvg>
        </SelectBtn>
        {isOpenYear && (
          <Scrollbars
            style={{
              width: 181,
              height: 157,
              position: 'absolute',
              zIndex: '2',
              background:
                'linear-gradient(0deg, rgba(83, 61, 186, 0.90) 0%, rgba(80, 48, 154, 0.90) 43.14%, rgba(106, 70, 165, 0.9) 73.27%, rgba(79, 46, 115, 0.8))',
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
    </SelectMainDiv>
  );
};

export default StatisticsDashboard;
