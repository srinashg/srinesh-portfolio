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
        <b>&ensp;Software Engineer Intern @ USAA</b> (May 2024 - Jul 2024)
        <br/>
        -&emsp;Increased auto claims handling efficiency by over 20% by providing observability about the health and performance of each API of the Guidewire Claims Recovery System.
        <br/>
        -&emsp;Contributed towards the recovery of $2.1B in salvage and subrogation claims processes by implementing application performance and anomaly monitors to detect and resolve API issues.
        <br/><br/>

        <img src="/assets/fidelity-logo.png" alt="Fidelity Logo" style={{ width: '60px', height: 'auto', marginLeft: '5px', marginBottom: '5px', verticalAlign: 'middle' }} />
        <b>&ensp;Software Engineer Intern @ Fidelity Investments</b> (Jun 2023 - Aug 2023)
        <br/>
        -&emsp;Prevented unauthorized access to root contexts in Kubernetes’s Open Policy Agent (OPA) pods by identifying and mitigating 10+ OPA security vulnerabilities and applying Principle of Least Privilege.
        <br/>
        -&emsp;Resolved Maven application execution privilege issues by configuring dockerfiles to allow non-root users to run applications.
        <br/>
        -&emsp;Completed assigned stories punctually within each sprint by utilizing Agile development methodologies, such as maintaining sprint backlogs and story estimations on Jira.
        <br/><br/>
        
        <img src="/assets/mathnasium.png" alt="Mathnasium Logo" style={{ width: '60px', height: 'auto', marginLeft: '5px', marginBottom: '5px', verticalAlign: 'middle' }} />
        <b>&ensp;Math Instructor @ Mathnasium</b> (Jul 2022 - Sep 2022)
        <br/>
        -&emsp;Delivered exceptional tutoring services by tailoring math instruction to meet the unique learning needs of primary and secondary students, resulting in an average 15% improvement in their math skills.
        <br/>
        -&emsp;Utilized Mathnasium's proprietary curriculum and assessment tools to identify gaps in students' math knowledge and provided targeted interventions to address those gaps effectively.
        <br/>
        -&emsp;Collaborated with parents to provide regular progress updates and discuss strategies for continued improvement, ensuring a strong partnership between Mathnasium and families.
      </p>
    </div>
  );
};

export default Work;