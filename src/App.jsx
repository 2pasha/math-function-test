import React, { useState, useEffect } from 'react';
import TestInterface from './components/TestInterface';
import { useAttempts } from './hooks/useAttempts';
import { generateRandomTest } from './utils/testGenerator';
import { FUNCTIONS_PER_TEST } from './constants';
import functionsData from './data/functions.json';
import './App.css';

function App() {
  const {
    hasReachedLimit,
    incrementAttempt,
  } = useAttempts();

  // Generate random test with 10 functions and all 15 graphs
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

  return (
      <div className="app">
      <header className="app-header">
        <h1>Підібрати математичній функції її графік</h1>
      </header>
      
      <main className="app-main">
        <TestInterface
          functions={testData.functions}
          graphs={testData.graphs}
          hasReachedLimit={hasReachedLimit}
          onSubmit={handleSubmit}
        />
      </main>
      
      <footer className="app-footer">
        <p>© 2025 Підбір математичних функцій</p>
      </footer>
    </div>
  );
}

export default App;
