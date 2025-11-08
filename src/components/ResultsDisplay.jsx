import React from 'react';
import './ResultsDisplay.css';

const ResultsDisplay = ({ validationResult, onRetry, canRetry }) => {
  const { score, correctCount, totalQuestions, results } = validationResult;

  const getScoreClass = () => {
    if (score >= 80) return 'excellent';
    if (score >= 60) return 'good';
    if (score >= 40) return 'average';
    return 'needs-improvement';
  };

  return (
    <div className="results-display">
      <div className="results-header">
        <h2>Результати тесту</h2>
        <div className={`score-display ${getScoreClass()}`}>
          <div className="score-number">{score}%</div>
          <div className="score-fraction">
            {correctCount} з {totalQuestions} правильних
          </div>
        </div>
      </div>

      <div className="results-details">
        <h3>Детальні результати</h3>
        <div className="results-list">
          {results.map((result) => (
            <div 
              key={result.functionId} 
              className={`result-item ${result.isCorrect ? 'correct' : 'incorrect'}`}
            >
              <div className="result-equation">{result.equation}</div>
              <div className="result-status">
                {result.isCorrect ? (
                  <span className="status-icon correct">✓</span>
                ) : (
                  <span className="status-icon incorrect">✗</span>
                )}
                <span className="status-text">
                  {result.isCorrect ? 'Правильно' : 'Неправильно'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="results-actions">
        {canRetry ? (
          <button className="retry-button" onClick={onRetry}>
            Спробувати ще раз
          </button>
        ) : (
          <div className="no-attempts-message">
            <p>Ви використали всі свої спроби.</p>
            <p className="hint">Очистіть дані браузера, щоб скинути лічильник.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsDisplay;

