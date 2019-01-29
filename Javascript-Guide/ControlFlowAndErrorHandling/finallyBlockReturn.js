function f() {
  try {
    throw 'error';
  } catch(e) {
    return true; // this return statement is suspended
                 // until finally block has completed
    console.log("catch block end"); // not reachable
  } finally {
    return false; // overwrites the previous "return"
    console.log("finally block end"); // not reachable
  }
  // "return false" is executed now  
  console.log(5); // not reachable
}

console.log(f())
