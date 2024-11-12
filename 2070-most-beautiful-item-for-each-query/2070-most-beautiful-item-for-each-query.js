/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
const maximumBeauty = function(items, queries) {
    items.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i + 1 < items.length; i++) {
        items[i + 1][1] = Math.max(items[i + 1][1], items[i][1]);
      
      console.log(items[i + 1][1]);
    }

    const result = [];
    for (const quertItems of queries) {
        const index = findUpperBound(items, quertItems + 1);
        result.push(index > 0 ? items[index - 1][1] : 0);
    }
    
    return result;
}

const findUpperBound = (array, targetValue) => {
    let start = 0
    let end = array.length;
  
    while (start < end) {
        const middle = Math.floor((start + end) / 2);
        if (array[middle][0] < targetValue) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    
    return start;
}