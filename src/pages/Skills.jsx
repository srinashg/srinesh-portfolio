import React from 'react';
import NavigationBar from '../components/NavigationBar';
import '../styles/Skills.css'; // Import CSS for Skills page

const Skills = () => {
  return (
    <div className='skills-page'>
      <h1>Projects</h1>
      <NavigationBar />
      <p>
        Below are some of my most interesting projects and the technologies/skills I've used.
        <br/><br/><br/>
        <a href="https://github.com/srinashg/axxess-hackathon-2025" target="_blank" rel="noopener noreferrer"><b>Lillip</b></a><b> (Axxess Hackathon, Feb 2025)</b>
        <br/> Developed an application that provides at-home patients with a personalized exercise and dietary plan to improve their cholesterol levels and their overall health.
        <br/><br/> <em>React.js + Vite, Generative AI</em>
        <br/><br/>

        <a href="https://github.com/srinashg/CS4301Project" target="_blank" rel="noopener noreferrer"><b>DeFi</b></a><b> (Class project, Spring 2024)</b>
        <br/> Developed a decentralized banking system for my Intro to Blockchain (CS 4301) class to provide users with a more convenient, flexible method of banking at home.
        <br/><br/> <em>Solidity, Django, Web3.js</em>
        <br/><br/>

        <a href="https://github.com/bluestarburst/sketch-diff" target="_blank" rel="noopener noreferrer"><b>Paintify</b></a><b> (Artificial Intelligence Society, Spring 2023)</b>
        <br/> Trained a stable diffusion model to generate paintings from a given sketch. It generates a painting of the same type object drawn in the sketch.
        <br/><br/> <em>Python, Jupyter Notebook, AWS, React.js</em>
        <br/><br/><br/><br/>

        For more information, please see my <a href="https://drive.google.com/file/d/1EyNPr5n4o4lbl0-n5EPDCYFp64QjH-cU/view" target="_blank" rel="noopener noreferrer">resume</a>.
      </p>
    </div>
  );
};

export default Skills;