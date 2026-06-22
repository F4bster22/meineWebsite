const pagebody = document.body;

// Prüfen, ob die Seite in mobiler Breite angezeigt wird
function checkMobile() {
  if (window.matchMedia('(max-width: 736px)').matches) {
    pagebody.classList.add('mobile');
  } else {
    pagebody.classList.remove('mobile');
  }
}

// Beim Laden prüfen
checkMobile();

// Bei Größenänderung erneut prüfen
window.addEventListener('resize', checkMobile);

// Preload-Klasse nach dem Laden entfernen
window.addEventListener('load', function() {
  pagebody.classList.remove('preload');
});



function checkHeaderVisibility() {
  if (window.scrollY > window.innerHeight * 0.9) {
    pagebody.classList.add('show-header');
  } else {
    pagebody.classList.remove('show-header');
  }
}

window.addEventListener('scroll', checkHeaderVisibility);
checkHeaderVisibility();
