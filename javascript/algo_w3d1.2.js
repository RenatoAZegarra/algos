// ==================================================
/* ==== B O N U S ====
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key)
Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";

const insertData1 = { first_name: "John", last_name: "Doe" };
const expectedA =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

//   // Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
const expectedB =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";

// RIOT

function insert(tableName, columnValuePairs) {
  // remember to write the pseudocode first!
  let keyString = '';
  let valueString = '';
  for(let key in columnValuePairs) { 
    keyString += `${key}, `;
    const value = columnValuePairs[key];
    valueString += typeof value === "string" ? `'${value}', ` : `${value}, `;
  }
  keyString = keyString.slice(0, -2);
  valueString = valueString.slice(0, -2); 
  let queryString = `INSERT INTO ${tableName}(${keyString}) VALUES ${valueString};`
  return queryString;
}


console.log(insert(table, insertData1));
console.log(insert(table, insertData2));