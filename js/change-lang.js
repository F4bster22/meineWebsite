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
  if (window.scrollY > window.innerHeight * 1.05) {
    pagebody.classList.add('show-header');
  } else {
    pagebody.classList.remove('show-header');
  }
}

window.addEventListener('scroll', checkHeaderVisibility);
checkHeaderVisibility();


// Skript Abschnitt für die Sprachumschaltung //
// Buttons und Textbereiche werden gesucht //
const languageButtons = document.querySelectorAll(".lang-btn");
const aboutTexts = document.querySelectorAll(".about-text");

// Für jeden Button wird ein Klick-Eventlistener hinzugefügt //
languageButtons.forEach(button => {
	button.addEventListener("click", () => {
		// Die ausgewählte Sprache wird aus dem data-Attribut des Buttons abgerufen //
		const selectedLanguage = button.dataset.lang;
		
		// Alle Buttons und Textbereiche werden deaktiviert //
		languageButtons.forEach(btn => {
			btn.classList.remove("active");
		});

		aboutTexts.forEach(text => {
			text.classList.remove("active");
		});
		
		// Der geklickte Button und der entsprechende Textbereich werden aktiviert //
		button.classList.add("active");

		document
			.querySelector(`[data-text="${selectedLanguage}"]`)
			.classList.add("active");
	});
});