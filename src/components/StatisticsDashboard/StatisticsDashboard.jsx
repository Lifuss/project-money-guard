import React, { useState } from 'react';
import { Select, SelectBtn } from './StatisticsDashboard.styled';
const StatisticsDashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('January');
  console.log(selectedMonth);
  return (
    <div
      style={{
        display: 'flex',
        gap: '32px',
      }}
    >
      <div>
        <SelectBtn>
          {selectedMonth}
          {}
        </SelectBtn>
      </div>
      {/* <div class="select">
        <Select id="month-select">
          <Option value="January">January</Option>
          <Option value="February"> February</Option>
          <Option value="March">March</Option>
          <Option value="April"> April</Option>
          <Option value="May">May</Option>
          <Option value="June"> June</Option>
          <Option value="July">July</Option>
          <Option value="August">August</Option>
          <Option value="September">September</Option>
          <Option value="October"> October</Option>
          <Option value="November">November</Option>
          <Option value="December">December</Option>
        </Select>
      </div> */}
      <div class="select">
        <Select id="year-select">
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </Select>
      </div>
    </div>
  );
};

export default StatisticsDashboard;
