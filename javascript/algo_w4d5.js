// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/
//                👇
const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.


//                v
const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.



//                 👀
const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */


//              v
const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"


function lengthOfLongestSubString(str) {
  let maxLength = 0;
  let start = 0;
  const charMap = {};
  for(let end = 0; end < str.length; end++) {
    const char = str[end];
    if(charMap[char] !== undefined && charMap[char]>= start){
      start = charMap[char] + 1;
    }
    charMap[char] = end;
    maxLength = Math.max(maxLength, end - start +1);
  }
  return  maxLength
}
console.log(lengthOfLongestSubString(str1)); 
console.log(lengthOfLongestSubString(str2)); 
console.log(lengthOfLongestSubString(str3));