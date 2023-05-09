/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

//             a
const arrA1 = [0, 1, 2, 2, 2, 7];
//             b
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
  var i = 0;
  var j = 0;
  var sortedArr = [];
  while (i < sortedA.length && j < sortedB.length) {
    //making sure that the index' is within the array
    if (sortedA[i] === sortedB[j]) {
      // seeing if the value @ the index' is the same
      if (sortedArr[sortedArr.length - 1] !== sortedA[i]) {
        // duplicate check for this if
        sortedArr.push(sortedA[i]);
        //if its a duplicate we push(either i or j)into new array
      }
      i++;
      j++;
      //after it's checked we incremement and not run infinite loop
    } else if (sortedA[i] < sortedB[j]) {
      //if the values are not the same then we check if i is less than j
      i++;
      //if less we increment i
    } else {
      j++;
      //if not we increment j
    }
  }
  return sortedArr;

  // the 2 arrays are sorted!
  //  create indexA and indexB for each array
  //  start them at 0
  // ...
}

console.log(orderedIntersection(arrA2, arrB2));
  // the 2 arrays are sorted!
  //  create indexA and indexB for each array
  //  start them at 0
  // ...
