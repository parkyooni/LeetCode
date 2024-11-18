/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
function getAllElements(root1, root2) {
    function traverseInOrder(node, sortedArray) {
        if (!node) return; 
        traverseInOrder(node.left, sortedArray); 
        sortedArray.push(node.val);             
        traverseInOrder(node.right, sortedArray);
    }

    const sortedTree1 = [];
    const sortedTree2 = [];

    traverseInOrder(root1, sortedTree1);
    traverseInOrder(root2, sortedTree2);

    const mergedArray = [];
    let index1 = 0
    let index2 = 0;

    while (index1 < sortedTree1.length && index2 < sortedTree2.length) {
        if (sortedTree1[index1] < sortedTree2[index2]) {
            mergedArray.push(sortedTree1[index1]);
            index1++;
        } else {
            mergedArray.push(sortedTree2[index2]);
            index2++;
        }
    }

    while (index1 < sortedTree1.length) {
        mergedArray.push(sortedTree1[index1]);
        index1++;
    }
    while (index2 < sortedTree2.length) {
        mergedArray.push(sortedTree2[index2]);
        index2++;
    }

    return mergedArray; 
}