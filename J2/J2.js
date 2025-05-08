const { readFileToMatrix } = require("./read-txt");

const isItSafe = (data) => {
  for(const array of data) {
    for(let i = 1; i < array.length; i ++) {
      let isAtLeastOne = Math.abs(array[i - 1] - array[i]) >= 1;
      let isLessThanThree = Math.abs(array[i - 1] - array[i]) <= 3;

      if(isAtLeastOne && isLessThanThree) {
        console.log('je passe là');
        continue;
      } else {
        console.log('je passe ici');
        return false;
      }
    }
  };
}

const filePath = 'input.txt';
const matrix = readFileToMatrix(filePath);
console.log(matrix);

console.log(isItSafe(matrix));