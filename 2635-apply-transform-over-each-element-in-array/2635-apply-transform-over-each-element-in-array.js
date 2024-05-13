/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function(arr, fn) {
    const returnedArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        returnedArray[i] = fn(arr[i],i);
    }

    return returnedArray;  
};