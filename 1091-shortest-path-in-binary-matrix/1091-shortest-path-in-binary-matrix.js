const shortestPathBinaryMatrix = function (grid) {
    const gridSize = grid.length;

    if (grid[0][0] !== 0 || grid[gridSize - 1][gridSize - 1] !== 0) return -1;

    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1],
        [-1, -1], [-1, 1], [1, -1], [1, 1],
    ];

    const queue = [[0, 0, 1]];
    grid[0][0] = 1;

    const isValid = (r, c) => r >= 0 && c >= 0 && r < gridSize && c < gridSize && grid[r][c] === 0;

    while (queue.length) {
        const [row, col, pathLength] = queue.shift();

        if (row === gridSize - 1 && col === gridSize - 1) return pathLength;

        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;

            if (isValid(newRow, newCol)) {
                queue.push([newRow, newCol, pathLength + 1]);
                grid[newRow][newCol] = 1; 
            }
        }
    }

    return -1;
};