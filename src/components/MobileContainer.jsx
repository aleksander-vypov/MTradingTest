import React, { useState, useMemo } from 'react';
import { TradersList, Button, Chart } from './index';
import TradersCard from './TradersList/TradersCard';
import { ChartComponent } from './Chart/ChartComponent';
import { styles } from './style';

function MobileContainer(props) {
  const { bestTraders, currentTrader } = props;
  return (
    <div style={styles.mobile.mainContainer}>
      {bestTraders.map((el, index) => {

        const data = el.chart
                  .map((item, i) => ({
                    time: `2022-12-${i + 1}`,
                    value: item,
                  }))
                  .slice(0, 30)
        return (
          <div style={styles.mobile.card} key={el.name}>
            <div>
              <TradersCard
                isMobile={true}
                currentTrader={currentTrader}
                name={el.name}
                mounthProfit={el.monthly_profit}
                flag={el.flag}
                number={index}
              />
            </div>
            <div style={styles.mobile.chartContainer}>
              <ChartComponent
                isMobile={true}
                data={data}
              ></ChartComponent>
            </div>
            <Button/>
          </div>
        );
      })}
    </div>
  );
}

export default MobileContainer;
