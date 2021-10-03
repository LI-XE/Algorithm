// 'use strict' - if you want the syntax to be exact, put this at the beginning
var x = 10, y = true, z = -5.12389742317;
var b;
var x1;

// Arrays
var myArr = []; // Empty array
var myArr2 = [1, 3, 4, 8, 5, true, -3.5, [3, 5, 7]];
console.log(myArr2[0]); // Get 1
console.log(myArr2[7]); // Print [3, 5, 7]

console.log(myArr2[7][1]); // Give us the value 5 from the array [3, 5, 7]

myArr.push(10); // myArr = [10]
myArr.push(15); // myArr = [10, 15]
myArr.push(25); // myArr = [10, 15, 25]
var poppedItem = myArr.pop(); // Removes and returns the last item in the array; myArr = [10, 15]
console.log(poppedItem); // Print 25

console.log(myArr.length); // Print 2 here - 2 items in the array

// Object
var myObj = {
    'number': 10,
    'food': 'pizza',
    'name': 'Adrian',
    'array1': [1, 2, 3],
    'anotherObject': {
        'color': 'blue',
        'car': 'Corvette'
    }
}

// Two ways to grab the value from a key in an object
console.log(myObj.number);
console.log(myObj['name']);

var pickedKey = 'food';
console.log(myObj[pickedKey]);
// NOTE: myObj.pickedKey will NOT work

// Accessing values in nested objects
console.log(myObj.anotherObject.car);
console.log(myObj['anotherObject']['color']);

console.log('name' in myObj); // 'key' in objectName - checks to see if the key is in the object

console.log(Object.keys(myObj)); // Prints an array of keys found in myObj

// Can use Object.values(myObj) to access the values as an array

function sayHi(name = "anonymous") { // Using a default value
    console.log("Hi "+name+"!");
}

sayHi("Adrian");
sayHi(); // Will still work - but name = "undefined" since nothing was passed in

function isBetween(value, value1 = -Infinity, value2 = Infinity) {
    return value > value1 && value < value2;
}

console.log(isBetween(10));
console.log(isBetween(10, 5, 8));

// For loops
for (var k = 0; k < 10; k++) {
    console.log(k);
}

//
var z5 = 0;
// Ways to increment and decrement variables
z5++;
z5 += 10;
z5 -= 3;
z5--;
// Can also do *= and /= (rarely used)

if (z5 > 10) { // "&&" for "and" and "||" for "or"
    console.log("z5 is bigger than 10");
} else if (z5 < 5) {
    console.log("z5 is less than 5");
} else {
    console.log("z5 is between 5 and 10");
}

// While loops as well - useful if you don't know how often the code will run

var q = 0;
// Example of a while loop
while (q < 10) {
    q += 3;
    if (q % 2 == 0) {
        q++;
    }
}