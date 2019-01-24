#### Array object 

JavaScript does not have an explicit array data type. However, you can use the predefined Array 
object and its methods to work with arrays in your applications. The Array object has methods 
for manipulating arrays in various ways, such as joining, reversing, and sorting them. 
It has a property for determining the array length and other properties for use with regular expressions.

To create an array with non-zero length, but without any items, either of the following can be used:

```javascript 
var arr = new Array(arrayLength);
var arr = Array(arrayLength);

// This has exactly the same effect
var arr = [];
arr.length = arrayLength;
```

If you wish to initialize an array with a single element, and the element happens to be a Number, you must use the bracket syntax. 
When a single Number value is passed to the Array() constructor or function, it is interpreted as an arrayLength, not as a single element.

```javascript 
var arr = [42];      // Creates an array with only one element:
                     // the number 42.

var arr = Array(42); // Creates an array with no elements
                     // and arr.length set to 42; this is
                     // equivalent to:
var arr = [];
arr.length = 42
```

#### Understanding Length 

At the implementation level, JavaScript's arrays actually store their elements as standard object properties, 
using the array index as the property name. The length property is special; it always returns the index of 
the last element plus one.

You can also assign to the length property. Writing a value that is shorter than the number of stored items truncates
the array; writing 0 empties it entirely:
```javascript 
var cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // logs "Dusty, Misty" - Twiggy has been removed

cats.length = 0;
console.log(cats); // logs []; the cats array is empty

cats.length = 3;
console.log(cats); // logs [ <3 empty items> ]
```

Note that the elements of an array that are omitted when the array is defined are not listed when iterating by forEach, but are listed when undefined has been manually assigned to the element:
```javascript
var array = ['first', 'second', , 'fourth'];

array.forEach(function(element) {
  console.log(element);
});
// first
// second
// fourth

if (array[2] === undefined) { 
  console.log('array[2] is undefined'); // true
} 

array = ['first', 'second', undefined, 'fourth'];

array.forEach(function(element) {
  console.log(element);
});
// first
// second
// undefined
// fourth
```

Since JavaScript elements are saved as standard object properties, it is not advisable to iterate through JavaScript arrays using 
for...in loops because normal elements and all enumerable properties will be listed.

#### Array Methods 


