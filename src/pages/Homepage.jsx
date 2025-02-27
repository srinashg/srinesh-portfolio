import React from 'react';
import Quadrant from '../components/Quadrant';
import './styles/Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="simon-container">
        <Quadrant color="green" section="Intro" quadrantPosition="top-left" />
        <Quadrant color="red" section="Work" quadrantPosition="top-right" />
        <Quadrant color="yellow" section="Skills" quadrantPosition="bottom-left" />
        <Quadrant color="blue" section="Contact" quadrantPosition="bottom-right" />
        <div className="center-text">
          <div>Srinesh Ganesh</div>
          <div>Software Engineer</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;