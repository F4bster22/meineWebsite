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




// Skript Abschnitt für die Galerie (Karusell-Funktion) //

// Array mit den Bildern und Beschriftungen; jedes Bild ist ein Objekt mit den Eigenschaften src, alt und caption //
const galleryImages = [
	{
		src: "../Images/Artwork/Dummy_1.png",
		alt: "Kunstwerk 1",
		caption: "Kunstwerk 1",
		medium: "Digital 1",
		format: "Quadrat 1"
	},
	{
		src: "../Images/Artwork/Dummy_2.png",
		alt: "Kunstwerk 2",
		caption: "Kunstwerk 2",
		medium: "Digital 2",
		format: "Quadrat 2"
	},
	{
		src: "../Images/Artwork/Dummy_3.png",
		alt: "Kunstwerk 3",
		caption: "Kunstwerk 3",
		medium: "Digital 3",
		format: "Quadrat 3"
	}
];

// Variable, um das aktuelle Bild zu verfolgen (merkt sich das aktuelle Bild; Liste beginnt in Java bei 0) //
let currentImage = 0;

const imageElement = document.querySelector("#gallery-image");
const captionElement = document.querySelector("#gallery-caption-main");
// const captionSmallElement = document.querySelector("#gallery-caption-small");
const mediumElement = document.querySelector("#gallery-medium");
const formatElement = document.querySelector("#gallery-format");
const prevButton = document.querySelector(".gallery-btn.prev");
const nextButton = document.querySelector(".gallery-btn.next");

function showImage(index) {
	imageElement.src = galleryImages[index].src;
	imageElement.alt = galleryImages[index].alt;
	captionElement.textContent = galleryImages[index].caption;
	// captionSmallElement.textContent = galleryImages[index].caption; 
	mediumElement.textContent = galleryImages[index].medium;
	formatElement.textContent = galleryImages[index].format;
}

prevButton.addEventListener("click", function () {
	currentImage--;

  // Die if-Bedingung sorgt dafür, dass es beim ersten Bild nicht zu einem Fehler kommt, sondern zum letzten Bild springt //
	if (currentImage < 0) {
		currentImage = galleryImages.length - 1;
	}

	showImage(currentImage);
});

nextButton.addEventListener("click", function () {
	currentImage++;

	if (currentImage >= galleryImages.length) {
		currentImage = 0;
	}

	showImage(currentImage);
});