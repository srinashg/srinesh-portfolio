import React from 'react';
import NavigationBar from '../components/NavigationBar';
import '../styles/Contact.css'; // Import CSS for Contact page

const Contact = () => {
  return (
    <div className='contact-page'>
      <h1>Contact</h1>
      <NavigationBar />
      <p>Contact me here!</p>
    </div>
  );
};

export default Contact;