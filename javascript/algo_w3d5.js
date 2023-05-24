/*
  Given an array of ailments, and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

// HINTS:
// Loop through first array to check the medicine
// then loop through second array to see if the symptoms match the inputted symptoms
// if they match add them into a new array at the end return array
// edge case if no matches return null
const medications = [
  {
      name: "Sulforaphane",
      treatableSymptoms: [
          "dementia",
          "alzheimer's",
          "inflammation",
          "neuropathy",
      ],
  },
  {
      name: "Longvida Curcumin",
      treatableSymptoms: [
          "pain",
          "inflammation",
          "depression",
          "arthritis",
          "anxiety",
      ],
  },
  {
      name: "Hericium erinaceus",
      treatableSymptoms: [
          "anxiety",
          "cognitive decline",
          "depression"],
  },
  {
      name: "Nicotinamide mononucleotide",
      treatableSymptoms: [
          "ageing",
          "low NAD",
          "obesity",
          "mitochondrial myopathy",
          "diabetes",
      ],
  },
  {
      name: "PainAssassinator",
      treatableSymptoms: [
          "pain",
          "inflammation",
          "cramps",
          "headache",
          "toothache",
          "back pain",
          "fever",
      ],
  },
];


/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/
// HINTS:
// Loop through first array to check the medicine
// then loop through second array to see if the symptoms match the inputted symptoms
// if they match add them into a new array at the end return array
// edge case if no matches return null

function webMD(ailments, meds) {
  let results = [];
  let maxCount = 0;
  for(const med of meds ){
    // console.log(med)
    let matchedSymptoms = 0;
    for(const symptom of ailments){
      // console.log(symptom)
      if(med.treatableSymptoms.includes(symptom)){
        matchedSymptoms++ ;
      }
    }
    if(matchedSymptoms == 0){
      continue;
    }
    if(matchedSymptoms > maxCount){
      maxCount = matchedSymptoms;
      results = [med.name]
    } else if (matchedSymptoms == maxCount){
      results.push(med.name);
    }
  }
  return results.length > 0 ? results : null;
}
console.log(webMD(["pain"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
console.log(webMD(["existential dread"], medications));