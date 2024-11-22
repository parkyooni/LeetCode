/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const findMode = function(root) {
    if (!root) return [];

    let prev = null; 
    let count = 0; 
    let maxCount = 0;
    let modes = [];

    const inOrderTraversal = (node) => {
        if (!node) return;

        inOrderTraversal(node.left);

        if (prev === node.val) {
            count++;
        } else {
            count = 1;
        }
        prev = node.val;

        if (count > maxCount) {
            maxCount = count;
            modes = [node.val]; 
        } else if (count === maxCount) {
            modes.push(node.val); 
        }

        inOrderTraversal(node.right);
    };

    inOrderTraversal(root);

    return modes;
};



