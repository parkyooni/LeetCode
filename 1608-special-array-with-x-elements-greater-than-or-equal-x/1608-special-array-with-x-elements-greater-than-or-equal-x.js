/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function(nums) {
    const num = nums.length;

    for (let x = 0; x <= num; x++) {
        const count = nums.filter(item => item >= x).length;

        if (count === x) {
            return x; 
        }
    }

    return -1; 
};