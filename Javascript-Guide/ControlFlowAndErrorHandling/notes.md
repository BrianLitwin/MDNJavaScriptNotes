##### Falsty values
The following values evaluate to false: 
* false
* undefined 
* null 
* 0 
* NaN 
* the empty string ("")

Do not confuse the primitive boolean values true and false with the true and false values of the Boolean object. For example :

```
var b = new Boolean(false);
if (b) // this condition evaluates to true
if (b == true) // this condition evaluates to false
```

#### Exception handling statements

Just about any object can be thrown in JavaScript. Nevertheless, not all thrown objects are created equal. While it is fairly common to throw numbers or strings as errors it is frequently more effective to use one of the exception types specifically created for this purpose:

* [ECMAScript exceptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types)
* [DOMException](https://developer.mozilla.org/en-US/docs/Web/API/DOMException) and [DOMError](https://developer.mozilla.org/en-US/docs/Web/API/DOMError)

Use the throw statement to throw an exception. When you throw an exception, you specify the expression containing the value to be thrown:

You can specify an object when you throw an exception. You can then reference the object's properties in the catch block: 

```javascript 
// Create an object type UserException
function UserException(message) {
this.message = message;
this.name = 'UserException';
}

// Make the exception convert to a pretty string when used as a string 
// (e.g. by the error console)
UserException.prototype.toString = function() {
return this.name + ': "' + this.message + '"';
}

// Create an instance of the object type and throw it
throw new UserException('Value too high');
```

#### The try...catch statement 

The try...catch statement marks a block of statements to try, and specifies one or more responses should an exception be thrown. If an exception is thrown, the try...catch statement catches it.

The try...catch statement consists of a try block, which contains one or more statements, and a catch block, containing statements that specify what to do if an exception is thrown in the try block. That is, you want the try block to succeed, and if it does not succeed, you want control to pass to the catch block. If any statement within the try block (or in a function called from within the try block) throws an exception, control immediately shifts to the catch block. If no exception is thrown in the try block, the catch block is skipped. The finally block executes after the try and catch blocks execute but before the statements following the try...catch statement.

```javascript 
function getMonthName(mo) {
mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
if (months[mo]) {
return months[mo];
} else {
throw 'InvalidMonthNo'; //throw keyword is used here
}
}

try { // statements to try
monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
monthName = 'unknown';
logMyErrors(e); // pass exception object to error handler -> your own function
}
```

```
catch(catchID) {
    statement 
}
```

The catch block specifies an identifier (catchID in the preceding syntax) that holds the value specified by the throw statement; you can use this identifier to get information about the exception that was thrown. JavaScript creates this identifier when the catch block is entered; the identifier lasts only for the duration of the catch block; after the catch block finishes executing, the identifier is no longer available.

```javascript 
try {
throw 'myException'; // generates an exception
}
catch (e) {
// statements to handle any exceptions
logMyErrors(e); // pass exception object to error handler
}
```

The finally block contains statements to execute after the try and catch blocks execute but before the statements following the try...catch statement. The finally block executes whether or not an exception is thrown. If an exception is thrown, the statements in the finally block execute even if no catch block handles the exception.


If the finally block returns a value, this value becomes the return value of the entire try-catch-finally production, regardless of any return statements in the try and catch blocks:

```javascript 
function f() {
try {
console.log(0);
throw 'bogus';
} catch(e) {
console.log(1);
return true; // this return statement is suspended
// until finally block has completed
console.log(2); // not reachable
} finally {
console.log(3);
return false; // overwrites the previous "return"
console.log(4); // not reachable
}
// "return false" is executed now  
console.log(5); // not reachable
}
f(); // console 0, 1, 3; returns false
```

Overwriting of return values by the finally block also applies to exceptions thrown or re-thrown inside of the catch block:

```
function f() {
try {
throw 'bogus';
} catch(e) {
console.log('caught inner "bogus"');
throw e; // this throw statement is suspended until 
// finally block has completed
} finally {
return false; // overwrites the previous "throw"
}
// "return false" is executed now
}

try {
f();
} catch(e) {
// this is never reached because the throw inside
// the catch is overwritten
// by the return in finally
console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"
```

You can nest one or more try...catch statements. If an inner try...catch statement does not have a catch block, it needs to have a finally block and the enclosing try...catch statement's catch block is checked for a match.

Depending on the type of error, you may be able to use the 'name' and 'message' properties to get a more refined message. 'name' provides the general class of Error (e.g., 'DOMException' or 'Error'), while 'message' generally provides a more succinct message than one would get by converting the error object to a string.

If you are throwing your own exceptions, in order to take advantage of these properties (such as if your catch block doesn't discriminate between your own exceptions and system ones), you can use the Error constructor. For example:

```
function doSomethingErrorProne() {
if (ourCodeMakesAMistake()) {
throw (new Error('The message'));
} else {
doSomethingToGetAJavascriptError();
}
}
....
try {
doSomethingErrorProne();
} catch (e) {
console.log(e.name); // logs 'Error'
console.log(e.message); // logs 'The message' or a JavaScript error message)
}
```

A Promise is in one of these states:

pending: initial state, not fulfilled or rejected.
fulfilled: successful operation
rejected: failed operation.
settled: the Promise is either fulfilled or rejected, but not pending.


Exercise: 
make this example: 
https://github.com/mdn/js-examples/blob/master/promises-test/index.html
