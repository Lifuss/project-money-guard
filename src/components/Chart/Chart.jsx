import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const Chart = ({ dataDoughnut }) => {
  return (
    <div>
      Chart
      <Doughnut
        style={{ display: 'flex', maxWidth: '400px', maxHeight: '400px' }}
        data={dataDoughnut}
      />
    </div>
  );
};

export default Chart;
