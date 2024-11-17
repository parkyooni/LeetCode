const shortestPathBinaryMatrix = function (grid) {
    const n = grid.length;

    if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) return -1;

    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1],
        [-1, -1], [-1, 1], [1, -1], [1, 1],
    ];

    const queue = [[0, 0, 1]];
    grid[0][0] = 1;

    const isWithinBounds = (x, y) => x >= 0 && y >= 0 && x < n && y < n && grid[x][y] === 0;

    while (queue.length) {
        const [currentRow, currentCol, currentPathLength] = queue.shift();

        if (currentRow === n - 1 && currentCol === n - 1) return currentPathLength;

        for (const [dx, dy] of directions) {
            const nextRow = currentRow + dx;
            const nextCol = currentCol + dy;

            if (isWithinBounds(nextRow, nextCol)) {
                queue.push([nextRow, nextCol, currentPathLength + 1]);
                grid[nextRow][nextCol] = 1;
            }
        }
    }

    return -1;
};