import React from 'react';
import './AttemptsTracker.css';

const AttemptsTracker = ({ currentAttempt, maxAttempts, remainingAttempts }) => {
  const attemptPercentage = (currentAttempt / maxAttempts) * 100;

  return (
    <div className="attempts-tracker">
      <div className="attempts-info">
        <span className="attempts-text">
          Спроба {currentAttempt} з {maxAttempts}
        </span>
        <span className="remaining-text">
          Залишилось {remainingAttempts} {remainingAttempts === 1 ? 'спроба' : remainingAttempts < 5 ? 'спроби' : 'спроб'}
        </span>
      </div>
      <div className="attempts-progress-bar">
        <div 
          className="attempts-progress-fill"
          style={{ width: `${attemptPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default AttemptsTracker;

