import React, { useState, useMemo } from 'react';
import { TradersList, Chart } from './index';
import testData from '../FakeApi/input.json';
import { styles } from './style';

function MainContainer(props) {
  const { bestTraders, currentTrader, setCurrentTrader} = props


  return (
    <div style={styles.mainContainer}>
      <h2>Copy the best masters</h2>
      <div style={styles.mainContent}>
        <TradersList
          traders={bestTraders}
          setCurrentTrader={setCurrentTrader}
          currentTrader={currentTrader}
        />
        <Chart currentTrader={currentTrader} />
      </div>
    </div>
  );
}

export default MainContainer;
