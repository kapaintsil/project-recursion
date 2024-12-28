// Merge Sort

// normal sort function using the sort method
function normalSort(arr) {
  if (arr.length == 1) {
    return arr[0];
  } else {
    return arr.sort((a, b) => a - b);
  }
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
  }
}


function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays and push the smaller one into the result
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements from the left array
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  // Add remaining elements from the right array
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}


console.log(mergeSort([10, 5, 9, 10, 1, 6]));
