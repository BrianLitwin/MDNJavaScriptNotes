#### Declarations 

There are three kinds of declarations in JavaScript: 
* `var`: Declares a variable, optionally initializing it to a value 
* `let`: Declares a block-scoped, local variable, optionality initializing it to a value; 
* `const`: Declares a block-scoped, read-only named constant. 

A variable declared using the var or let statement with no assigned value specified has the value of `undefined`.
An attempt to access an undeclared variable results in a ReferenceError exception being thrown. 
You can use `undefined` to determine whether a variable has a value.
The `undefined` value behaves as `false` when used in a boolean context, and converts to `NaN` when used in a numeric context 
When you evaluate a null variable, the null value behaves as 0 in numeric contexts and as false in boolean contexts. 

```javascript 

var a;
console.log(a); // logs undefined

var n = null; 
console.log(n + 2) // logs 0 

console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

let x;
console.log('The value of x is ' + x); // The value of x is undefined

console.log('The value of b is ' + b); // The value of b is undefined
var b;

var c; // is undefined 
console.log(c + 2) // evaluated to NaN 
```
a variable declared using `var` within a block is local to the function (or global scope) that the block resides within. A
`let` variable is local to the block in which it is defined


```
if (true) {
var x = 5;
}
console.log(x);  // x is 5

if (true) {
let y = 5;
}
console.log(y);  // ReferenceError: y is not defined
```

#### Variable Hoisting 

In JavaScript you can refer to a variable declared later, without getting an exception. This is called **hoisting**: variables in JavaScript are in a sense "hoisted" or lifted to the top of the function or statement. However, variables that are hoisted return a value of undefined. So even if you declare and initialize after you use or refer to this variable, it still returns undefined.

```javascript 
/**
 * Example 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = 'my value';
 
(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();
```

For functions, only the function declaration gets hoisted to the top and not the function expression.

#### Global Variables 
Global variables are in fact properties of the global object. In web pages, the global object is window, so you can set and access global variables using the window.variable syntax.

#### Constants 

The scope rules for constants are the same as those for let block-scope variables.
You cannot declare a constant with the same name as a function or variable in the same scope. 
The properties of objects assigned to constants are not protected, nor are the contents of an array. So the following compile fine: 

```
const myArray = [1,2]
myArray.push(3)

const myObject = { 'key' : 'v' };
myObject.key = 6; 

```

#### Data Structures and Types 

#### Data Types 

The latest ECMAScript standard defines seven data types: 
six data types are primitives, and the last, Object, is not: 
* Boolean 
* null 
* undfined 
* Number 
* String 
* Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable 
* Object 

#### Type Conversion 

##### Literals 

If an array is created using a literal in a top-level script, JavaScript interprets the array each time it evaluates the expression containing the array literal. In addition, a literal used in a function is created each time the function is called.

#### Boolean Types 

The Boolean type has two literal values: true and false.

Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object. The Boolean object is a wrapper around the primitive Boolean data type. 

#### String Literals 

You can call any of the methods of the String object on a string literal value—JavaScript automatically converts the string literal to a temporary String object, calls the method, then discards the temporary String object. You can also use the String.length property with a string literal

You should use string literals unless you specifically need to use a String object.
