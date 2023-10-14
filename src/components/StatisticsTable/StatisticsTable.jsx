import React from 'react';
import {
  TableTr,
  TableTd,
  TableTh,
  TableTrHead,
  TableBody,
  TableH3,
  TableDiv,
} from './StatisticsTable.styled';
import { useSelector } from 'react-redux';

import {
  selectExpenseSummary,
  selectIncomeSummary,
} from 'redux/transactions/selectors';
const StatisticsTable = ({ categories, dataDoughnut }) => {
  const income = useSelector(selectIncomeSummary);
  const expense = useSelector(selectExpenseSummary);
  return (
    <TableDiv>
      <table>
        <thead>
          <TableTrHead>
            <TableTh>Category</TableTh>
            <TableTh>Sum</TableTh>
          </TableTrHead>
        </thead>
        <TableBody>
          {categories.length > 1 ? (
            categories.map(({ name, total }, index) => {
              return (
                <TableTr key={name}>
                  <TableTd>
                    <div
                      style={{
                        backgroundColor: `${dataDoughnut.datasets[0].backgroundColor[index]}`,
                        width: '24px',
                        height: '24px',
                      }}
                    ></div>
                    {name}
                  </TableTd>
                  <td
                    style={{
                      fontSize: '14px',
                    }}
                  >
                    {total < 0 ? -total : total}
                  </td>
                </TableTr>
              );
            })
          ) : (
            <TableH3>
              It looks like you have not made any monetary transactions during
              this time period
            </TableH3>
          )}
        </TableBody>
        <TableTr
          style={{
            border: 'none',
          }}
        >
          <td>Expenses:</td>
          <td
            style={{
              color: '#FF868D',
            }}
          >
            {-expense}
          </td>
        </TableTr>
        <TableTr
          style={{
            border: 'none',
          }}
        >
          <td>Income:</td>
          <td
            style={{
              color: '#FF868D',
            }}
          >
            {income}
          </td>
        </TableTr>
      </table>
    </TableDiv>
  );
};

export default StatisticsTable;
