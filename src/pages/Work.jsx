import React from 'react';
import NavigationBar from '../components/NavigationBar';
import '../styles/Work.css'; // Import CSS for Work page

const Work = () => {
  return (
    <div className='work-page'>
      <h1>Work Experience</h1>
      <NavigationBar />
      <p>
        <img src="/assets/usaa.png" alt="USAA Logo" style={{ width: '60px', height: 'auto', marginLeft: '5px', marginBottom: '5px', verticalAlign: 'middle' }} />
        <b>&ensp;Software Engineer Intern @ USAA</b> (May 2024 - Jul 2024)<br></br>
        -&emsp;Increased auto claims handling efficiency by over 20% by providing observability about the health and performance of each API of the Guidewire Claims Recovery System.
        <br></br>
        -&emsp;Contributed towards the recovery of $2.1B in salvage and subrogation claims processes by implementing application performance and anomaly monitors to detect and resolve API issues.
        <br></br><br></br>

        
        <img src="/assets/fidelity-logo.png" alt="Fidelity Logo" style={{ width: '60px', height: 'auto', marginLeft: '5px', marginBottom: '5px', verticalAlign: 'middle' }} />
        <b>&ensp;Software Engineer Intern @ Fidelity Investments</b> (Jun 2023 - Aug 2023)<br></br>
        -&emsp;Prevented unauthorized access to root contexts in Kubernetes’s Open Policy Agent (OPA) pods by identifying and mitigating 10+ OPA security vulnerabilities and applying Principle of Least Privilege.
        <br></br>
        -&emsp;Resolved Maven application execution privilege issues by configuring dockerfiles to allow non-root users to run applications.
        <br></br>
        -&emsp;Completed assigned stories punctually within each sprint by utilizing Agile development methodologies, such as maintaining sprint backlogs and story estimations on Jira.
        <br></br><br></br>
        
        <img src="/assets/mathnasium.png" alt="Mathnasium Logo" style={{ width: '60px', height: 'auto', marginLeft: '5px', marginBottom: '5px', verticalAlign: 'middle' }} />
        <b>&ensp;Math Instructor @ Mathnasium</b> (Jul 2022 - Sep 2022)<br></br>
        -&emsp;Increased auto claims handling efficiency by over 20% by providing observability about the health and performance of each API of the Guidewire Claims Recovery System.
        <br></br>
        -&emsp;Contributed towards the recovery of $2.1B in salvage and subrogation claims processes by implementing application performance and anomaly monitors to detect and resolve API issues.
      </p>
    </div>
  );
};

export default Work;