class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function deletNode(root, key) {
    if (!root) return null;

    if (key < root.data) {
        // If the key to be deleted is smaller than the root's key, then it lies in the left subtree
        root.left = deletNode(root.left, key);
    } else if (key > root.data) {
        // If the key to be deleted is greater than the root's key, then it lies in the right subtree
        root.right = deletNode(root.right, key);
    }
    else {
        // Node to be deleted is found
        if (!root.left) {
            // Node with only one child or no child 
            return root.right;
        } else if (!root.right) {
            // Node with only one child or no child            
            return root.left;
        }

        // Node with two children: Get the in-order successor (smallest in the right subtree)
        root.data = minValue(root.right);

        // Delete the in-order successor 
        root.right = deletNode(root.right, root.data);
    }

    return root;
}

function minValue(node) {
    let current = node;
    while (current.left) {
        current = current.left;
    }
    return current.data;
}

// Example Usage: 
// Construct the BST from the example 
const root = new Node(5);
root.left = new Node(3);
root.right = new Node(6);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.right.right = new Node(7);

// Delete node with key = 3 
const updatedRoot = deletNode(root, 3);
console.log(updatedRoot); 