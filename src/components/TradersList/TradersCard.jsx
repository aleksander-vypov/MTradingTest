import React, { useState, useEffect } from 'react';
import { styles } from '../style';

function TradersCard(props) {
  const { flag, name, mounthProfit, number, currentTrader, isMobile } = props;

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (currentTrader.name === name) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [currentTrader]);

  return (
    <div
      style={
        active && !isMobile
          ? { ...styles.tradersCard.main, backgroundColor: '#F5F7F9' }
          : styles.tradersCard.main
      }
    >
      <div style={styles.tradersCard.imageBox}>
        <img style={styles.tradersCard.img} src={flag} />
      </div>
      <div style={styles.tradersCard.content}>
        <p style={styles.tradersCard.name}>{`${number + 1}. ${name}`}</p>
        <p style={styles.tradersCard.profit}>{`+${mounthProfit}%`}</p>
      </div>
    </div>
  );
}

export default TradersCard;
