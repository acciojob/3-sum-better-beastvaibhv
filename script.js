function threeSum(arr, target) {
if (arr.length < 3) {
    return NaN; // Not enough elements to form a sum of three.
  }

  arr.sort((a, b) => a - b); // Sort the array in ascending order.

  let closestSum = arr[0] + arr[1] + arr[2]; // Initialize closestSum with the sum of the first three elements.

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];

      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
  
}


module.exports = threeSum;
