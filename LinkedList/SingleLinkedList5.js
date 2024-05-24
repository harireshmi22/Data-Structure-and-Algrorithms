

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// function pushNode(head_ref, data_val) {

//     let new_Node = new Node(data_val);
//     new_Node.next = head_ref[0];
//     head_ref[0] = new_Node;
// }

// function getMiddle(head) {

//     let values = [];

//     // Traverse through the entire linked list and push all the values into the array
//     while (head !== null) {
//         values.push(head.data);
//         head = head.next;
//     }

//     // Find the middle index
//     let midIndex = Math.floor(values.length / 2);

//     // Return the value stored at the middle index
//     return values[midIndex];

// }

// let head = [null];

// // Push nodes into the linked list in reverse order
// for (let i = 5; i > 0; i--) {
//     pushNode(head, i);
// }

// // Print the middle value of the linked list
// console.log("Middle Value Of Linked List is :", getMiddle(head[0]));


/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/


/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution {
    /* Should return data of middle node. If linked list is empty, then  -1*/
    getMiddle(node) {
        if (node === null) return -1;

        let slow = node;
        let fast = node;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow.data;
    }
}

// Example usage:
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Creating the linked list 1->2->3->4->5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let solution = new Solution();
console.log(solution.getMiddle(head));  // Output: 3

// Creating the linked list 2->4->6->7->5->1
let head2 = new Node(2);
head2.next = new Node(4);
head2.next.next = new Node(6);
head2.next.next.next = new Node(7);
head2.next.next.next.next = new Node(5);
head2.next.next.next.next.next = new Node(1);

console.log(solution.getMiddle(head2));  // Output: 7
