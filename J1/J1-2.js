const { readDataFromFile } = require("./read-txt");

const findSimilarityScore = (arr1, arr2) => {
  let total = 0;

  for(let i = 0; i < arr1.length; i ++) {  
    for(let j = 0; j < arr2.length; j ++) {
      if(arr1[i] === arr2[j]) {
        total += arr1[i];
      }
    }
  }

  return total;
}

const filePath = "input.txt";
readDataFromFile(filePath, (err, { arr1, arr2 }) => {
  if (err) return;
  const result = findSimilarityScore(arr1, arr2);
  console.log("Score :", result);
});

console.log(findSimilarityScore([3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3]));