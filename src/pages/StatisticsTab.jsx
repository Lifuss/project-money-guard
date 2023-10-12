import Chart from 'components/Chart/Chart';
import StatisticsDashboard from 'components/StatisticsDashboard/StatisticsDashboard';
import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StatisticsTab = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  // const categoriesTabl = categories.map(({ name }) => name);
  async function getCategories() {
    axios.defaults.baseURL = 'https://wallet.goit.ua/';
    axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiIxYmNhYzUyMi0xYTUzLTRjMjgtODE0ZS05N2JjODBjNjU4ZTEiLCJpYXQiOjE2OTcxMTgyNDIsImV4cCI6MTAwMDAwMDE2OTcxMTgyNDJ9.v-qTolgWR02HGC6_BE7_5V4wk3YR-qNpAlXYeOjV2sY`;

    try {
      const response = await axios.get('api/transaction-categories');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  const dataDoughnut = {
    labels: [],
    datasets: [
      {
        data: [12, 19, 33, 5, 10, 39, 7, 8, 16, 45, 20],
        backgroundColor: [
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
    <div
      style={{
        display: 'flex',
        gap: '32px',
      }}
    >
      <Chart dataDoughnut={dataDoughnut} />
      <div>
        <StatisticsDashboard />
        <StatisticsTable categories={categories} dataDoughnut={dataDoughnut} />
      </div>
    </div>
  );
};

export default StatisticsTab;
