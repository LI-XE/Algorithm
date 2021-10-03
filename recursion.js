// Two things to keep in mind with recursion:
// As you call the function, you want to make forward progress towards solving a problem - for each
// recursive call, i.e. when you call the function again - the problem has been simplified.


// Stop the recursion when you reach what's called a "base case"

// Non-recursive version of a countdown
function countdown(n) {
    for (var k = n; k >= 1; k--) {
        console.log(k);
    }
    console.log("Liftoff!!!");
}
// countdown(5);

function rCountdown(n) {
    if (n <= 0) { // Base case
        console.log("Liftoff!");
        return;
    }
    console.log(n);
    rCountdown(n-1); // Recursion: forward progress is that we're decrementing n
}

// rCountdown(5);

/* Factorial: "n!" = 1 * 2 * 3 * 4 * ... * n
0! = 1 (definition) - BASE CASE
1! = 1 = 0! - BASE CASE (maybe)
2! = 2 * 1 = 2 * 1!
3! = 3 * 2 * 1 = 3 * 2!
4! = 4 * 3 * 2 * 1 = 4 * 3!
5! = 5 * 4 * 3 * 2 * 1 = 5 * 4!
*/

function factorial(n) {
    n = Math.floor(n);
    if (n <= 1) {
        return 1;
    } else {
        return n*factorial(n-1);
    }
}

// console.log(factorial(0));

// Find the max value of an array

// Non-recursive version
function findMaxVal(arr) {
    var maxVal = arr[0];
    for (var k = 1; k < arr.length; k++) {
        if (arr[k] > maxVal) {
            maxVal = arr[k];
        }
    }
    return maxVal;
}

// console.log(findMaxVal([5, 8, 2, -4, 11, 7, 8]));

// Recursive version
function rFindMaxVal(arr, ind = 0) {
    if (arr.length == 0) { // Edge case: array is empty - so we add this to prevent stack overflow
        return null; // Arbitrary value picked - I chose "null"
    }
    if (ind == arr.length - 1) { // Base case: reached of array, so return that value for comparison
        // console.log("End of array - returning",arr[arr.length - 1]);
        return arr[arr.length - 1];
    } else { // Compare current value in the array to remainder of the array
        var x = Math.max(arr[ind],rFindMaxVal(arr,ind+1)); // Note the recursion here
        // console.log("Returning",x);
        return x;
    }
}

console.log(rFindMaxVal([1, 5]));