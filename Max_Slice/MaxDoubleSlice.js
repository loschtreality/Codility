// A non-empty zero-indexed array A consisting of N integers is given.

// A triplet (X, Y, Z), such that 0 ≤ X < Y < Z < N, is called a double slice.

// The sum of double slice (X, Y, Z) is the total of A[X + 1] + A[X + 2] + ... + A[Y − 1] + A[Y + 1] + A[Y + 2] + ... + A[Z − 1].

// For example, array A such that:

    // A[0] = 3
    // A[1] = 2
    // A[2] = 6
    // A[3] = -1
    // A[4] = 4
    // A[5] = 5
    // A[6] = -1
    // A[7] = 2
// contains the following example double slices:

// double slice (0, 3, 6), sum is 2 + 6 + 4 + 5 = 17,
// double slice (0, 3, 7), sum is 2 + 6 + 4 + 5 − 1 = 16,
// double slice (3, 4, 5), sum is 0.
// The goal is to find the maximal sum of any double slice.

// Write a function:

// function solution(A);
// that, given a non-empty zero-indexed array A consisting of N integers, returns the maximal sum of any double slice.

// For example, given:

    // A[0] = 3
    // A[1] = 2
    // A[2] = 6
    // A[3] = -1
    // A[4] = 4
    // A[5] = 5
    // A[6] = -1
    // A[7] = 2
// the function should return 17, because no double slice of array A has a sum of greater than 17.

// Assume that:

// N is an integer within the range [3..100,000];
// each element of array A is an integer within the range [−10,000..10,000].
// Complexity:

// expected worst-case time complexity is O(N);
// expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
// Elements of input arrays can be modified.

// const slowSolution = (a) => {
//   let sum = 0
//
//   for (let x = 0, len = a.length - 2; x < len; x++) {
//     for (let y = x + 1, len = a.length - 1; y < len; y++) {
//       for (let z = y + 1, len = a.length; z < len; z++) {
//         const sliceSums = a.slice(x + 1, y).concat(a.slice(y + 1, z))
//         sum = Math.max(sum, maxSlice(sliceSums))
//       }
//     }
//   }
//
//   return sum
// }

// const maxSlice = (a) => {
//   let maxEnding = 0
//   let maxSliceSum = 0
//   a.forEach((num) => {
//     maxEnding = Math.max(0, maxEnding + num)
//     maxSliceSum = Math.max(maxEnding, maxSliceSum)
//   })
//
//   return maxSliceSum
// }

// const solution = (array) => {
//   if (array.length <= 1) return array[0] || 0
//
//   const midPoint = Math.floor(array.length / 2) - 1
//   const left = array.slice(1, midPoint - 1)
//   const right = array.slice(midPoint + 1, array.length - 2)
//
//   const leftSum = left.reduce((sum, current) => { return sum + current }, 0)
//   const rightSum = right.reduce((sum, current) => { return sum + current }, 0)
//
//   return Math.max(leftSum + rightSum, solution(left) + solution(right))
// }

// const array = [3, 2, 6, -1, 4, 5, -1, 2]
// const array2 = [5, -2, 10, 3, -25, 12, 6]
// console.log(slowSolution(array)) // expect 17, got: 17

// console.log(solution(array))
// console.log(solution(array)) // 18


const solution = (array) => {

  // Generate 2 arrays the size of the original containing zeros
  const maxEndings = array.map(() => 0)
  const maxBeginnings = array.map(() => 0)

  for (let i = 1, len = array.length - 1; i < len; i++) {
    maxEndings[i] = Math.max(maxEndings[i - 1] + array[i], 0)
  }

  for (let j = array.length - 2; j > 0; j--) {
    maxBeginnings[j] = Math.max(maxBeginnings[j + 1] + array[j], 0)
  }

  let max = 0

  for (let i = 1, len = array.length - 1; i < len; i++) {
    const maxSum = maxEndings[i - 1] + maxBeginnings[i + 1]
    max = Math.max(max, maxSum)
  }

  return max
}

const array = [3, 2, 6, -1, 4, 5, -1, 2]
console.log(solution(array))
