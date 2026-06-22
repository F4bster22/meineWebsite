const body = document.body;

// Prüfen, ob die Seite in mobiler Breite angezeigt wird
function checkMobile() {
  if (window.matchMedia('(max-width: 736px)').matches) {
    body.classList.add('mobile');
  } else {
    body.classList.remove('mobile');
  }
}

// Beim Laden prüfen
checkMobile();

// Bei Größenänderung erneut prüfen
window.addEventListener('resize', checkMobile);

// Preload-Klasse nach dem Laden entfernen
window.addEventListener('load', function() {
  body.classList.remove('preload');
});



function checkHeaderVisibility() {
  if (window.scrollY > window.innerHeight * 0.8) {
    body.classList.add('show-header');
  } else {
    body.classList.remove('show-header');
  }
}

window.addEventListener('scroll', checkHeaderVisibility);
checkHeaderVisibility();
