// The node we'll use for the singly linked list
class SLLNode {
    constructor(val) {
        this.value = val; // Holds a value for this node
        this.next = null; // Points to the next node in the value
    }
}
// Demonstration of creating two nodes
var myNode = new SLLNode(10);
var myNode2 = new SLLNode(20);

console.log(myNode);
// Connect the two nodes
myNode.next = myNode2;
console.log(myNode);

// The singly linked class itself
class SLL {
    constructor() {
        this.head = null; // Start with an empty list
    }

    // Add a node to the front of the list
    addNodeToFront(val) {
        var newNode = new SLLNode(val); // Create a new node
        // Long version
        if (this.head == null) { // If the list is empty
            this.head = newNode;
        } else { // If we have at least one node
            newNode.next = this.head; // Connect the new node to the list
            this.head = newNode; // Move the head of the list to the new node
        }
        return this; // Allows for chaining

        
        // // Short version
        // if (this.head != null) { // If there is at least one node
        //     newNode.next = this.head;
        // }
        // this.head = newNode;
        // return this;

        // // Even simpler version, suggested by Julian Sunn:
        // newNode.next = this.head;
        // this.head = newNode;
        // return this;
    }
}

// Testing with one, then 2 nodes
var mySLL = new SLL();
mySLL.addNodeToFront(10);
console.log(mySLL);
mySLL.addNodeToFront(20);
console.log(mySLL);
console.log(mySLL.head.next);