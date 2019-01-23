#### Function Declarations

A function has three parts: it's name, paramters, and block statement. Its preceded by the `function` keyword 

Primitive parameters are passed to functions by value; non-primitizes (objects, arrays) are passed by reference. 

#### Function Expressions 
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

Function expressions are convenient when passing a function as an argument to another function. For example, 
when creating a function equivalent to the `Map` function, you can do so easily with function expressions. 

A method is a function that is a property of an object. 

#### Calling Functions 

Functions must be in scope when they are called, but the function declaration can be hoisted 
The scope of a function is the function in which it is declared, or the entire program if it is declared at the top level 

Functions are objects, and these objects in turn have methods. 

#### Function Scope 

Variables defined inside a function cannot be accessed from anywhere outside the function, 
because the variable is defined only in the scope of the function. However, a function can 
access all variables and functions defined inside the scope in which it is defined. In 
other words, a function defined in the global scope can access all variables defined in 
the global scope. A function defined inside another function can also access all variables 
defined in its parent function and any other variable to which the parent function has access.

#### SCope and the Function Stack 

There are three ways a function can refer to itself: 
* the function's name 
* arguments.callee
* an in-scope variable that refers to the function 

For example, consider the following function: 
```javascript 
var foo = function bar() { return 1 }
```

Within the function body, the following are all equivalent: 1) foo() 2) bar() 3. arguments.callee()

Recursion is analagous to a loop in the sense that they both require a condition to stop running 
and execute the same code multiple times

For example, the following loop: 
```javascript 
var x = 0
while (x < 9) {
x++;
}
```
could be converted to a recursive function->

```javascript 
function recurse(x) {
if (x >= 9) { return }
recurse(x + 1 )
}
```
