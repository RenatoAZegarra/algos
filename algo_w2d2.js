/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {
  var count = {};
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (num in count) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }
  for (let num in count) {
    if (count[num] % 2 !== 0) {
      return parseInt(num);
    }
  }
}
console.log(oddOccurrencesInArray(nums3))


/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aaaaaa";
const expected4 = "a";

/* For BONUS */
const str5 = "programming";
const expected5 = "poraming";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
// function stringDedupe(str) {
//   var obj = {};
//   var result = '';
//   for (var i = 0; i < str.length;i++){
//   var character = str[i];
//   if (!obj[character]){
//     result = character + result;
//   }
// }
// return result;
// }
// console.log(stringDedupe(str4))

function stringDedupe(str) {
  const seen = {};
  let result = "";
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    let isDuplicate = false;
    
    for (let j = 0; j < i; j++) {
      if (str.charAt(j) === char) {
        isDuplicate = true;
        break;
      }
    }
    
    if (!isDuplicate) {
      seen[char] = i;
      result += char;
    } else {
      seen[char] = i;
    }
  }
  
  return result;
}
console.log(stringDedupe(str5))