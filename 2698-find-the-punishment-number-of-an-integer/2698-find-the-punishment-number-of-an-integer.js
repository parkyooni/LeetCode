/**
 * @param {number} n
 * @return {number}
 */
const punishmentNumber = function(n) {
    const canPartition = (target, squareStr, start = 0) => {
        if (start === squareStr.length) {
            return target === 0;
        }

        let currentNum = 0; 
        for (let end = start; end < squareStr.length; end++) {
            
            currentNum = currentNum * 10 + Number(squareStr[end]);
            if (currentNum > target) break; 
            
            if (canPartition(target - currentNum, squareStr, end + 1)) {
                return true; 
            }
        }
        
        return false; 
    };

    let punishmentSum = 0; 
    for (let i = 1; i <= n; i++) {
        const square = i * i; 
        
        const squareStr = square.toString(); 
        if (canPartition(i, squareStr)) {
            punishmentSum += square;
        }
    }
    
    return punishmentSum; 
};

