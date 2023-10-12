import Chart from 'components/Chart/Chart';
import StatisticsDashboard from 'components/StatisticsDashboard/StatisticsDashboard';
import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import React from 'react';

const StatisticsTab = () => {
  return (
    <div>
      <Chart />
      <StatisticsDashboard />
      <StatisticsTable />
    </div>
  );
};

export default StatisticsTab;
