import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sections = ['intro', 'work', 'skills', 'contact'];
  const currentSectionIndex = sections.indexOf(location.pathname.slice(1));

  const goToPrevious = () => {
    if (currentSectionIndex > 0) {
      navigate(`/${sections[currentSectionIndex - 1]}`);
    } else {
      navigate('/'); // Go to homepage from Intro
    }
  };

  const goToNext = () => {
    if (currentSectionIndex < sections.length - 1) {
      navigate(`/${sections[currentSectionIndex + 1]}`);
    } else {
      navigate('/'); // Loop back to homepage from Contact if needed, or handle differently
    }
  };

  const goToHomepage = () => {
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}> {/* Center buttons */}
      <button onClick={goToPrevious} disabled={currentSectionIndex <= 0}>Previous</button>
      <button onClick={goToHomepage} style={{ margin: '0 10px' }}>Homepage</button> {/* Add spacing between buttons */}
      <button onClick={goToNext} disabled={currentSectionIndex >= sections.length - 1}>Next</button>
    </div>
  );
};

export default NavigationBar;