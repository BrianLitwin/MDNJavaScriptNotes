Which six values evaluate to false? 
false, undefined, null, 0, NaN, "" 

this example: https://github.com/mdn/js-examples/blob/master/promises-test/index.html

What does a try-catch statement do? 
marks a block of statements to try, and specifies one or more responses should an exception be thrown 

what does the try-catch statement consist of? 
The try...catch statement consists of a try block, which contains one or more statements, and a catch block, containing statements that specify what to do if an exception is thrown in the try block. That is, you want the try block to succeed, and if it does not succeed, you want control to pass to the catch block. If any statement within the try block (or in a function called from within the try block) throws an exception, control immediately shifts to the catch block. If no exception is thrown in the try block, the catch block is skipped. The finally block executes after the try and catch blocks execute but before the statements following the try...catch statement.

what is the catch-block identifier? 
The catch block specifies an identifier (catchID in the preceding syntax) that holds the value specified by the throw statement; you can use this identifier to get information about the exception that was thrown. JavaScript creates this identifier when the catch block is entered; the identifier lasts only for the duration of the catch block; after the catch block finishes executing, the identifier is no longer available.

what is the finally block? 
The finally block contains statements to execute after the try and catch blocks execute but before the statements following the try...catch statement. The finally block executes whether or not an exception is thrown. If an exception is thrown, the statements in the finally block execute even if no catch block handles the exception.If the finally block returns a value, this value becomes the return value of the entire try-catch-finally production, regardless of any return statements in the try and catch blocks

what are the states of a Promise? 
1) pending: initial state, not fulfilled or rejected.
2) fulfilled: successful operation
3) rejected: failed operation.
4) settled: the Promise is either fulfilled or rejected, but not pending

