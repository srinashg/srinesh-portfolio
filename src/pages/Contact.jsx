import React from 'react';
import NavigationBar from '../components/NavigationBar';
import '../styles/Contact.css'; // Import CSS for Contact page

const Contact = () => {
  return (
    <div className='contact-page'>
      <h1>Contact</h1>
      <NavigationBar />
      <p>
        <p className="contact">
          <img src="/icons/phone.png" alt="Phone" style={{ width: '60px', height: 'auto', marginLeft: '5px', marginBottom: '5px', verticalAlign: 'middle' }} />
          &ensp;(469) 410 - 9165
        </p>

        <p className="contact">
          <img src="/icons/email.png" alt="Email" style={{ width: '60px', height: 'auto', marginLeft: '5px', marginBottom: '5px', verticalAlign: 'middle' }} />
          &ensp;emailtosrinesh@gmail.com
        </p>

        <p className="contact">
          <img src="/icons/linkedin.png" alt="LinkedIn" style={{ width: '60px', height: 'auto', marginLeft: '5px', marginBottom: '5px', verticalAlign: 'middle' }} />
          &ensp;<a href="https://www.linkedin.com/in/srineshg/" target="_blank" rel="noopener noreferrer">linkedin.com/in/srineshg</a>
        </p>

        <p className="contact">
          <img src="/icons/github.png" alt="GitHub" style={{ width: '60px', height: 'auto', marginLeft: '5px', marginBottom: '5px', verticalAlign: 'middle' }} />
          &ensp;<a href="https://github.com/srinashg" target="_blank" rel="noopener noreferrer">github.com/srinashg</a>
        </p>
      </p>
    </div>
  );
};

export default Contact;