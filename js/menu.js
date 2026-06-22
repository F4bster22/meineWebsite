// Wichtige Elemente aus dem HTML holen
// document steht für komplette html Seite
// querySelector() bedeutet: Suche ein Element mit einem CSS-Selektor
const body = document.body;
const menuIcon = document.querySelector('.menuIcon');
const closeBtn = document.querySelector('#menu .closeBtn');

// Definition der Funktion Menü öffnen
function openMenu() {
  // füge dem Body die Klasse 'menu-visible' hinzu 
  body.classList.add('menu-visible');
}

// Definition der Funktion Menü schließen
function closeMenu() {
  body.classList.remove('menu-visible');
}

// Klick auf Burger-Menü
// Sicherheitsabfrage, ob menuIcon existiert
if (menuIcon) {
  // Warte darauf, dass jemand auf den Link klickt; bei diesem Event (hier: click) führe die Funktion aus
  menuIcon.addEventListener('click', function(event) {
    // verhindert das normale Verhalten (Springen zum Link)
    event.preventDefault();
    openMenu();
  });
}

// Klick auf X
if (closeBtn) {
  closeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    closeMenu();
  });
}

// Klick außerhalb des Menüs
// reagiert auf Klick irgendwo im Fenster
window.addEventListener('click', function(event) {
  if (
    body.classList.contains('menu-visible') &&
    !event.target.closest('#menu') &&
    !event.target.closest('.menuIcon')
  ) {
    closeMenu();
  }
});
