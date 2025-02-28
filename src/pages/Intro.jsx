import React from 'react';
import NavigationBar from '../components/NavigationBar';
import '../styles/Intro.css'; // Import CSS for Intro page

const Intro = () => {
  return (
    <div className='intro-page'>
      <h1>Intro</h1>
      <NavigationBar />
      <p>
          Hi! I'm Srinesh. I'm currently a senior at The University of Texas at Dallas studying Software Engineering.
          I'm passionate about full-stack software development, cloud computing, and AI. I've previously taken on 2 Software Engineering
          internships and worked on several projects, where I explored the inner workings of various applications.
          I'm looking forward to continuing to learn and grow in this exciting, ever-evolving field of software engineering.<br></br><br></br>

          In my free time, I like to hang out with friends, play video games, and experiment with photography.
      </p>
    </div>
  );
};

export default Intro;