import React, { useRef, useState } from 'react';
import '../styles/Homepage.css'; {/* Corrected CSS import path with '../styles' */}
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const playAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsAudioPlaying(false);
      } else {
        audioRef.current.play();
        setIsAudioPlaying(true);
        audioRef.current.onended = () => {
          setIsAudioPlaying(false);
        };
      }
    }
  };

  return (
    <div className="homepage">
      <div className="simon-circle">
        {/* Center Circle */}
        <div className="center-circle">
          <button className={`power-button ${isAudioPlaying ? 'power-button-playing' : ''}`} onClick={playAudio}>
            Play
          </button>
          <div className="center-text">
            <b>Srinesh Ganesh</b> {/* Corrected name to "Srinesh Ganesh" */}
          </div>
          <audio ref={audioRef} src="/assets/audio/website-description.mp3" preload="auto"></audio>
        </div>

        {/* Quadrants */}
        <div className="quadrant quadrant-intro" onClick={() => navigate('/intro')}>
          <div className="quadrant-text">About</div>
        </div>
        <div className="quadrant quadrant-work" onClick={() => navigate('/work')}>
          <div className="quadrant-text">Work</div>
        </div>
        <div className="quadrant quadrant-skills" onClick={() => navigate('/skills')}>
          <div className="quadrant-text">Skills</div>
        </div>
        <div className="quadrant quadrant-contact" onClick={() => navigate('/contact')}>
          <div className="quadrant-text">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;