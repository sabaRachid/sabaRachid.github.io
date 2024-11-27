// Sélectionner le bouton et le body
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const li = document.getElementsByTagName('li');
const h2 = document.getElementsByTagName('h2');
const h3 = document.getElementsByTagName('h3');
const cv = document.getElementsByClassName('CV');

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
    toggleClassOnElements(li, 'dark-mode', true);
    toggleClassOnElements(h2, 'dark-mode', true);
    toggleClassOnElements(h3, 'dark-mode', true);
    toggleClassOnElements(cv, 'dark-mode', true);
    darkModeToggle.textContent = 'Désactiver le mode sombre';
}

// Ajouter un gestionnaire d'événements au bouton
darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        // Désactiver le mode sombre
        body.classList.remove('dark-mode');
        toggleClassOnElements(li, 'dark-mode', false);
        toggleClassOnElements(h2, 'dark-mode', false);
        toggleClassOnElements(h3, 'dark-mode', false);
        toggleClassOnElements(cv, 'dark-mode', false);
        darkModeToggle.textContent = 'Activer le mode sombre';
        localStorage.setItem('darkMode', 'disabled');
    } else {
        // Activer le mode sombre
        body.classList.add('dark-mode');
        toggleClassOnElements(li, 'dark-mode', true);
        toggleClassOnElements(h2, 'dark-mode', true);
        toggleClassOnElements(h3, 'dark-mode', true);
        toggleClassOnElements(cv, 'dark-mode', true);
        darkModeToggle.textContent = 'Désactiver le mode sombre';
        localStorage.setItem('darkMode', 'enabled');
    }
});
