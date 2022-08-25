import React from 'react';
import TradersCard from './TradersCard';
import { styles } from '../style';
function TradersList(props) {
  const { traders, setCurrentTrader, currentTrader } = props
  const logTraderData = (data) => {
    setCurrentTrader(data)
    console.log(data);
  };

  return (
    <div style={styles.listContainer}>
      <ul style={styles.ul}>
        {traders.map((el, index) => (
          <li onClick={() => logTraderData(el)} key={el.name} style={styles.li}>
            <TradersCard
              currentTrader={currentTrader}
              name={el.name}
              mounthProfit={el.monthly_profit}
              flag={el.flag}
              number={index}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TradersList;
