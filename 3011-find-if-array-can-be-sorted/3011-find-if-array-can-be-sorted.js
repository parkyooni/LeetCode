/**
 * @param {number[]} nums
 * @return {boolean}
 */

const canSortArray = function(nums) {
  const numberArray = nums.map(Number);
  const countSetBits = (num) => num.toString(2).split('1').length - 1;

  const numberGroups = [];
  for(let num of numberArray) {
      const value = countSetBits(num);
      if(numberGroups.some((index) => index.value !== value && index.num > num)) {
          return false;
      }

      if(!numberGroups.some((index) => index.num === num)) {
          numberGroups.push({num, value});
      }
  }
  
  return true;
};