import React from 'react';
import {
  TableTr,
  TableTd,
  TableTh,
  TableTrHead,
  TableBody,
} from './StatisticsTable.styled';
const StatisticsTable = ({ categories, dataDoughnut }) => {
  return (
    <div>
      <table>
        <thead>
          <TableTrHead>
            <TableTh>Category</TableTh>
            <TableTh>Sum</TableTh>
          </TableTrHead>
        </thead>
        <TableBody>
          {categories.map(({ name }, index) => {
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
                  {dataDoughnut.datasets[0].data[index]}
                </td>
              </TableTr>
            );
          })}
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
            1000.00
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
            1000.00
          </td>
        </TableTr>
      </table>
    </div>
  );
};

export default StatisticsTable;
