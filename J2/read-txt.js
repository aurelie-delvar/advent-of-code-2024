const fs = require('fs');

function readFileToMatrix(filePath) {
    const content = fs.readFileSync(filePath, 'utf8'); // Lire le contenu du fichier
    const matrix = content
        .trim() // Supprime les espaces et les sauts de ligne inutiles en début/fin
        .split('\n') // Divise le texte en lignes
        .map(line => line.split(' ').map(Number)); // Divise chaque ligne par espace et convertit en nombres
    return matrix;
}

module.exports = { readFileToMatrix };