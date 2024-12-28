// Fibonacci sequenz

function fibs(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const fibsArr = [0, 1];
  for (i = 2; i <= n; i++) {
    fibsArr.push(fibsArr[i - 1] + fibsArr[i - 2]);
  }
  return fibsArr;
}
console.log(fibs(8));

function fibsRec(n) {
  if (n <= 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const prev = fibsRec(n - 1);
    const nextValue = prev[prev.length - 1] + prev[prev.length - 2];
    return [...prev, nextValue];
  }
}

