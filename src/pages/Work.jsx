import React from 'react';
import NavigationBar from '../components/NavigationBar';
import '../styles/Work.css'; // Import CSS for Work page

const Work = () => {
  return (
    <div className='work-page'>
      <h1>Work Experience</h1>
      <NavigationBar />
      <p>
        <p className="work">
          <img src="/assets/usaa.png" alt="USAA Logo" style={{ width: '60px', height: 'auto', marginLeft: '5px', marginBottom: '5px', verticalAlign: 'middle' }} />
          <b>&ensp;Software Engineer Intern @ USAA</b> (May 2024 - Jul 2024)
        </p>

        <p className="work">
          <img src="/assets/fidelity-logo.png" alt="Fidelity Logo" style={{ width: '60px', height: 'auto', marginLeft: '5px', marginBottom: '5px', verticalAlign: 'middle' }} />
          <b>&ensp;Software Engineer Intern @ Fidelity Investments</b> (Jun 2023 - Aug 2023)
        </p>
        
        <p className="work">
          <img src="/assets/mathnasium.png" alt="Mathnasium Logo" style={{ width: '60px', height: 'auto', marginLeft: '5px', marginBottom: '5px', verticalAlign: 'middle' }} />
          <b>&ensp;Math Instructor @ Mathnasium</b> (Jul 2022 - Sep 2022)
        </p>
      </p>
    </div>
  );
};

export default Work;