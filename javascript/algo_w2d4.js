/* 
    This is an actual interview algorithm given to a Coding Dojo alum

    Find Consecutive Sums

    You are given arr, a list of positive integers 0-255
    You are given k, a integer between 1-255

    Find all the consecutive groups of integers that add up to the value k
*/

// inputs:
k = 16
arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

output = [
    [2, 5, 3, 6],
    [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0]
]

// create new arrays
// if no matches, return empty array

// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take ~10 mins to write the pseudocode here:

// Create function called ConsecutiveSums with two parameters for arr and k
// initialize an empty list called variable results
// a for loop for the array with index = 0 
  // set a variable sum = arr[i]
  // set variable TempArr [arr[i]]
  //start for loop for j and start it at i+1
  // create an if statement that suggests that the variable is < k
    // add arr j  to sum
    // push sum to TempArr
  // remove first interger from sum with else statement and break loop
  // if sum = k push the results
//return result



// create the function and decide what params it needs and what it will return here:
function ConsecutiveSums(arr, target){
  // Create an empty array to store the result.
  let results = [];
  // Iterate through the array until the second to last element.
  for(let i = 0; i < arr.length-1; i++){
    // Set the sum to the current element.
    let sum = arr[i];
    // Create a temporary array with the current element.
    let tempArr = [arr[i]];
    // Iterate through the array starting from the next element.
    for (let j = i+1; j < arr.length; j++){
      // If the sum is less than the target, add the current element to the sum and temporary array.
      if(sum < target){
        sum += arr[j];
        tempArr.push(arr[j])
      }
      // If the sum is greater than or equal to the target, exit the loop.
      else {
        break;
      }
      // If the sum is equal to the target, add the temporary array to the results array.
      if (sum === target){
        results.push(tempArr)
      }
    }
  }
  // Return the results array.
  return results;
}
console.log(ConsecutiveSums(arr,k))

function consecutiveSumsV2(arr, k) {
  let options = [];
  for (let i = 0; i < arr.length; i++) {
    let tempArr = [];
    let runningSum = 0;
    let index = i;
    while (runningSum <= k && index < arr.length) {
      runningSum += arr[index];
      tempArr.push(arr[index]);
      if (runningSum === k) {
        options.push([...tempArr]);
      }
      index++;
    }
  }
  return options;
}