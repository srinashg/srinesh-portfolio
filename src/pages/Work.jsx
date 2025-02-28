import React from 'react';
import NavigationBar from '../components/NavigationBar';
import '../styles/Work.css'; // Import CSS for Work page

const Work = () => {
  return (
    <div className='work-page'>
      <h1>Work</h1>
      <p>This is the Work section of my portfolio.</p>
      <NavigationBar />
    </div>
  );
};

export default Work;