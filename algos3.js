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

function filterNodes(someSLL, minVal, maxVal) {
    if (someSLL.head == null) {
        return null;
    }
    // Loop that will filter out nodes at the beginning of the list
    if (someSLL.head.value < minVal || someSLL.head.value > maxVal) {
        while (someSLL.head != null && (someSLL.head.value < minVal || someSLL.head.value > maxVal)) {
            someSLL.head = someSLL.head.next;
        }
    }
    if (someSLL.head == null) {
        return someSLL;
    }
    // Loop that will filter out nodes after the head of the list - so basically after we have the head point
    // to the first node that will stay
    var prevRunner = someSLL.head, curRunner = someSLL.head.next;
    while (curRunner != null) {
        // console.log("Previous runner =",prevRunner);
        // console.log("Current runner =",curRunner);
        if (curRunner.value < minVal || curRunner.value > maxVal) {
            prevRunner.next = curRunner.next;
            curRunner.next = null;
            curRunner = prevRunner.next; // Moves this pointer
        } else {
            prevRunner = curRunner;
            curRunner = curRunner.next;
        }
    }
    return someSLL;
}

var randomSLL = new SLL();
randomSLL.addNodeToBack(10).addNodeToBack(4).addNodeToBack(7).addNodeToBack(8).addNodeToBack(5);
filterNodes(randomSLL, 5, 8);