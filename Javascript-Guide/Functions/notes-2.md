#### Function Declarations

A function has three parts: it's name, parameters, and block statement. Its preceded by the `function` keyword 

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

The function call-stack: 

```javascript
function foo() {
if (x >= 0) {
console.log("begin: " + x)
foo(x - 1) 
console.log("end: " + x)
}

/*
begin 3 
begin 2
begin 1
begin 0 
end 0 
end 1
end 2
end 3
*/ 
```

#### Nested Functions and Closures 

You can nest a function within a function. The nexted (inner) function is private to its containing function. 
It also forms a closure. A closure is an expression (typically a function) that can have free variables 
together with an environment that binds those variables (that closes the expression) 

Since a nested function is a closure, this means the nested function can "inherit" the arguments and variables of 
its containing function. In other words the inner function contains the scope of the outer function. 

The inner function can be accessed only from statements in the outer function. 
The inner function forms a closure: the inner function can use the arguments and variables of the outer function, 
while the outer function cannot use the arguments and variables of the inner function. 

The following example shows nested functions: 
```javascript 
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41
```

Since the inner function forms a closure, you can call the outer function and specify arguments for both the outer 
and inner functions. 

```javascript 
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
                        // it
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8

```

#### Preservation of Variables 

Notice how x is preserved when inside is returned. A closure must preserve the arguments and variables in all scopes it references. Since each call provides potentially different arguments, a new closure is created for each call to outside. The memory can be freed only when the returned inside is no longer accessible.

This is not different from storing references in other objects, but is often less obvious because one does not set the references directly and cannot inspect them

#### Multiply-nested functions

-

#### Name-conflicts 

ordered according to scope-chain 

#### Closures 

Since the inner function has access to the scope of the outer function, the variables and functions defined 
in the outer function will live longer than the duration of the outer function if the inner functions survives
beyond the life of the outer function. 

A closure is created when the inner function is somehow made available to any scope outside the outer 
function. 

```javascript 
var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;             // The inner function has access to the "name" variable of the outer 
                             //function
  }
  return getName;            // Return the inner function, thereby exposing it to outer scopes
}
myPet = pet('Vivie');
   
myPet();                     // Returns "Vivie"
```

It can be much more complex than the code above. An object containing methods for manipulating the inner variables of the outer function can be returned: 

```javascript 
var createPet = function(name) {
  var sex;
  
  return {
    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || 
        newSex.toLowerCase() === 'female')) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet('Vivie');
pet.getName();                  // Vivie

pet.setName('Oliver');
pet.setSex('male');
pet.getSex();                   // male
pet.getName();                  // Oliver

```

There are, however, a number of pitfalls to watch out for when using closures. If an enclosed function defines a variable with the same name as the name of a variable in the outer scope, there is no way to refer to the variable in the outer scope again

#### Using the arguments object 

The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it as follows:

arguments[i]
where i is the ordinal number of the argument, starting at zero. So, the first argument passed to a function would be arguments[0]. The total number of arguments is indicated by arguments.length.

Using the arguments object, you can call a function with more arguments than it is formally declared to accept. This is often useful if you don't know in advance how many arguments will be passed to the function. You can use arguments.length to determine the number of arguments actually passed to the function, and then access each argument using the arguments object.

For example, consider a function that concatenates several strings. The only formal argument for the function is a string that specifies the characters that separate the items to concatenate. The function is defined as follows:
```javascript 
function myConcat(separator) {
   var result = ''; // initialize list
   var i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}
```
You can pass any number of arguments to this function, and it concatenates each argument into a string "list":
```javascript
// returns "red, orange, blue, "
myConcat(', ', 'red', 'orange', 'blue');

// returns "elephant; giraffe; lion; cheetah; "
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

// returns "sage. basil. oregano. pepper. parsley. "
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');
```

#### Function parameters 

parameters of functions default to `undefined`. 
Default parameters

The rest parameter syntax allows us to represent an indefinite number of arguments as an array. In the example, we use the rest parameters to collect arguments from the second one to the end. We then multiply them by the first one. This example is using an arrow function, which is introduced in the next section.

```javascript 
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

#### Arrow functions 

An arrow function expression (previously, and now incorrectly known as fat arrow function) has a shorter syntax compared to function expressions and does not have its own this, arguments, super, or new.target. Arrow functions are always anonymous. See also this hacks.mozilla.org blog post: "ES6 In Depth: Arrow functions".

Two factors influenced the introduction of arrow functions: shorter functions and non-binding of this.

Shorter functionsSection
In some functional patterns, shorter functions are welcome. Compare:
```javascript 
var a = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

var a2 = a.map(function(s) { return s.length; });

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map(s => s.length);

console.log(a3); // logs [8, 6, 7, 9]
```
No separate thisSection
Until arrow functions, every new function defined its own this value (a new object in the case of a constructor, undefined in strict mode function calls, the base object if the function is called as an "object method", etc.). This proved to be less than ideal with an object-oriented style of programming.
```javascript 
function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this` 
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();
In ECMAScript 3/5, this issue was fixed by assigning the value in this to a variable that could be closed over.

function Person() {
  var self = this; // Some choose `that` instead of `self`. 
                   // Choose one and be consistent.
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}
```
Alternatively, a bound function could be created so that the proper this value would be passed to the growUp() function.

An arrow function does not have its own this; the this value of the enclosing execution context is used. Thus, in the following code, the this within the function that is passed to setInterval has the same value as this in the enclosing function:

```javascript 
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();
```

