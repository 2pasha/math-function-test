import { shuffleArray } from './scoring';

/**
 * Generates a randomized test with 10 functions and all 15 graphs
 * @param {Array} allFunctions - All available functions
 * @param {Array} allGraphs - All available graphs
 * @param {number} functionsCount - Number of functions to include in the test (should be 10)
 * @returns {Object} - Object with selected functions and all graphs shuffled
 */
export const generateRandomTest = (allFunctions, allGraphs, functionsCount) => {
  // Shuffle and select N random functions (10 out of 15)
  const shuffledFunctions = shuffleArray(allFunctions);
  const selectedFunctions = shuffledFunctions.slice(0, functionsCount);
  
  // Use ALL 15 graphs (shuffled for random order)
  const allTestGraphs = shuffleArray([...allGraphs]);
  
  // Shuffle the functions as well for different order
  const shuffledSelectedFunctions = shuffleArray(selectedFunctions);
  
  return {
    functions: shuffledSelectedFunctions,
    graphs: allTestGraphs,
  };
};

