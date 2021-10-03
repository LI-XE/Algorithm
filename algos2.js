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

    // Check to see if the list contains a value - return true if so, false if not
    contains(val) {
        var runner = this.head; // Start off at the beginning of the list
        while (runner != null) {
            // If the value at the current node matches the value we're looking for, return true
            if (runner.value === val) { // "3" vs 3 -> == returns true; === returns false (compares value and type)
                return true;
            } else { // Value doesn't match, so we'll move on to the next node in the list
                runner = runner.next;
            }
        }
        return false; // Value not found
    }
}


function moveMinToFrontSLL(someSLL) {
    if (someSLL.head == null || someSLL.head.next == null) { // Edge cases: list is empty or only has one node
        return someSLL;
    }
    // Another problem that could arise: multiple occurrences of the minimum value - won't demo
    // that here since the code would get MUCH messier

    // 1. Find the minimum value first
    // 2. Go through the list again; connect the previous node to the next node after the minimum
    // 3. Take the node that has a minimum and point it to the head of the list
    // 4. Move the head to the minimum

    var minVal = someSLL.head.value; // Start minimum at the beginning of the list
    // var minCount = 1; // Keeps count of the number of occurrences of the minimum
    // Loop through the list to find the minimum
    var runner = someSLL.head.next; // Start runner at the SECOND node
    while (runner != null) {
        if (runner.value < minVal) { // If new minimum found
            minVal = runner.value; // Make this new minimum
            // minCount = 1; // Reset count
        // } else if (runner.value == minVal) { // If same minimum found again
            // minCount++; // Increment count
        }
        runner = runner.next; // Moves to the next node in the list
    }
    runner = someSLL.head; // Runner that is at the node before the next runner...
    var minRunner = someSLL.head.next; // This is the runner that will point to the minimum
    // Loop for locating the minimum node - NOTE that if it's at the beginning, nothing will happen
    // since it's already at the start of the list 
    while (runner.next != null) {
        // If minimum node found, move the node to the start and reconnect the other nodes
        if (minRunner.value == minVal) {
            runner.next = minRunner.next;
            minRunner.next = someSLL.head;
            someSLL.head = minRunner;
            break;
        }
        // Moves the runners next
        runner = runner.next;
        minRunner = minRunner.next;
    }
    return someSLL;
}

var mySLL = new SLL();
// console.log(mySLL.contains(2));
mySLL.addNodeToFront(2);
// console.log(mySLL.contains(2));
mySLL.addNodeToBack(1);
mySLL.addNodeToBack(4);
mySLL.addNodeToBack(10);
mySLL.addNodeToBack(5);
mySLL.addNodeToBack(3);

moveMinToFrontSLL(mySLL);
console.log(mySLL);
console.log(mySLL.head.next);
// console.log(mySLL.head.next.next);
// console.log(mySLL.head.next.next.next);
// console.log(mySLL.head.next.next.next.next);
