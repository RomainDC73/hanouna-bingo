document.addEventListener('DOMContentLoaded', function() {
    generateNewBoard();
});

const quotes = [
    "Quel bonheur d'être avec vous aujourd'hui",
    "Il va se passer plein de choses dans cette émission",
    "On vous a préparé une énorme surprise",
    "Je l'adore",
    "Ah ça c'est exceptionnel",
    "Vous allez voir, c'est magique",
    "Il/Elle est magnifique/magique",
    "C'est génial ! (imitation de Patrick Sébastien)",
    " Quel tocard !",
    "Qu'est-ce que je l'aime",
    "Qu'il/elle est lourd(e)",
    "C'est marrant",
    "Rentrez chez vous, je ne veux plus vous voir",
    "On me l'a fait pas à moi, pas à Tonton Hanouna",
    "Il y a autour de la table qui ont déjà (...) ?",
    "Mais c'est du cachemire ?",
    "Sortez-le/la, tu sors !",
    "Si vous n'aimez pas XXX, n'en dégoûtez pas les autres",
    "Je vous jure que c'est vrai",
    "J'aimerais que vous réagissiez sur les réseaux",
    "Quelle tristesse, la tristesse du gars !",
    "Mes chéris",
    "Mes p'tites beautés",
    "Non mais on dit tout aux téléspectateurs",
    "* imite un mec qui fume *",
    "Quand il veut trop en faire, ça devient n'importe quoi",
    "Je suis au bout du rouleau",
    "Je sais pas sivous imaginez chez vous",
    "Je veux revoir ça",
    "On l'aime beaucoup / On l'adore",
    "On l'embrasse",
    "La testass du gars !",
    "Attaquer TPMP, c'est attaquer la France",
    "Attaquer TPMP, c'est mépriser le peuple",
    "Les risques du direct",
    "Dénonce un tribunal politique",
    "Parle de lui-même en disant 'Baba' ou 'Tonton'",
    "Je ne suis ni juge, ni partie",
    "Pascal Praud et moi...",
    "XXX et moi, on est potes...",
    "On donne la parole à tout le monde",
    "TPMP, c'est pas de montage, pas de triche",
    "Bolloré c'est un grand monsieur",
    "Je fais XX heurese d'antenne par jour / semaine",
];

const bingoBoard = document.querySelector('.bingo-board');

const counter = document.getElementById('counter');

const successMessage = document.getElementById('successMessage');

let checkedCount = 0

const generateButton = document.getElementById('generateBoard');

generateButton.addEventListener('click', function() {
    const confirmation = confirm('Êtes-vous sûr de vouloir générer une nouvelle grille ?');
    if (confirmation){
        generateNewBoard();
        checkedCount = 0;
        updateCounter();
        successMessage.textContent = '';
    }
});

function generateNewBoard() {
    // Efface la grille précédente
    bingoBoard.innerHTML = '';

    // Générer une grille aléatoire
    const shuffledQuotes = shuffleArray(quotes.slice());

    // Générer une grille de bingo 5x5 avec des phrases aléatoires
    for (let i = 0; i < 24; i++) {
        const cell = document.createElement('div');
        cell.textContent = shuffledQuotes[i];
        cell.classList.add('bingo-cell');
        cell.addEventListener('click', toggleCell);
        bingoBoard.appendChild(cell);
    }
}

function toggleCell() {
    this.classList.toggle('checked');
    if (this.classList.contains('checked')) {
        checkedCount++;
    } else {
        checkedCount--;
    }
    updateCounter();

    // Vérifie si toutes les cases sont cochées pour afficher un message de succès
    if (checkedCount === 24) {
        successMessage.textContent = "Félicitations ! T'as coché toutes les cases ! Pauvre de toi, tu as dépassé ton temps de TPMP, va ouvrir un livre, ça ne te fera pas de mal";
    } else {
        successMessage.textContent = ''; // Efface le message si toutes les cases ne sont pas cochées
    }

    // Afficher un message d'encouragement aléatoire en fonction du nombre de cases cochées
    const encouragementMessages = [
        ["Continue comme ça !", "", "T'es sur la bonne voie !", "", "Bravo ! T'avances bien !"],
        ["T'es incroyable !", "", "Super ! Continue comme ça !", "", "Tu fais du bon boulot !"],
        ["Tu es génial(e) !", "", "Mais tu es un(e) pro !", "", "Tu déchires !"],
        ["Oh la la, Baba est fier de vous !", "", "Vous êtes une star !", "", "Est-ce que tu vas arriver au bout de la grille ? Suspense..."],
        ["Allez, plus qu'un, tu peux le faire !"]
    ];

    let messageIndex;
    if (checkedCount >= 0 && checkedCount < 5) {
        messageIndex = 0;
    } else if (checkedCount >= 5 && checkedCount < 10) {
        messageIndex = 1;
    } else if (checkedCount >= 10 && checkedCount < 15) {
        messageIndex = 2;
    } else if (checkedCount >= 15 && checkedCount < 23) {
        messageIndex = 3;
    } else {
        messageIndex = 4;
    }

    const messagesForCount = encouragementMessages[messageIndex];
    const randomIndex = Math.floor(Math.random() * messagesForCount.length);
    messageElement.textContent = messagesForCount[randomIndex];

    // Si toutes les cases sont cochées, ne pas afficher de message d'encouragement
    if (checkedCount === 24) {
        messageElement.textContent = '';
    }
}

function updateCounter() {
    counter.textContent = `Score : ${checkedCount}`;
}



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Échanger array[i] et array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
