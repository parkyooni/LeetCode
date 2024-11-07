/**
 * @param {number[]} nums
 * @return {boolean}
 */

const canSortArray = function(nums) {
    const numberArray = nums.map(Number);
  
    const countSetBits = (num) => num.toString(2).split('1').length - 1;
  
    for (let i = 0; i < numberArray.length; i ++) {
      if (typeof numberArray[i] !== 'number' || isNaN(numberArray[i])) return false;
      
      for (let j = 1; j < numberArray.length; j ++) {
        if (numberArray[j] < numberArray[j-1]) {
           if(countSetBits(numberArray[j-1]) !== countSetBits(numberArray[j])) return false
          else [numberArray[j - 1], numberArray[j]] = [numberArray[j],numberArray[j -1]]
        }
      }
    }
  
    return true;
};