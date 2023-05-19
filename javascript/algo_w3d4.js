/* 
  findByIdAndUpdate(id, updateObject, arr)
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found

  check 
  someObj.hasOwnProperty("key")
  obj[key] === undefined
  Object.keys(someObj) // returns [an array of "keys"]
*/

const students = [
  {
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false
  },
  {
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false
  },
  {
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false
  }
];

// Ninja.findByIdAndUpdate(req.params._id, {})
function findByIdAndUpdate(id, updatedVals, collection) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id === id) {
      // Update the object's keys with the provided new values
      for (let key in updatedVals) {
        if (collection[i].hasOwnProperty(key)) {
          collection[i][key] = updatedVals[key];
        }
      }

      // Return the updated object
      return collection[i];
    }
  }

  // If no object was found, return null
  return null;
}




console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue" }, students));
console.log(findByIdAndUpdate(5, {}, students));