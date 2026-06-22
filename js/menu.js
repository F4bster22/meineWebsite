// Wichtige Elemente aus dem HTML holen
// document steht für komplette html Seite
// querySelector() bedeutet: Suche ein Element mit einem CSS-Selektor
const body = document.body;
const menuIcon = document.querySelector('.menuIcon');
const closeBtn = document.querySelector('#menu .closeBtn');

// Menü öffnen
function openMenu() {
  body.classList.add('menu-visible');
}

// Menü schließen
function closeMenu() {
  body.classList.remove('menu-visible');
}

// Klick auf Burger-Menü
if (menuIcon) {
  menuIcon.addEventListener('click', function(event) {
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
window.addEventListener('click', function(event) {
  if (
    body.classList.contains('menu-visible') &&
    !event.target.closest('#menu') &&
    !event.target.closest('.menuIcon')
  ) {
    closeMenu();
  }
});
