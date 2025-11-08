/**
 * Validates user matches against correct answers
 * @param {Object} userMatches - Object mapping functionId to graphId
 * @param {Array} functions - Array of function objects with correct graphId
 * @returns {Object} - Validation results with score and details
 */
export const validateMatches = (userMatches, functions) => {
  const results = [];
  let correctCount = 0;

  functions.forEach((func) => {
    const userGraphId = userMatches[func.id];
    const isCorrect = userGraphId === func.graphId;
    
    if (isCorrect) {
      correctCount++;
    }

    results.push({
      functionId: func.id,
      equation: func.equation,
      userGraphId,
      correctGraphId: func.graphId,
      isCorrect,
    });
  });

  const totalQuestions = functions.length;
  const score = totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;

  return {
    results,
    correctCount,
    totalQuestions,
    score: Math.round(score),
    percentage: score.toFixed(1),
  };
};

/**
 * Checks if all functions have been matched
 * @param {Object} userMatches - Object mapping functionId to graphId
 * @param {Array} functions - Array of function objects
 * @returns {boolean}
 */
export const areAllMatched = (userMatches, functions) => {
  return functions.every((func) => userMatches[func.id] !== undefined && userMatches[func.id] !== null);
};

/**
 * Shuffles an array randomly
 * @param {Array} array - Array to shuffle
 * @returns {Array} - Shuffled array
 */
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

