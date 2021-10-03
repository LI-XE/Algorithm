class BSTNode { // Nodes we'll use for the binary search tree
    constructor(val) {
        this.value = val;
        this.left = null; // Points to all nodes less than this value
        this.right = null; // Points to all nodes bigger than this value
    }
}

class BST { // Binary search tree itself
    constructor() {
        this.root = null; // Start with an empty tree
    }

    // Methods belonging to our BST class will go here.

    // Adds a node with some given value to the BST
    add(val) {
        // Create new node here.
        var newNode = new BSTNode(val);
        if (this.root == null) { // If the tree is empty, make the new node the root node
            this.root = newNode;
            return this; // Allows us to chain commands and exit method early
        } 
        // Start runner off at the top of the tree
        var runner = this.root;
        /*
        We start the runner off at the top of the tree (root).
        Then we'll move down the tree until there is an empty
        spot to put the new node - i.e., .left == null or .right
        == null.
        */
        while (runner != null) {
            if (val < runner.value) { // Move left
                if (runner.left == null) { // If no node to the left
                    runner.left = newNode; // Insert new node there
                    return this; // Exit method
                } else { // There is a node to the left, so move the runner down
                    runner = runner.left;
                }
            } else { // Move right
                if (runner.right == null) { // If no node to the right
                    runner.right = newNode; // Insert new node there
                    return this; // Exit method
                } else { // There is a node to the right, so move the runner down
                    runner = runner.right;
                }
            }
        }
    }
}

var myBST = new BST(); // Starts us off with an empty tree
console.log(myBST);
myBST.add(20);
console.log(myBST);
myBST.add(5);
console.log(myBST);
myBST.add(40);
console.log(myBST);
myBST.add(30);
console.log(myBST);
console.log(myBST.root.right);