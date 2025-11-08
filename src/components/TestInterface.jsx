import React, { useState } from 'react';
import FunctionColumn from './FunctionColumn';
import GraphColumn from './GraphColumn';
import AttemptsTracker from './AttemptsTracker';
import ResultsDisplay from './ResultsDisplay';
import { validateMatches, areAllMatched } from '../utils/scoring';
import './TestInterface.css';

const TestInterface = ({ 
  functions, 
  graphs, 
  attemptCount, 
  maxAttempts, 
  remainingAttempts,
  onSubmit,
  onRetry
}) => {
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [userMatches, setUserMatches] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [validationResult, setValidationResult] = useState(null);

  const handleSelectFunction = (func) => {
    setSelectedFunction(func);
  };

  const handleMatchGraph = (graphId) => {
    if (!selectedFunction) {
      return;
    }

    setUserMatches({
      ...userMatches,
      [selectedFunction.id]: graphId,
    });

    // Clear selection after matching
    setSelectedFunction(null);
  };

  const handleSubmit = () => {
    if (!areAllMatched(userMatches, functions)) {
      alert('Будь ласка, підберіть усі функції до їх графіків перед відправкою.');
      return;
    }

    const result = validateMatches(userMatches, functions);
    setValidationResult(result);
    setShowResults(true);
    onSubmit(); // Increment attempt count
  };

  const handleRetry = () => {
    setUserMatches({});
    setSelectedFunction(null);
    setShowResults(false);
    setValidationResult(null);
    onRetry(); // Trigger test regeneration in parent
  };

  const allMatched = areAllMatched(userMatches, functions);

  if (showResults && validationResult) {
    return (
      <ResultsDisplay
        validationResult={validationResult}
        onRetry={handleRetry}
        canRetry={remainingAttempts > 0}
      />
    );
  }

  return (
    <div className="test-interface">
      <AttemptsTracker
        currentAttempt={attemptCount}
        maxAttempts={maxAttempts}
        remainingAttempts={remainingAttempts}
      />

      <div className="test-content">
        <FunctionColumn
          functions={functions}
          userMatches={userMatches}
          selectedFunction={selectedFunction}
          onSelectFunction={handleSelectFunction}
        />

        <GraphColumn
          graphs={graphs}
          selectedFunction={selectedFunction}
          onMatchGraph={handleMatchGraph}
          userMatches={userMatches}
        />
      </div>

      <div className="test-actions">
        <button
          className="submit-button"
          onClick={handleSubmit}
          disabled={!allMatched}
        >
          Відправити відповіді
        </button>
        {!allMatched && (
          <p className="submit-hint">
            Підберіть усі функції до їх графіків для відправки
          </p>
        )}
      </div>
    </div>
  );
};

export default TestInterface;

