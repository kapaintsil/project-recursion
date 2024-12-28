// Merge Sort

// normal sort function using the sort method
// Function to perform normal sort using the sort method
function normalSort(arr) {
  if (arr.length == 1) {
    return arr[0]; // Return the single element if array length is 1
  } else {
    return arr.sort((a, b) => a - b); // Sort the array in ascending order
  }
}

// Function to perform merge sort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Return the array if it has 1 or 0 elements
  } else {
    const mid = Math.floor(arr.length / 2); // Find the middle index
    const left = mergeSort(arr.slice(0, mid)); // Recursively sort the left half
    const right = mergeSort(arr.slice(mid)); // Recursively sort the right half

    return merge(left, right); // Merge the sorted halves
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

// Test cases for mergeSort function
console.log(mergeSort([10, 5, 9, 10, 1, 6])); // Expected output: [1, 5, 6, 9, 10, 10]
console.log(mergeSort([3, 2, 1])); // Expected output: [1, 2, 3]
console.log(mergeSort([5, 8, 3, 7, 2, 6, 4, 1])); // Expected output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeSort([12, 11, 13, 5, 6, 7])); // Expected output: [5, 6, 7, 11, 12, 13]
console.log(mergeSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
