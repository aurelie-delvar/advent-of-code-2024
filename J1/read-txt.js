const { readFile } = require("fs");

const readDataFromFile = (filePath, callback) => {
  readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier :", err);
      callback(err, null);
      return;
    }

    const arr1 = [];
    const arr2 = [];

    const lines = data.trim().split("\n");
    lines.forEach((line) => {
      const [left, right] = line.trim().split(/\s+/).map(Number);
      if (!isNaN(left)) arr1.push(left);
      if (!isNaN(right)) arr2.push(right);
    });

    callback(null, { arr1, arr2 });
  });
};

module.exports = { readDataFromFile };