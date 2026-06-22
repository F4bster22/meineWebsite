// Wichtige Elemente aus dem HTML holen
const body = document.body;
const menuIcon = document.querySelector('.menuIcon');
const closeBtn = document.querySelector('#menu .closeBtn');
const menuLinks = document.querySelectorAll('#menu a');

// Menü öffnen
function openMenu() {
  body.classList.add('is-menu-visible');
}

// Menü schließen
function closeMenu() {
  body.classList.remove('is-menu-visible');
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
    body.classList.contains('is-menu-visible') &&
    !event.target.closest('#menu') &&
    !event.target.closest('.menuIcon')
  ) {
    closeMenu();
  }
});
