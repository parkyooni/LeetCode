/**
 * @param {string} s
 * @return {string}
 */
const clearDigits = function(s) {
  const result = [];
    
  for (let i = 0; i < s.length; i ++) {
    if(isNaN(s[i])) {
      result.push(s[i]);
    } else {
      result.pop();
    }
  }
  
  return result.join('');
};