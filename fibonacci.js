// Iterative Fibonacci function
function fibs(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const fibsArr = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibsArr.push(fibsArr[i - 1] + fibsArr[i - 2]);
  }
  return fibsArr;
}
console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21]


// Recursive Fibonacci function
function fibsRec(n) {
  if (n <= 0) return [0]; // Base case: if n is 0, return [0]
  if (n === 1) return [0, 1]; // Base case: if n is 1, return [0, 1]

  const prev = fibsRec(n - 1); // Recursive case: get the Fibonacci sequence up to n-1
  const nextValue = prev[prev.length - 1] + prev[prev.length - 2]; // Calculate the next Fibonacci number
  return [...prev, nextValue]; // Return the sequence with the next Fibonacci number added
}

console.log(fibsRec(0)); // Output: [0]
console.log(fibsRec(1)); // Output: [0, 1]
console.log(fibsRec(5)); // Output: [0, 1, 1, 2, 3, 5]
console.log(fibsRec(7)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
