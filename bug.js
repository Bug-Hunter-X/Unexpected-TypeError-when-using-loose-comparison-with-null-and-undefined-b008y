function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause a TypeError if called with undefined parameters
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, null)); // Output: null
console.log(foo(undefined, 2)); // Throws TypeError because the condition only checks for null, not undefined