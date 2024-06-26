class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function preorderTraversal(root) {
    if (root === null) return;

    console.log(root.data + " ");
    preorderTraversal(root.left);
    preorderTraversal(root.right);
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5); 

preorderTraversal(root); 