// Sélectionner le bouton et le body
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const main = document.getElementsByTagName('main');
const li = document.getElementsByTagName('li');
const h2 = document.getElementsByTagName('h2');
const h3 = document.getElementsByTagName('h3');
const cv = document.getElementsByClassName('CV');
const logo = document.getElementById('Logo');
const content = document.getElementsByClassName('Content1');
const scrollToTopButton = document.getElementById('scrollToTop');
let scrollTimeout;

function toggleClassOnElements(elements, className, add) {
    for (let element of elements) {
        if (add) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    }
}

// Vérifier si le mode sombre est déjà activé (via localStorage)
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleClassOnElements(main, 'dark-mode', true);
    toggleClassOnElements(li, 'dark-mode', true);
    toggleClassOnElements(h2, 'dark-mode', true);
    toggleClassOnElements(h3, 'dark-mode', true);
    toggleClassOnElements(cv, 'dark-mode', true);
    toggleClassOnElements(content, 'dark-mode', true);
    darkModeToggle.textContent = 'Désactiver le mode sombre';
}

// Ajouter un gestionnaire d'événements au bouton
darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        // Désactiver le mode sombre
        body.classList.remove('dark-mode');
        toggleClassOnElements(main, 'dark-mode', false);
        toggleClassOnElements(li, 'dark-mode', false);
        toggleClassOnElements(h2, 'dark-mode', false);
        toggleClassOnElements(h3, 'dark-mode', false);
        toggleClassOnElements(cv, 'dark-mode', false);
        toggleClassOnElements(content, 'dark-mode', false);
        logo.src = "R white.png";
        darkModeToggle.textContent = 'Activer le mode sombre';
        localStorage.setItem('darkMode', 'disabled');
    } else {
        // Activer le mode sombre
        body.classList.add('dark-mode');
        toggleClassOnElements(main, 'dark-mode', true);
        toggleClassOnElements(li, 'dark-mode', true);
        toggleClassOnElements(h2, 'dark-mode', true);
        toggleClassOnElements(h3, 'dark-mode', true);
        toggleClassOnElements(cv, 'dark-mode', true);
        toggleClassOnElements(content, 'dark-mode', true);
        logo.src = "R yellow.png";
        darkModeToggle.textContent = 'Désactiver le mode sombre';
        localStorage.setItem('darkMode', 'enabled');
    }
});

function showScrollToTopButton() {
    scrollToTopButton.classList.add('show');
}

function hideScrollToTopButton() {
    scrollToTopButton.classList.remove('show');
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 800) { // Si l'utilisateur a défilé de plus de 300px
        showScrollToTopButton('show');
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(hideScrollToTopButton, 3000); // Cacher après 3 secondes d'inactivité
    } else {
        scrollToTopButton.classList.remove('show'); // Cache le bouton
    }
});

// Fonction pour ramener l'utilisateur en haut de la page
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Défilement fluide
    });
});


