const { readDataFromFile } = require("./read-txt");

const calculateDistance = (arr1, arr2) => {
  const sortedArr1 = arr1.sort((a, b) => a - b);
  const sortedArr2 = arr2.sort((a, b) => a - b);

  let totalDistance = 0;

  for(let i = 0; i < arr1.length; i ++) {
    totalDistance += Math.abs(sortedArr1[i] - sortedArr2[i]);
  };

  return totalDistance;
};

const filePath = "input.txt";
readDataFromFile(filePath, (err, { arr1, arr2 }) => {
  if (err) return;
  const result = calculateDistance(arr1, arr2);
  console.log("Distance totale :", result);
});

console.log(calculateDistance([3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3]));