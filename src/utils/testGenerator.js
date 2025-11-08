import { shuffleArray } from './scoring';

/**
 * Generates a randomized test with N functions and N+2 graphs
 * @param {Array} allFunctions - All available functions
 * @param {Array} allGraphs - All available graphs
 * @param {number} functionsCount - Number of functions to include in the test
 * @returns {Object} - Object with selected functions and graphs
 */
export const generateRandomTest = (allFunctions, allGraphs, functionsCount) => {
  // Shuffle and select N random functions
  const shuffledFunctions = shuffleArray(allFunctions);
  const selectedFunctions = shuffledFunctions.slice(0, functionsCount);
  
  // Get the correct graphs for selected functions
  const correctGraphIds = selectedFunctions.map(func => func.graphId);
  const correctGraphs = allGraphs.filter(graph => correctGraphIds.includes(graph.id));
  
  // Get potential decoy graphs (graphs not used by selected functions)
  const availableDecoys = allGraphs.filter(graph => !correctGraphIds.includes(graph.id));
  
  // Select 2 random decoy graphs
  const shuffledDecoys = shuffleArray(availableDecoys);
  const selectedDecoys = shuffledDecoys.slice(0, 2);
  
  // Combine correct graphs with decoys and shuffle
  const allTestGraphs = shuffleArray([...correctGraphs, ...selectedDecoys]);
  
  // Shuffle the functions as well for different order
  const shuffledSelectedFunctions = shuffleArray(selectedFunctions);
  
  return {
    functions: shuffledSelectedFunctions,
    graphs: allTestGraphs,
  };
};

