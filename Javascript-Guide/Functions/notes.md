

Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function.


```javascript 
var a = 1; 

function update(a) {
console.log(a)
a = 2 
update1(a)
console.log(a)
}

function update1(a) {
console.log(a)
a = 5; 
console.log(a)
} 

update(a)
console.log(a)

/* 

prints 1, 2, 3, 2, 1

*/
```

objects are passed by reference when passed in function parameters: 

```javascript
var car = { color: "blue" }

function update(car) {
car.color = "green";
}

console.log(car)

update(car)

console.log(car)
```

```javascript
var a = 1 
var b = a 
var a = 2 
console.log(a, b)

a = { n: "one" }
b = a 
a = { n: "two" }

console.log(a, b)

// prints 2, 1, "two", "one"
```

While the function declaration above is syntactically a statement, functions can also be created by a function expression. Such a function can be anonymous; it does not have to have a name. For example, the function square could have been defined as:

```javascript
var square = function(number) { return number * number; };
var x = square(4); // x gets the value 16
```

However, a name can be provided with a function expression and can be used inside the function to refer to itself, or in a debugger to identify the function in stack traces:

```javascript
var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };
console.log(factorial(3));
```

write the map function 

```javascript
function map(f, array) {
    var returnArray = []; 
    for (var i = 0; i < array.length; i++) {
        returnArray[i] = f(array[i])
    }
    return returnArray; 
}

var array = [1, 2, 3, 5]

function square(i) { return i * i };

var arraySquared = map(square, array)

console.log(arraySquared)

// prints [1, 4, 9, 25]
```

In JavaScript, a function can be defined based on a condition. For example, the following function definition defines myFunc only if num equals 0:

```javascript
var myFunc;
if (num === 0) {
    myFunc = function(theObject) {
        theObject.make = 'Toyota';
    }
}
```

A method is a function that is a property of an object.

Functions must be in scope when they are called, but the function declaration can be hoisted (appear below the call in the code), as in this example:

console.log(square(5));
/* ... */
function square(n) { return n * n; }

function hoisting only works with function declaration and not with function expression.

```javascript
function foo(i) {
    if (i < 0)
        return;
    console.log('begin: ' + i);
    foo(i - 1);
    console.log('end: ' + i);
}
foo(3);

// Output:

// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3
```

Since the inner function forms a closure, you can call the outer function and specify arguments for both the outer and inner function:

```
function outside(x) {
    function inside(y) {
        return x + y;
    }   
    return inside;
}

fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
result = fn_inside(5); // returns 8
result1 = outside(3)(5); // returns 8
```

