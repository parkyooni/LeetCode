/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function(mat, r, c) {
    if (mat.length * mat[0].length !== r * c) return mat;
    
    const flattenedMatrix = mat.flat();
    const currentRow = [];

    return flattenedMatrix.reduce((reshapedMatrix, value) => {
        currentRow.push(value); 
        
        if (currentRow.length === c) {
            reshapedMatrix.push([...currentRow]); 
            currentRow.length = 0; 
        }
        
        return reshapedMatrix;
    }, []);
};


