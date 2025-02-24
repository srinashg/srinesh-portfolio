import React from 'react';
import NavigationBar from '../components/NavigationBar';

const Intro = () => {
  return (
    <div>
      <h1>Intro</h1>

      <div className = "bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <p>
          Hi! I'm Srinesh. I'm currently a senior at The University of Texas at Dallas studying Software Engineering.
          I'm passionate about learning the inner and outer workings of software applications. I've taken on 2 Software Engineering internships
          under my belt, and have worked on several projects. I'm excited to continue learning and growing in this field.
        </p>
      </div>

      <NavigationBar />
    </div>
  );
};

export default Intro;