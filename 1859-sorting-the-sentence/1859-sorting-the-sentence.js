/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = function(s) {
    const sortedWords = s.split(' ').sort((a, b) => a[a.length - 1] - b[b.length - 1]);
    return sortedWords.map(word => word.slice(0, -1)).join(' ');
};