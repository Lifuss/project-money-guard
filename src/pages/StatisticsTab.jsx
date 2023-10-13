import Chart from 'components/Chart/Chart';
import StatisticsDashboard from 'components/StatisticsDashboard/StatisticsDashboard';
import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const StatisticsTab = () => {
  const [categories, setCategories] = useState([]);
  const [isOpenMonth, setIsOpenMonth] = useState(false);
  const [isOpenYear, setIsOpenYear] = useState(false);
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
        <Chart dataDoughnut={dataDoughnut} />
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
export const StatisticDivMain = styled.div`
  background: #101010;
  color: white;
  width: 803px;
  height: 827px;
  position: relative;
  &::after {
    content: '';
    width: 893px;
    height: 901px;
    border-radius: 901px;
    background: linear-gradient(
      220deg,
      rgba(109, 84, 235, 0.6) 28.31%,
      rgba(101, 35, 146, 0.6) 66.76%
    );
    filter: blur(200px);
    position: absolute;
    left: 300px;
    top: 200px;
  }
  &::before {
    content: '';
    width: 893px;
    height: 901px;
    border-radius: 366.105px;
    background: #302e8e;

    filter: blur(150px);
    position: absolute;
    left: 650px;
    bottom: 500px;
  }
`;
export const StatisticDivChart = styled.div`
  position: relative;
  &::after {
    content: '';
    width: 330px;
    height: 333px;
    border-radius: 333px;
    background: #6d1c77;
    position: absolute;
    left: 200px;
    bottom: 0;

    filter: blur(150px);
  }
`;
export const StatisticTitle = styled.h2`
  color: var(--white, #fbfbfb);
  text-align: left;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
