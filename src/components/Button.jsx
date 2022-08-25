import React, { useState } from 'react';
import { styles } from './style';

function Button(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...styles.button,
        backgroundColor: isHovering ? '#701BC8' : styles.button.backgroundColor,
      }}
    >
      Copy Now
    </button>
  );
}

export default Button;
