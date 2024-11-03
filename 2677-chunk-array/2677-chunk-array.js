/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function(arr, size) {
    if (!Array.isArray(arr) || arr.length === 0) return [];
    const arrayChunked = [];
    
    for (let i = 0; i < arr.length; i += size) {
        arrayChunked.push(arr.slice(i,i + size));
    }
    
    return arrayChunked;
};
