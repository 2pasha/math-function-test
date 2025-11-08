import { useState, useEffect } from 'react';
import { MAX_ATTEMPTS, STORAGE_KEY } from '../constants';

export const useAttempts = () => {
  const [attemptData, setAttemptData] = useState({
    count: 0,
    lastAttemptDate: null,
    hasReachedLimit: false,
  });

  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        const hasReachedLimit = parsed.count >= MAX_ATTEMPTS;
        setAttemptData({
          count: parsed.count || 0,
          lastAttemptDate: parsed.lastAttemptDate || null,
          hasReachedLimit,
        });
      } catch (error) {
        console.error('Error parsing attempt data:', error);
        setAttemptData({
          count: 0,
          lastAttemptDate: null,
          hasReachedLimit: false,
        });
      }
    }
  }, []);

  const incrementAttempt = () => {
    const newCount = attemptData.count + 1;
    const newData = {
      count: newCount,
      lastAttemptDate: new Date().toISOString(),
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    
    setAttemptData({
      count: newCount,
      lastAttemptDate: newData.lastAttemptDate,
      hasReachedLimit: newCount >= MAX_ATTEMPTS,
    });
  };

  const resetAttempts = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAttemptData({
      count: 0,
      lastAttemptDate: null,
      hasReachedLimit: false,
    });
  };

  const getRemainingAttempts = () => {
    return Math.max(0, MAX_ATTEMPTS - attemptData.count);
  };

  return {
    attemptCount: attemptData.count,
    lastAttemptDate: attemptData.lastAttemptDate,
    hasReachedLimit: attemptData.hasReachedLimit,
    remainingAttempts: getRemainingAttempts(),
    incrementAttempt,
    resetAttempts,
    maxAttempts: MAX_ATTEMPTS,
  };
};

