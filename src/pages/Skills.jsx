import React from 'react';
import NavigationBar from '../components/NavigationBar';
import '../styles/Skills.css'; // Import CSS for Skills page

const Skills = () => {
  return (
    <div className='skills-page'>
      <h1>Skills</h1>
      <NavigationBar />
      <p>Here are my Skills.</p>
    </div>
  );
};

export default Skills;