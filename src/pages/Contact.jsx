import React from 'react';
import NavigationBar from '../components/NavigationBar';
import '../styles/Contact.css'; // Import CSS for Contact page

const Contact = () => {
  return (
    <div className='contact-page'>
      <h1>Contact</h1>
      <p>Contact me here!</p>
      <NavigationBar />
    </div>
  );
};

export default Contact;