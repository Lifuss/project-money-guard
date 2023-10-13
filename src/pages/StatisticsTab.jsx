import Chart from 'components/Chart/Chart';
import StatisticsDashboard from 'components/StatisticsDashboard/StatisticsDashboard';
import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import React from 'react';
import { StyledContainer } from 'styles/GlobalStyles';

const StatisticsTab = () => {
  return (
    <StyledContainer>
      <Chart />
      <StatisticsDashboard />
      <StatisticsTable />
    </StyledContainer>
  );
};

export default StatisticsTab;
