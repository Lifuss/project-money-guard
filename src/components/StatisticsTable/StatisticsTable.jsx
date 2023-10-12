import React from 'react';
import {
  TableTr,
  TableTd,
  TableTh,
  TableTrHead,
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
        <tbody>
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
                <td>{dataDoughnut.datasets[0].data[index]}</td>
              </TableTr>
            );
          })}
          <TableTr>
            <td>Expenses:</td>
            <td>1000</td>
          </TableTr>
          <TableTr>
            <td>Income:</td>
            <td>1000</td>
          </TableTr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsTable;
