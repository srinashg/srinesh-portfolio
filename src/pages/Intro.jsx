import React from 'react';
import NavigationBar from '../components/NavigationBar';

const Intro = () => {
  return (
    <div>
      <h1>Intro</h1>

      <div className = "bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <p>
          Hi! I'm Srinesh. I'm currently a senior at The University of Texas at Dallas studying Software Engineering.
          I'm passionate about full-stack software development, cloud computing, amd AI. I've previously taken on 2 Software Engineering
          internships and worked on several projects, where I explored the inner workings of various applications.
        </p>
        <p>I'm looking forward to continuing to learn and grow in this exciting, ever-evolving field of software engineering.</p>
      </div>

      <NavigationBar />
    </div>
  );
};

export default Intro;