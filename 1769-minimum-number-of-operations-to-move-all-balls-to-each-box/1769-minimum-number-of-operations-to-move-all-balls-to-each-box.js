/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = function(boxes) {
    const n = boxes.length;
    const answer = Array(n).fill(0);

    let leftCount = 0;
    let leftSum = 0; 
    for (let i = 0; i < n; i++) {
        answer[i] += leftSum; 
        if (boxes[i] === '1') {
            leftCount++;
        }
        
        leftSum += leftCount; 
    }

    let rightCount = 0;
    let rightSum = 0;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] += rightSum;
        if (boxes[i] === '1') {
            rightCount++; 
        }
        
        rightSum += rightCount;
    }

    return answer;
};