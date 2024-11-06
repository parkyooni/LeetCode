/**
 * @param {string} s
 * @return {number}
 */
const minChanges = function(s) {
    if (typeof s !== 'string' || s.length % 2 !== 0) return;
    
    let count = 0;
    for (let i = 0; i < s.length; i += 2) {
        if (s[i] !== s[i + 1]) count++;
    }
    
    return count;
};

