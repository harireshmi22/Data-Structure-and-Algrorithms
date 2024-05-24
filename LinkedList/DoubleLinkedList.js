class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const new_node = new Node(data);
        if (this.head === null) {
            this.head = new_node; // head
            this.tail = new_node; // tail
        } else {
            this.tail.next = new_node;
            new_node.prev = this.tail; // tail
            this.tail = new_node;
        }
    }

    prepend(data) {
        const new_node = new Node(data);
        if (this.head === null) {
            this.head = new_node;
            this.tail = new_node;
        } else {
            new_node.next = this.head;
            this.head.prev = new_node;
            this.head = new_node;
        }
    }

    deleteByValue(data) {

        if (this.head === null) {
            return;
        }

        let currentNode = this.head;
        if (this.head === this.tail) {
            this.tail = null
        } else {
            this.head.next.prev = null;
        }

        this.head = this.head.next;
        currentNode.next = null;

        let current = this.tail;
        if (current === this.tail) {
            this.head = null;
        } else {
            this.tail.prev.next = null;
        }

        this.tail = this.tail.prev;
        current.prev = null;
        return;
    }

    displayForward() {
        let values = [];
        let current = this.head;
        while (current !== null) {
            values.push(current.data);
            current = current.next;
        }
        return values;
    }

    displayBackward() {
        let values = [];
        let current = this.tail;
        while (current !== null) {
            values.push(current.data);
            current = current.prev;
        }
        return values;
    }
}

// Example usage:
const list = new DoubleLinkedList();

// Append nodes
list.append(1);
list.append(2);
list.append(3);
list.deleteByValue(2);

// Display list forward
console.log("List displayed forward:");
console.log(list.displayForward()); // Output: [1, 2, 3]

// Display list backward
console.log("List displayed backward:");
console.log(list.displayBackward()); // Output: [3, 2, 1]
