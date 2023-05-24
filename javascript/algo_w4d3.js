

// Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
// return if they are equal when both are typed into empty text editors.
// 👉 '#' character means a 'backspace' character.
// i.e., after processing the backspaces, are the two strings equal?
// return true or false
// Ninja Bonus: solve in O(n) time
// */

// ad#clp
// aclp


//          v
const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//             v
const S2 = "ab##";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""

const T2 = "c#d#";
// []
// "str2"
// c -> "" -> d -> "" 
const expected2 = true;
// Explanation: Both S and T become ""
//          v
const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

function backspaceStringCompare(S, T) {
  let stringS = []
  let stringT = []
  var j = 0
  var i = 0
  while (i < S.length || j < T.length) {
    if (i < S.length && S[i] === "#") {
      stringS.pop();
      i++;
    } else if (j < T.length && T[j] === "#") {
      stringT.pop();
      j++;
    } else {
      if (i < S.length) {
        stringS.push(S[i]);
      }
      if (j < T.length) {
        stringT.push(T[j]);
      }
      i++;
      j++;
    }
  }
  return JSON.stringify(stringT) === JSON.stringify(stringS)
}

//---------------------

console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))