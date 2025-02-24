import React from 'react';
import Quadrant from '../components/Quadrant';

const Homepage = () => {
  return (
    <div>
      <h1>Srinesh's Portfolio</h1>
      <div className="quadrant-container">
        <Quadrant color="green" section="Intro" />
        <Quadrant color="red" section="Work" />
        <Quadrant color="yellow" section="Skills" />
        <Quadrant color="blue" section="Contact" />
      </div>
    </div>
  );
};

export default Homepage;