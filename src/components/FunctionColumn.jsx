import React from 'react';
import './FunctionColumn.css';

const FunctionColumn = ({ functions, userMatches, selectedFunction, onSelectFunction }) => {
  return (
    <div className="function-column">
      <h2>Математичні функції</h2>
      <p className="instruction">Виберіть функцію, потім натисніть на відповідний графік</p>
      <div className="function-list">
        {functions.map((func) => {
          const isMatched = userMatches[func.id] !== undefined && userMatches[func.id] !== null;
          const isSelected = selectedFunction?.id === func.id;
          
          return (
            <button
              key={func.id}
              className={`function-item ${isSelected ? 'selected' : ''} ${isMatched ? 'matched' : ''}`}
              onClick={() => onSelectFunction(func)}
              disabled={isMatched}
            >
              <span className="equation">{func.equation}</span>
              {isMatched && <span className="checkmark">✓</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FunctionColumn;

