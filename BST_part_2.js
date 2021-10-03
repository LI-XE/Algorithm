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

    // The number of nodes total in the tree
    size(curNode = this.root) { // By default, the starting node will be the root of the tree
        /* To get the size of tree, 
        Count the nodes to the left
        Count the nodes to the right
        Count the current node
        Add them together
        */
        if (curNode == null) { // Base case: we don't have a node
            return 0;
        } else { // At least one node - includes the current node
            return 1 + this.size(curNode.left) + this.size(curNode.right);
        }
    }

    // List all the nodes in order: left recursively, current node, right recursively
    inOrderTraversal(curNode = this.root, arr = []) {
        if (curNode != null) {
            this.inOrderTraversal(curNode.left, arr); // Push all values to the left
            arr.push(curNode.value); // Push the current node's value
            this.inOrderTraversal(curNode.right, arr); // Push all values to the right
        }
        // We hit this point regardless of if there are nodes to look at
        return arr; // Return array
    }

    // List all the nodes in order: current node, left recursively, right recursively
    preOrderTraversal(curNode = this.root, arr = []) {
        if (curNode != null) {
            arr.push(curNode.value); // Push the current node's value
            this.preOrderTraversal(curNode.left, arr); // Push all values to the left
            this.preOrderTraversal(curNode.right, arr); // Push all values to the right
        }
        // We hit this point regardless of if there are nodes to look at
        return arr; // Return array
    }

    // List all the nodes in order: left recursively, right recursively, current node
    postOrderTraversal(curNode = this.root, arr = []) {
        if (curNode != null) {
            this.postOrderTraversal(curNode.left, arr); // Push all values to the left
            this.postOrderTraversal(curNode.right, arr); // Push all values to the right
            arr.push(curNode.value); // Push the current node's value
        }
        // We hit this point regardless of if there are nodes to look at
        return arr; // Return array
    }
}

var myBST = new BST(); // Starts us off with an empty tree
// console.log(myBST);
myBST.add(20);
// console.log(myBST);
myBST.add(5);
// console.log(myBST);
myBST.add(40);
// console.log(myBST);
myBST.add(30);
console.log(myBST.size());
console.log(myBST.inOrderTraversal());
console.log(myBST.preOrderTraversal());
console.log(myBST.postOrderTraversal());
// console.log(myBST);
// console.log(myBST.root.right);