const removeDigit = function(number, digit) {
  const nums = number.split("");
  let maxResult = "";
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === digit) {
      const newNums = [...nums];
      newNums.splice(i,1);
      
      const result = newNums.join("");
      if (result > maxResult) {
        maxResult = result;
      }
    } 
  }
  
  return maxResult || "";
};
