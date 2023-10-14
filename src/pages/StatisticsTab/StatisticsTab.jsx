import Chart from 'components/Chart/Chart';
import StatisticsDashboard from 'components/StatisticsDashboard/StatisticsDashboard';
import StatisticsTable from 'components/StatisticsTable/StatisticsTable';

import { selectCategoriesSummary } from '../../redux/transactions/selectors';

import { useSelector } from 'react-redux';
import React, { useState } from 'react';

import {
  StatisticDivChart,
  StatisticDivMain,
  StatisticTitle,
} from './StatisticsTab.styled';

const StatisticsTab = () => {
  const [isOpenMonth, setIsOpenMonth] = useState(false);
  const [isOpenYear, setIsOpenYear] = useState(false);

  const categories = useSelector(selectCategoriesSummary);
  const categoriesValue = categories.map(({ total }) => {
    if (total < 0) {
      return -total;
    }
    return total;
  });
  const dataDoughnut = {
    labels: [],
    datasets: [
      {
        data: [...categoriesValue],
        backgroundColor: [
          'rgba(255, 2, 57, 0.991)',
          'rgba(110, 120, 232, 1)',
          'rgba(254, 208, 87, 1)',
          'rgba(197, 186, 255, 1)',
          'rgb(153, 102, 255)',
          'rgb(255, 160, 64)',
          'rgba(36, 204, 167, 1)',
          'rgba(0, 173, 132, 1)',
          'rgba(255, 216, 208, 1)',
          'rgba(129, 225, 255, 1)',
          'rgba(253, 148, 152, 1)',
        ],
        borderColor: [
          'rgba(255, 2, 57, 0.991)',
          'rgb(54, 163, 235)',
          'rgb(255, 207, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 160, 64)',
          'rgb(0, 161, 70)',
          'rgb(0, 76, 164)',
          'rgb(206, 0, 155)',
          'rgb(77, 255, 190)',
          'rgb(255, 137, 137)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <StatisticDivMain
      style={{
        display: 'flex',
        gap: '32px',
        padding: '32px 16px 40px 69px',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
      onClick={() => {
        if (isOpenMonth) {
          setIsOpenMonth(false);
        } else if (isOpenYear) {
          setIsOpenYear(false);
        } else {
          return;
        }
      }}
    >
      <StatisticDivChart
        style={{
          zIndex: '2',
        }}
      >
        <StatisticTitle>Statistics</StatisticTitle>
        <Chart dataDoughnut={dataDoughnut} categories={categories} />
      </StatisticDivChart>
      <div
        style={{
          zIndex: '3',
        }}
      >
        <StatisticsDashboard
          isOpen={isOpenMonth}
          setIsOpen={setIsOpenMonth}
          isOpenYear={isOpenYear}
          setIsOpenYear={setIsOpenYear}
        />
        <StatisticsTable categories={categories} dataDoughnut={dataDoughnut} />
      </div>
    </StatisticDivMain>
  );
};

export default StatisticsTab;
