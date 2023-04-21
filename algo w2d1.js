/* 
  Invert Hash
  A hash table / hash map is an obj / dictionary
  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
// const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, any>} obj
 * @return The given object with key value pairs inverted.
 */
function invertObj(obj) {
  var invertedObj = {};
  var keys = Object.keys(obj);
  for (i=0; i<keys.length; i++){
    var key = keys[i];
    var value = obj[key];
    invertedObj[value] = key;
  }
  return invertedObj

}
console.log(invertObj(obj1))


/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
// const expected1 = {
//   a: 3,
// };

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
// const expected2 = {
//   a: 2,
//   b: 1,
//   c: 3,
//   B: 1,
//   d: 1,
// };

const arr3 = [];
// const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function makeFrequencyTable(arr) {
  var frequencyTable = {};
  for (var i = 0; i < arr.length; i++) {
    var letter = arr[i];
    if (frequencyTable[letter] === undefined){
      frequencyTable[letter] = 1;
    }
    else {
      frequencyTable[letter]++;
    }
}
return frequencyTable;
}
console.log(makeFrequencyTable(arr2))