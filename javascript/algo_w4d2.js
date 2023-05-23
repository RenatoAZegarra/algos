/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                           v                     
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// isNaN
// parseInt()
// someObj.hasOwnProperty("key")

// 1. DRIVER 🚗
// 2. PRESENTER 👨‍🏫
// 3. NAVIGATOR 🧭

function rehash(str) {
  // create obj for frequency map
  let freqMap = {};

  // create variable for return string
  let rehashed = "";

  // --Create Frequency Map--
  // iterate over string
  // using traditional for loop to manipulate iterator value
  for(let i = 0; i < str.length; i++) {
      // if value is a character
      if(isNaN(str[i])) {
          // create variable for storing multi digit numbers
          let tempNum = "";

          let runner = i + 1
          // first determine the number that follows, so logic doesn't need to be repeated
          while(!isNaN(str[runner])) {
              // add to number string
              tempNum += str[runner];
              runner++;
          }

          // convert number string to integer value
          const count = parseInt(tempNum);

          // if the character already exists in the frequency map
          if(freqMap.hasOwnProperty(str[i])) {
              freqMap[str[i]] += count;
          }
          // if is doesn't exist
          else {
              freqMap[str[i]] = count;
          }
      }
  }

  // --Rehash String--
  // create array of alphabetically sorted keys
  const alphabetical = Object.keys(freqMap).sort()

  // use sorted array to reference values and construct string
  for(const key of alphabetical) {
      rehashed += `${key}${freqMap[key]}`;
  }

  return rehashed;
}

rehash(str1);
console.log(rehash(str1) === expected1, "<-- should be \"true\"");