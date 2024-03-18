const quotes = [
    "Quel bonheur d'être avec vous aujourd'hui",
    "Il va se passer plein de choses dans cette émission",
    "On vous a préparé une énorme surprise",
    "Je l'adore",
    "Ah ça c'est exceptionnel",
    "Vous allez voir, c'est magique",
    "Il/Elle est magnifique/magique",
];

// console.log(quotes);

const bingoBoard = document.querySelector('.bingo-board');

const generateButton = document.getElementById('generateBoard');

generateButton.addEventListener('click', generateNewBoard);

function generateNewBoard() {
    // Efface la grille précédente
    bingoBoard.innerHTML = '';

    // Générer une grille aléatoire
    const shuffledQuotes = shuffleArray(quotes.slice());

    // Générer une grille de bingo 5x5 avec des phrases aléatoires
    for (let i = 0; i < 24; i++) {
        const cell = document.createElement('div');
        cell.textContent = shuffledQuotes[i];
        bingoBoard.appendChild(cell);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Échanger array[i] et array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
