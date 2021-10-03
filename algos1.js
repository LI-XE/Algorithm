/*

Count Non-Spaces
Accept a string and return the number of non-space characters found in the string. 

For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

*/

function countNonspaces(str) {
    /* Pseudocode:
    Variables needed: count (# of characters that aren't spaces)
    Start at the beginning of the string.
    Check each character.  This will be a for loop.
    If that character is not a space, add to the count 
    how many non-space characters have been found.
    Once the string is finished, we'll return the count (number of nonspace characters).
    */
    var count = 0; // Initialize the count to 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] != " ") { // str.charAt(i) also works
            count++; // Increment count (not a space)
        }
    }
    return count;
}

console.log(countNonspaces("Honey pie, you are driving me crazy"));

console.log(countNonspaces("  Hello!   I'm Adrian  "));

console.log(countNonspaces("")); // Edge case - empty string

console.log(countNonspaces("            ")); // Edge case - all spaces

/*
Min to Front
Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
*/

function minToFront(arr) {
    /*
    Pseudocode:
    Need two variables: the minimum value and the index it occurs
    Look for the minimum value - and where it occurs.
    We need to move the values that come before the minimum to the right one place.
    Once that's done, we can put the minimum at the beginning of the array.
    Return the array.
    */

    // Edge case - the array is empty or only has one item, so no need to move anything
    if (arr.length <= 1) {
        return arr;
    }
    var minVal = arr[0], minInd = 0; // Starting values
    for (var k = 1; k < arr.length; k++) { // Start at index 1 since we've already pulled the value at the beginning of the array, so no need to examine index 0 again
        if (arr[k] < minVal) { // If current value is smaller than minimum found
            minVal = arr[k]; // Make this the new minimum
            minInd = k; // Also note where minimum occurs
        }
    }
    // Now move values that came before the minimum to the right
    for (var q = minInd; q > 0; q--) {
        arr[q] = arr[q-1];
    }
    // Insert minimum at front
    arr[0] = minVal;
    return arr;
}

var myArr = [4, 2, 1, 3, 5];
var myArr2 = []; // Edge case: array is empty
var myArr3 = [10]; // Possible edge case: only one value
console.log(minToFront(myArr));
console.log(minToFront(myArr2));
console.log(minToFront(myArr3));
// Bonus challenge on your own: how do you handle duplicates of minima, like [5, 1, 3, 1, 4, 7, 2]?