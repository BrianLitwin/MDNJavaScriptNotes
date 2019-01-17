A promise is an object representing the eventual completion or failure of an anynchronous operation. 

Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function. 

```
function successCallback(result) {
    console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
    console.log("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
```

If `createAudioFileAsync()` were rewritten to return a promise, using it could be as simple as this:

```
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);

// above is shorthand for: 

const promise = createAudioFileAsync(audioSettings); 
promise.then(successCallback, failureCallback);

```

List 3 guarantees that promises have which passed-in callbacks do not: 

1) Callbacks will never be called before the completion of the current run of the JavaScript event loop.
2) Callbacks added with then() even after the success or failure of the asynchronous operation, will be called, as above.
3) Multiple callbacks may be added by calling then() several times. Each callback is executed one after another, in the order in which they were inserted.

## Chaining (Unfinished) 

A promise chain allows you to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step.



If you wanted to throw an error after a promise and attach a .then() op to the error handler:

```
new Promise((resolve, reject) => {
    resolve("step 1: pass through resolve");
})
.then((step1) => {
    console.log(step1)
    throw new Error("step 2: throw error")
    console.log("this shouldn't return");
})
.catch((error) => {
    console.log(error)
}).then(()=>{
    console.log("final .then() called after error thrown()")
})
```


## Error Propogation 

a promise chain stops if there's an exception, looking down the chain for catch handlers instead.

https://developers.google.com/web/fundamentals/primers/async-functions

## Composition

Promise.resolve() and Promise.reject() are shortcuts to manually create an already resolved or rejected promise respectively. 
