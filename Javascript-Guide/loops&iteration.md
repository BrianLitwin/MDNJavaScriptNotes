
*  for statement
*  do...while statement
*  while statement
*  labeled statement
*  break statement
*  continue statement
*  for...in statement
*  for...of statement

#### for statement
```
for ([initialExpression]; [condition]; [incrementExpression]) 
  statement
```
#### do...while statement
```
do {
} while (condition)
```
* executes once before the condition is checked 

#### while statement
```
while (condition) {

}
```
#### labeled statement
A label provides a statement with an identifier that lets you refer to it elsewhere in your program. For example, you can use a label to identify a loop, and then use the break or continue statements to indicate whether a program should interrupt the loop or continue its execution.

The syntax of the labeled statement looks like the following:
```
label :
   statement
```

The value of label may be any JavaScript identifier that is not a reserved word. The statement that you identify with a label may be any statement.

ExampleSection
In this example, the label markLoop identifies a while loop.

```javascript 
markLoop:
while (theMark == true) {
   doSomething();
}
```

#### break statement

Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement. 

When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.
When you use break with a label, it terminates the specified labeled statement.
The syntax of the break statement looks like this:
```
break [label];
```
The first form of the syntax terminates the innermost enclosing loop or switch; the second form of the syntax terminates the specified enclosing labeled statement.

Example 1: 
The following example iterates through the elements in an array until it finds the index of an element whose value is theValue:

for (var i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}
Example 2: Breaking to a label 
```javascript
var x = 0;
var z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
```

#### continue statement

The continue statement can be used to restart a while, do-while, for, or label statement.

When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the break statement, continue does not terminate the execution of the loop entirely. In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression.
When you use continue with a label, it applies to the looping statement identified with that label.
The syntax of the continue statement looks like the following:
```
continue [label];
```

Example 1
The following example shows a while loop with a continue statement that executes when the value of i is three. Thus, n takes on the values one, three, seven, and twelve.
```javascript 
var i = 0;
var n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12


var i = 0; 
var n = 0; 
while (i < 5) { 
  i++; 
  if (i == 3) { 
     // continue; 
  } 
  n += i; 
  console.log(n);
}
// 1,3,6,10,15
```

Example 2
A statement labeled checkiandj contains a statement labeled checkj. If continue is encountered, the program terminates the current iteration of checkj and begins the next iteration. Each time continue is encountered, checkj reiterates until its condition returns false. When false is returned, the remainder of the checkiandj statement is completed, and checkiandj reiterates until its condition returns false. When false is returned, the program continues at the statement following checkiandj.

If continue had a label of checkiandj, the program would continue at the top of the checkiandj statement.
```javascript 
var i = 0;
var j = 10;
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) == 0) {
          continue checkj;
        }
        console.log(j + ' is odd.');
      }
      console.log('i = ' + i);
      console.log('j = ' + j);
}
```

#### for...in statement

The for...in statement iterates a specified variable over all the enumerable properties of an object. 
For each distinct property, JavaScript executes the specified statements.

##### Arrays -> 
Although it may be tempting to use this as a way to iterate over Array elements, the for...in 
statement will return the name of your user-defined properties in addition to the numeric indexes. 
Thus it is better to use a traditional for loop with a numeric index when iterating over arrays, 
because the for...in statement iterates over user-defined properties in addition to the array elements, 
if you modify the Array object, such as adding custom properties or methods

#### for...of statement

The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on),
invoking a custom iteration hook with statements to be executed for the value of each distinct property.

The following example shows the difference between a for...of loop and a for...in loop. While for...in iterates over property names, for...of iterates over property values:
```javascript 
var arr = [3, 5, 7];
arr.foo = 'hello';

for (var i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (var i of arr) {
   console.log(i); // logs 3, 5, 7
```
