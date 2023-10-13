import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Currency = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAndStore = async () => {
      try {
        const response = await axios.get(
          'https://api.monobank.ua/bank/currency'
        );
        const newData = response.data;
        const fetchTime = new Date().getTime();
        localStorage.setItem(
          'MONO',
          JSON.stringify({ data: newData, fetchTime })
        );
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const storedData = localStorage.getItem('MONO');
    if (storedData) {
      const { data, fetchTime } = JSON.parse(storedData);
      const currentTime = new Date().getTime();
      console.log(currentTime);
      console.log(fetchTime);
      if (currentTime - fetchTime < 300000) {
        setData(data);
      } else {
        fetchDataAndStore();
      }
    } else {
      fetchDataAndStore();
    }
  }, []);

  const rateUSD = data?.find(obj => obj.currencyCodeA === 840);
  const rateEUR = data?.find(obj => obj.currencyCodeA === 978);
  const rateBuyUSD = rateUSD?.rateBuy.toFixed(2);
  const rateSellUSD = rateUSD?.rateSell.toFixed(2);
  const rateBuyEUR = rateEUR?.rateBuy.toFixed(2);
  const rateSellEUR = rateEUR?.rateSell.toFixed(2);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            <td>{rateBuyUSD}</td>
            <td>{rateSellUSD}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>{rateBuyEUR}</td>
            <td>{rateSellEUR}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Currency;
