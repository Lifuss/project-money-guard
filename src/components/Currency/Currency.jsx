import React from 'react';

const data = [
  {
    currencyCodeA: 840,
    currencyCodeB: 980,
    date: 1697144473,
    rateBuy: 36.44,
    rateCross: 0,
    rateSell: 37.4406,
  },
  {
    currencyCodeA: 978,
    currencyCodeB: 980,
    date: 1697144473,
    rateBuy: 38.64,
    rateCross: 0,
    rateSell: 39.7504,
  },
  {
    currencyCodeA: 978,
    currencyCodeB: 840,
    date: 1697144473,
    rateBuy: 1.051,
    rateCross: 0,
    rateSell: 1.065,
  },
  {
    currencyCodeA: 826,
    currencyCodeB: 980,
    date: 1697144811,
    rateBuy: 0,
    rateCross: 46.164,
    rateSell: 0,
  },
];

const Currency = () => {
  const rateUSD = data.find(obj => obj.currencyCodeA === 840);
  const rateEUR = data.find(obj => obj.currencyCodeA === 978);
  const rateBuyUSD = rateUSD.rateBuy.toFixed(2);
  const rateSellUSD = rateUSD.rateSell.toFixed(2);
  const rateBuyEUR = rateEUR.rateBuy.toFixed(2);
  const rateSellEUR = rateEUR.rateSell.toFixed(2);

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
