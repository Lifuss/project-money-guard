import React from 'react';

const StatisticsTable = ({ categories, dataDoughnut }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(({ name }, index) => {
            return (
              <tr key={name}>
                <td
                  style={{
                    display: 'flex',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: `${dataDoughnut.datasets[0].backgroundColor[index]}`,
                      width: '24px',
                      height: '24px',
                    }}
                  ></div>
                  {name}
                </td>
                <td>{dataDoughnut.datasets[0].data[index]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsTable;
