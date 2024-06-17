class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let root = null;

function BinarySearchTree(root, val) {
    if (!root) {
        return new Node(val);
    }

    if (val < root.data) {
        root.left = BinarySearchTree(root.left, val);
    } else {
        root.right = BinarySearchTree(root.right, val);
    }

    return root;
}

function print(root) {
    if (!root) return;

    print(root.left);
    console.log(root.data);
    print(root.right);

}

let arr = [4, 2, 3, 5, 6, 7];

arr.forEach(val => {
    root = BinarySearchTree(root, val);
})

print(root); 