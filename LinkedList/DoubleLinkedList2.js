
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

    addlast(data) {

        const new_node = new Node(data);
        if (this.head === null) {
            this.head = new_node;
            this.tail = new_node;
        } else {

            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = new_node;
            new_node.prev = current;
        }
    }

    addfirst(data) {
        const new_node = new Node(data);
        if (this.head === null) {
            this.head = new_node;
            this.tail = new_node;
        } else {
            this.head.prev = new_node;
            new_node.next = this.head;
            this.head = new_node;
        }
    }

    deleteNode(data) {
        if (this.head === null) {
            return; // List is empty
        }

        let current = this.head;

        // If the node to be deleted is the head node
        if (current.data === data) {
            this.head = current.next;
            if (this.head !== null) {
                this.head.prev = null;
            }
            return;
        }

        // Traverse the list to find the node to delete
        while (current !== null && current.data !== data) {
            current = current.next;
        }

        // If the node was not found
        if (current === null) {
            return;
        }

        // Update the pointers
        if (current.next !== null) {
            current.next.prev = current.prev;
        }
        if (current.prev !== null) {
            current.prev.next = current.next;
        }
    }

    // Display the list
    displayList() {
        let current = this.head;
        let result = [];
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(' '));
    }
}

const list = new DoubleLinkedList();

list.addfirst(4);
list.addfirst(3);
list.addfirst(2);
list.addlast(5);
list.addlast(6); 
list.addlast(7); 

list.deleteNode(7);
list.displayList(); 

// Double linked list 