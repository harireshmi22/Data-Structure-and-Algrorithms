
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a new node at the end of the list
    addLast(data) {
        const newNode = new Node(data);

        // If this.head is equal to null then this.head link with newNode; 
        if (this.head === null) {

            this.head = newNode;

        } else {

            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = newNode;
        }
    }

    // Method to add a new node at the beginning of the list
    addFirst(data) {
        // Create a node then connect in the 
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Method to delete a node by value
    deleteByValue(data) {

        if (this.head === null) {
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Method to find the length of the list
    findLength() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    // Method to print the list
    printList() {
        let current = this.head;
        while (current !== null) {
            process.stdout.write(current.data + " -> ");
            current = current.next;
        }
        console.log("null");
    }
}

// Example usage
const llist = new LinkedList();
llist.addLast(1);
llist.addLast(3);
llist.addLast(5);
//llist.prepend(0);
//llist.deleteByValue(3);

console.log("Length of the linked list is: " + llist.findLength());
llist.printList();
