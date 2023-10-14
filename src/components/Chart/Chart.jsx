import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import pngwing from '../StatisticsTable/pngwing.com (8).webp';
import { ChartP, ChartDiv } from './Chart.styled';
import { selectPeriodTotal } from 'redux/transactions/selectors';
import { useSelector } from 'react-redux';
ChartJS.register(ArcElement, Tooltip, Legend);
const Chart = ({ dataDoughnut, categories }) => {
  const periodTotal = useSelector(selectPeriodTotal);
  return (
    <ChartDiv>
      {categories.length > 1 ? (
        <div>
          <Doughnut data={dataDoughnut} />
          <ChartP>₴{periodTotal}</ChartP>
        </div>
      ) : (
        <img src={pngwing} alt="fff" />
      )}
    </ChartDiv>
  );
};

export default Chart;
