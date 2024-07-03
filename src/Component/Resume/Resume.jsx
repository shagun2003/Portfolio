import React from 'react';
import './Resume.css';

export const Resume = () => {
  const handleButtonClick = () => {
    // Redirecting to the URL
    window.open('https://drive.google.com/file/d/17bRlkE4aweGT3DH-jxdTccYMV_x_bW5U/view?usp=sharing', '_blank');
  };

  return (
    <div>
      <h3>To View My Resume, Click the Given Link Below</h3>
      {/* Button to replace the anchor tag */}
      <button onClick={handleButtonClick} className="resume-button">Click here</button>
    </div>
  );
};
