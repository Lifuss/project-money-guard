import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  StyledGradientWave,
  StyledGraphWrapper,
  StyledTable,
  StyledTableWrapper,
  StyledTd,
  StyledTh,
  StyledThead,
  StyledWave,
} from './Currency.styled';

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
    <StyledTableWrapper>
      <StyledTable>
        <StyledThead>
          <tr>
            <StyledTh>Currency</StyledTh>
            <StyledTh>Purchase</StyledTh>
            <StyledTh>Sale</StyledTh>
          </tr>
        </StyledThead>
        <tbody>
          <tr>
            <StyledTd>USD</StyledTd>
            <StyledTd>{rateBuyUSD}</StyledTd>
            <StyledTd>{rateSellUSD}</StyledTd>
          </tr>
          <tr>
            <StyledTd>EUR</StyledTd>
            <StyledTd>{rateBuyEUR}</StyledTd>
            <StyledTd>{rateSellEUR}</StyledTd>
          </tr>
        </tbody>
      </StyledTable>
      <StyledGraphWrapper>
        <StyledWave
          xmlns="http://www.w3.org/2000/svg"
          width="320"
          height="72"
          viewBox="0 0 320 72"
          fill="none"
        >
          <path
            d="M0 48.1232L25.6 30.368C27.8187 28.4332 33.9968 24.5634 40.96 24.5634C47.9232 24.5634 53.4187 27.295 55.296 28.6608L110.08 67.5855C111.616 68.7237 116.326 71 122.88 71C129.434 71 134.144 68.7237 135.68 67.5855L230.4 6.46313C232.789 4.64208 238.08 1 244.736 1C251.392 1 257.365 4.64208 260.096 6.46313L280.576 20.8038C281.941 21.7144 286.208 23.5354 292.352 23.5354C298.496 23.5354 301.818 21.5514 303.104 20.8038C307.586 18.1985 310.805 15.3875 316.416 15.6821C317.137 15.72 318.834 15.8815 320 16.365"
            stroke="#FF868D"
          />
        </StyledWave>
        <StyledGradientWave
          xmlns="http://www.w3.org/2000/svg"
          width="320"
          height="88"
          viewBox="0 0 320 88"
          fill="none"
        >
          <path
            d="M25.6 29.4725L0 47.2908V80C0 84.4183 3.58171 88 7.99999 88H312C316.418 88 320 84.4183 320 80V15.4197C318.834 14.9345 317.137 14.7724 316.416 14.7344C310.805 14.4387 307.586 17.2597 303.104 19.8743L303.048 19.9068C301.724 20.6803 298.409 22.6156 292.352 22.6156C286.208 22.6156 281.941 20.7881 280.576 19.8743L260.096 5.48257C257.365 3.65504 251.392 0 244.736 0C238.08 0 232.789 3.65504 230.4 5.48257L135.68 66.8225C134.144 67.9647 129.434 70.2491 122.88 70.2491C116.326 70.2491 111.616 67.9647 110.08 66.8225L55.296 27.7592C53.4187 26.3886 47.9232 23.6473 40.96 23.6473C33.9968 23.6473 27.8187 27.5308 25.6 29.4725Z"
            // fill="url(#paint0_linear_34_6965)"
            // fill-opacity="0.6"
          />
          <path
            d="M25.6 29.4725L0 47.2908V80C0 84.4183 3.58171 88 7.99999 88H312C316.418 88 320 84.4183 320 80V15.4197C318.834 14.9345 317.137 14.7724 316.416 14.7344C310.805 14.4387 307.586 17.2597 303.104 19.8743L303.048 19.9068C301.724 20.6803 298.409 22.6156 292.352 22.6156C286.208 22.6156 281.941 20.7881 280.576 19.8743L260.096 5.48257C257.365 3.65504 251.392 0 244.736 0C238.08 0 232.789 3.65504 230.4 5.48257L135.68 66.8225C134.144 67.9647 129.434 70.2491 122.88 70.2491C116.326 70.2491 111.616 67.9647 110.08 66.8225L55.296 27.7592C53.4187 26.3886 47.9232 23.6473 40.96 23.6473C33.9968 23.6473 27.8187 27.5308 25.6 29.4725Z"
            // fill="#390096"
            // fill-opacity="0.2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_34_6965"
              x1="160"
              y1="12.95"
              x2="160"
              y2="102.2"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop
                offset="0.374892"
                stop-color="white"
                stop-opacity="0.536458"
              />
              <stop
                offset="0.6091"
                stop-color="white"
                stop-opacity="0.269957"
              />
              <stop
                offset="0.766012"
                stop-color="white"
                stop-opacity="0.151176"
              />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </StyledGradientWave>
      </StyledGraphWrapper>
    </StyledTableWrapper>
  );
};

export default Currency;
