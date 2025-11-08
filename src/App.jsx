import React, { useState, useEffect } from 'react';
import TestInterface from './components/TestInterface';
import { useAttempts } from './hooks/useAttempts';
import { generateRandomTest } from './utils/testGenerator';
import { FUNCTIONS_PER_TEST } from './constants';
import functionsData from './data/functions.json';
import './App.css';

function App() {
  const {
    attemptCount,
    hasReachedLimit,
    remainingAttempts,
    incrementAttempt,
    resetAttempts,
    maxAttempts,
  } = useAttempts();

  // Generate random test with N functions and N+2 graphs
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    const generatedTest = generateRandomTest(
      functionsData.functions,
      functionsData.graphs,
      FUNCTIONS_PER_TEST
    );
    setTestData(generatedTest);
  }, []);

  const handleSubmit = () => {
    incrementAttempt();
  };

  const handleRetry = () => {
    // Generate a new random test for retry
    const generatedTest = generateRandomTest(
      functionsData.functions,
      functionsData.graphs,
      FUNCTIONS_PER_TEST
    );
    setTestData(generatedTest);
  };

  // Show loading while test is being generated
  if (!testData) {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Підбір математичних функцій</h1>
          <p className="subtitle">Завантаження тесту...</p>
        </header>
      </div>
    );
  }

  if (hasReachedLimit) {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Підбір математичних функцій</h1>
          <p className="subtitle">Підберіть функції до їх графіків</p>
        </header>
        
        <main className="app-main">
          <div className="limit-reached-message">
            <div className="limit-icon">🔒</div>
            <h2>Досягнуто максимум спроб</h2>
            <p>Ви використали всі {maxAttempts} спроби для цього тесту.</p>
            <p className="hint">
              Щоб скинути ваші спроби, очистіть локальне сховище браузера або використайте інший браузер.
            </p>
            <button className="reset-button" onClick={resetAttempts}>
              Скинути всі спроби (тільки для налагодження)
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
      <div className="app">
      <header className="app-header">
        <h1>Підбір математичних функцій</h1>
        <p className="subtitle">Підберіть функції до їх графіків</p>
      </header>
      
      <main className="app-main">
        <TestInterface
          functions={testData.functions}
          graphs={testData.graphs}
          attemptCount={attemptCount}
          maxAttempts={maxAttempts}
          remainingAttempts={remainingAttempts}
          onSubmit={handleSubmit}
          onRetry={handleRetry}
        />
      </main>
      
      <footer className="app-footer">
        <p>© 2025 Підбір математичних функцій</p>
      </footer>
    </div>
  );
}

export default App;
