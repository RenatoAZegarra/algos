/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
  let newString = str.split(' ');
  let returnString = '';
  for (word in newString) {
    let tempWord = '';
    for (let i = newString[word].length - 1; i >= 0; i--) {
      tempWord += newString[word][i];
    }
    if (returnString != ''){
      returnString += ' ';
    }
    returnString += tempWord;
  }
  return returnString;
}
console.log(reverseWords(str2));





/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

const str2 = "hello";
const expected2 = "hello";

const str3 = "   This  is a   test  ";
const expected3 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */

reverseWordOrder(wordsStr) {
  var string = '';
  for(var i = wordsStr.length - 1; i >= 0; i--){
    if (wordsStr[i] != ' ' || wordsStr[i-1] != ' '){
      string += wordsStr[i]
    }
  }
  string = reverseWords(string);
  return string;
}

console.log(reverseWordOrder(str3));