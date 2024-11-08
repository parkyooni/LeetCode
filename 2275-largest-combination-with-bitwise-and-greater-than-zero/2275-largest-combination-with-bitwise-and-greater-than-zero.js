/**
 * @param {number[]} candidates
 * @return {number}
 */
const largestCombination = function(candidates) {
    let maxSubsetSize = 0; 
    
    for (let bitPosition = 0; bitPosition < 32; bitPosition++) { 
        let countOnes = 0;
        for (const number of candidates) {
            if (number & (1 << bitPosition)) countOnes++; 
        }
        maxSubsetSize = Math.max(maxSubsetSize, countOnes); 
    }
    
    return maxSubsetSize;
};

