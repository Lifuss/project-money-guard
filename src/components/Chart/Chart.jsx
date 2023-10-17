import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import pngwing from '../StatisticsTable/pngwing.com (8).webp';
import { StyledChartP, StyledChartDiv } from './Chart.styled';
import { selectPeriodTotal } from 'redux/transactions/selectors';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

ChartJS.register(ArcElement, Tooltip, Legend);
const Chart = ({ dataDoughnut, categories }) => {
  const periodTotal = useSelector(selectPeriodTotal);
  return (
    <StyledChartDiv>
      {categories.length > 1 ? (
        <div>
          <Doughnut data={dataDoughnut} />
          <StyledChartP>₴ {periodTotal}</StyledChartP>
        </div>
      ) : (
        <img src={pngwing} alt="fff" />
      )}
    </StyledChartDiv>
  );
};

export default Chart;

Chart.propTypes = {
  dataDoughnut: PropTypes.object,
  categories: PropTypes.array,
};
