class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// * Iterative Methods to print the preorder Traversal 
function preorderTraversal(root) {
    if (root === null) return;

    let result = [];
    let stack = [root];

    while (stack.length > 0) {
        let node = stack.pop();
        result.push(node.data);

        if (node.right !== null) {
            stack.push(node.right);
        }

        if (node.left !== null) {
            stack.push(node.left)
        }
    }
    return result;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(preorderTraversal(root)); 