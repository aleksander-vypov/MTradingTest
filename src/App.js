import React, { useState, useMemo } from 'react';
import MainContainer from './components/MainContainer';
import MobileContainer from './components/MobileContainer';
import testData from './FakeApi/input.json';

function getRandomTraders(min, max, tradersArray) {
  let result = [];
  for (let i = 0; result.length < 4; i += 1) {
    const randomindex = Math.floor(Math.random() * (max - min) + min);
    const notDublicate = !result.find(
      (el) => el.name === tradersArray[randomindex].name
    );
    if (notDublicate) {
      result.push(tradersArray[randomindex]);
    }
  }
  result.sort((a, b) => b.monthly_profit - a.monthly_profit);
  return result;
}

function App() {
  const [data, setData] = useState(testData);

  const bestTraders = useMemo(
    () => getRandomTraders(0, data.length - 1, data),
    []
  );

  const [currentTrader, setCurrentTrader] = useState(bestTraders[0]);

  const pageWidth = document.documentElement.scrollWidth;

  const props = { bestTraders, currentTrader, setCurrentTrader };

  return (
    <div>
      {pageWidth < 500 ? (
        <MobileContainer {...props} />
      ) : (
        <MainContainer {...props} />
      )}
    </div>
  );
}

export default App;
