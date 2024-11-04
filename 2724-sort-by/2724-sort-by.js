/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = function(arr, fn) {
    if(typeof fn !== typeof(Number)) return;
    const sortedArr = [...new Set(arr)];

    return sortedArr.sort((a,b) => fn(a) - fn(b));
};