/**
 * @param {number[]} nums
 * @return {boolean}
 */
const hasTrailingZeros = function(nums) {
    let count = 0;              

    for (const num of nums) {
        if ((num & 1) === 0) {  
            count++;
            
            if (count >= 2) {   
                return true;
            }
        }
    }

    
    return false;
};