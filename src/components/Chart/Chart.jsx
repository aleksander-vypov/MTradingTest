import React from 'react';
import { styles } from '../style';
import Button from '../Button';
import { ChartComponent } from './ChartComponent';

function Chart(props) {
  const { currentTrader } = props;

  const initialData = currentTrader.chart.map((el, index) => ({
    time: `2022-12-${index+1}`,
    value: el
  })).slice(0, 30);

  return (
    <div style={styles.chart.container}>
      <div style={styles.chart.head}>
        <div>
          <p style={styles.chart.p}>Mounthly profit</p>{' '}
          {currentTrader.monthly_profit}%
        </div>
        <div>
          <p style={styles.chart.p}>Total profit</p>{' '}
          {currentTrader.total_profit}%
        </div>
        <div>
          <p style={styles.chart.p}>In managment</p> {currentTrader.capital} USD
        </div>
        <Button />
      </div>
      <ChartComponent {...props} data={initialData}></ChartComponent>
    </div>
  );
}

export default Chart;
