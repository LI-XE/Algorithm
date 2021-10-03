// The node we'll use for the singly linked list
class SLLNode {
    constructor(val) {
        this.value = val; // Holds a value for this node
        this.next = null; // Points to the next node in the value
    }
}
// // Demonstration of creating two nodes
// var myNode = new SLLNode(10);
// var myNode2 = new SLLNode(20);

// console.log(myNode);
// // Connect the two nodes
// myNode.next = myNode2;
// console.log(myNode);

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

    //Method: returns true if the given value can be found in the linked list, and false otherwise
    findValue(val){
        var runner = this.head;   // Start runner off at the start of the list
        while(runner != null){  // Loop to go through the list
            // Check to see whether the value is found
            if(runner.value == val){
                return true;  // Value found, so return true
            }
            runner = runner.next;
        }
        return false;  // Value not found return false
    }

    // //    5 -> 10 -> 15
    // var mySLL = new SLL();
    // // console.log(mySLL);
    // mySLL.addNodeToFront(15);
    // // console.log(mySLL);
    // mySLL.addNodeToFront(10).addNodeToFront(5);
    // // console.log(mySLL);
    // console.log(mySLL.findValue(15));


    // Length of the list
    // Time: O(n) - traverse entire list
    // Space: O(1) - variables need same space (runner is a pointer - need same space; count takes same space) 
    length() {
        var runner = this.head; // Starts us off at the start of the list
        var count = 0; // Keeps track of the number of nodes we've found so far in our list
        // Traverse the list
        while (runner != null) {
            count++; // Node found - increment the count
            runner = runner.next; // Move the runner to the next node (or to null - end of the list)
        }
        return count;
    }

    // Add a node to the END of the list
    // Time: O(n) - loop through entire list
    // Space: O(1) - variables take same amount of space (runner is a pointer - need same space; newNode takes same space)  
    addNodeToBack(val) {
        var newNode = new SLLNode(val); // Create a new node
        if (this.head == null) { // Edge case: list is empty
            this.head = newNode;
            // Alternately, could type this.addNodeToFront(val);
        } else { // At least one node from the list from before
            var runner = this.head; // Starts us off at the start of the list
            // Move the runner to the last node in the list - NOT past it
            while (runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode; // Link end of list to the new node
        }
        return this;
    }
}

// Testing with one, then 2 nodes
var mySLL = new SLL();
console.log(mySLL.length());
mySLL.addNodeToBack(40);
console.log(mySLL.length());
// console.log(mySLL);
mySLL.addNodeToBack(30);
// console.log(mySLL);
console.log(mySLL.length());
mySLL.addNodeToBack(50);
console.log(mySLL.length());
console.log(mySLL.head);
console.log(mySLL.head.next);
console.log(mySLL.head.next.next);

// Random method
// Time: O(n) - loop through entire array
// Space: O(1) - variables take same amount of space (value for each)
function randomness(arr) {
    var something = arr[0];
    for (var k = 1; k < arr.length; k++) {
        if (arr[k] > something) {
            something = arr[k];
        }
    }
    return something;
}

/* Big O notation is used to determine the amount of time and space you need for a method or algorithm to run.  If the size
of the input affects the amount of time it takes, it'll take O(n) - or O(something with n) time.  If you create variables like
arrays and objects whose space will depend on the size of the input, that is O(n) space.  If the variables take the same amount
of space regardless of the size of the inputs, that's O(1), or constant, space.  Same idea with time - if the amount of time
doesn't depend on the inputs, that's O(1), or constant, time.
*/


/* Reverse a singly linked list

Given a list's head, reverse the list. Do NOT use a second linked list data structure. 
YOu MAY NOT changes the values of the nodes - you may only rearrange the nodes themselves.
When the list is reversed, return the head of the list.
*/

/*
<-- 1 <-- 2 <-- 3 <-- head
1. Go through each node. Have the .next (pointer) go the other direction.
2. Once we're done reversing the list, move the head to the original end of the list.
*/

function reverseSLL(someSLL){
    var runner = someSLL.head;  // NOT this.head since this method is outside the SLL class
    var prevRunner = null;
    while ( runner != null && prevRunner != runner){
        if (runner.next != null){  // If we're NOT at the end of the original list, move the head down
            someSLL.head = runner.next;
        }
        runner.next = prevRunner;
        prevRunner = runner;
        runner = someSLL.head;
    }

    return someSLL;  // Return the reversed list
}


var mySLL = new SLL();
mySLL.addNodeToBack(1).addNodeToBack(2).addNodeToBack(3);
reverseSLL(mySLL);
console.log(mySLL);
// console.log(mySLL.head.next.next);