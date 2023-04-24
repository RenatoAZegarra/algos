/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {
  num = Math.floor(num)
  if (num <= 0) {
    return 0
  }
  return num + recursiveSigma(num - 1)
}
console.log(recursiveSigma(num3))



/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected4 = 6;

const nums2 = [1];
const expected5 = 1;

const nums3 = [];
const expected6 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums) {
  if (nums.length <= 0) {
    return 0;
  }
  sum = nums[0];
  nums.splice(0, 1);
  sum += sumArr(nums);
  return sum;
}