import React from 'react';
import './GraphColumn.css';

const GraphColumn = ({ graphs, selectedFunction, onMatchGraph, userMatches }) => {
  const getMatchedFunctionId = (graphId) => {
    return Object.keys(userMatches).find(
      (functionId) => userMatches[functionId] === graphId
    );
  };

  return (
    <div className="graph-column">
      <h2>Графіки</h2>
      <p className="instruction">Натисніть на графік, який відповідає вибраній функції</p>
      <div className="graph-list">
        {graphs.map((graph) => {
          const matchedFunctionId = getMatchedFunctionId(graph.id);
          const isMatched = matchedFunctionId !== undefined;
          const canSelect = selectedFunction && !isMatched;
          
          return (
            <button
              key={graph.id}
              className={`graph-item ${isMatched ? 'matched' : ''} ${canSelect ? 'selectable' : ''}`}
              onClick={() => canSelect && onMatchGraph(graph.id)}
              disabled={isMatched || !selectedFunction}
            >
              <div className="graph-image-container">
                <img 
                  src={graph.imageUrl} 
                  alt={graph.alt}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="graph-placeholder" style={{ display: 'none' }}>
                  <span>Graph {graph.id}</span>
                </div>
              </div>
              {isMatched && <span className="checkmark">✓</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GraphColumn;

