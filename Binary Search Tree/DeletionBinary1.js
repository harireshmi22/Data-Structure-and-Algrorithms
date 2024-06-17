class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function deleteNode(root, key) {
    if (!root) return null;

    if (key < root.val) {
        // If the key to be deleted is smaller than the root's key, then it lies in the left subtree
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        // If the key to be deleted is greater than the root's key, then it lies in the right subtree
        root.right = deleteNode(root.right, key);
    } else {
        // Node to be deleted is found
        if (!root.left) {
            // Node with only one child or no child
            return root.right;
        } else if (!root.right) {
            // Node with only one child or no child
            return root.left;
        }

        // Node with two children: Get the in-order successor (smallest in the right subtree)
        root.val = minValue(root.right);

        // Delete the in-order successor
        root.right = deleteNode(root.right, root.val);
    }
    return root;
}

function minValue(node) {
    let current = node;
    while (current.left) {
        current = current.left;
    }
    return current.val;
}

// Example Usage:
// Construct the BST from the example
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(7);

// Delete node with key = 3
const updatedRoot = deleteNode(root, 3);
console.log(updatedRoot);
