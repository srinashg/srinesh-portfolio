import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Quadrant.css'; // Import Quadrant-specific CSS

const Quadrant = ({ color, section, quadrantPosition }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const baseStyle = {
    backgroundColor: 'darkgray',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    boxSizing: 'border-box',
  };

  const hoveredStyle = {
    ...baseStyle,
    backgroundColor: color,
  };

  const handleClick = () => {
    navigate(`/${section.toLowerCase()}`);
  };

  return (
    <div
      className={`quadrant ${quadrantPosition}`} // Add quadrantPosition as class
      style={isHovered ? hoveredStyle : baseStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {section}
    </div>
  );
};

export default Quadrant;