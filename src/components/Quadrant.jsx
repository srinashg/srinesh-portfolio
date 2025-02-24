import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quadrant = ({ color, section }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const baseStyle = {
    width: '100%',
    height: '200px', /* Adjust height as needed */
    border: '2px solid white',
    backgroundColor: 'darkgray',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    boxSizing: 'border-box', /* Include padding and border in element's total width and height */
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