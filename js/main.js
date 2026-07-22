const pagebody = document.body;

// Prüfen, ob die Seite mobil ODER im Hochformat angezeigt wird
function checkMobile() {
  if (window.matchMedia('(max-width: 720px), (orientation: portrait)').matches) {
    pagebody.classList.add('mobile');
  } else {
    pagebody.classList.remove('mobile');
  }
}

checkMobile();
window.addEventListener('resize', checkMobile);
window.addEventListener('orientationchange', checkMobile);

// Preload-Klasse nach dem Laden entfernen
window.addEventListener('load', function () {
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

// Galerie nur starten, wenn die Galerie-Elemente auf der aktuellen Seite existieren
const imageElement = document.querySelector('#gallery-image');
const captionElement = document.querySelector('#gallery-caption-main');
const mediumElement = document.querySelector('#gallery-medium');
const formatElement = document.querySelector('#gallery-format');
const linkElement = document.querySelector('#gallery-image-link');
const prevButton = document.querySelector('.gallery-btn.prev');
const nextButton = document.querySelector('.gallery-btn.next');

if (imageElement && captionElement && mediumElement && formatElement && linkElement && prevButton && nextButton) {
  const galleryImages = [
    {
      src: '../Images/Artwork/Clownfish.png',
      alt: 'Clownfish',
      caption: 'Clownfish',
      medium: 'Farbstifte auf Papier',
      format: 'DIN A5 Querformat',
      link: '../gallery/clownfish/index.html'
    },
    {
      src: '../Images/Artwork/Finger_Heart.png',
      alt: 'Finger Heart',
      caption: 'Finger Heart',
      medium: 'Pigmentierte Tinte auf Papier',
      format: 'DIN A5 Hochformat',
      link: '../gallery/finger-heart/index.html'
    },
    {
      src: '../Images/Artwork/Human_Bias.png',
      alt: 'Human Bias',
      caption: 'Human Bias',
      medium: 'Pigmentierte Tinte auf Papier',
      format: 'DIN A5 Hochformat',
      link: '../gallery/human-bias/index.html'
    },
    {
      src: '../Images/Artwork/Marilyn_Popart.webp',
      alt: 'Grace under their Gaze',
      caption: 'Grace under their Gaze',
      medium: 'Digital',
      format: 'Quadratisch',
      link: '../gallery/grace-under-their-gaze/index.html'
    },
    {
      src: '../Images/Artwork/GoodMood_GoodLuck.png',
      alt: 'Good Mood = Good Luck',
      caption: 'Good Mood = Good Luck',
      medium: 'Farbstifte auf Papier',
      format: 'DIN A4 Hochformat',
      link: '../gallery/good-mood-good-luck/index.html'
    },
    {
      src: '../Images/Artwork/OpeOpeVega.png',
      alt: 'Between Heart and Mind',
      caption: 'Between Heart and Mind',
      medium: 'Farbstifte auf Papier',
      format: 'DIN A4 Querformat',
      link: '../gallery/between-heart-and-mind/index.html'
    },
    {
      src: '../Images/Artwork/Venice.png',
      alt: 'Venice',
      caption: 'Venice',
      medium: 'Pigmentierte Tinte auf Papier',
      format: 'DIN A4 Querformat',
      link: '../gallery/venice/index.html'
    },
    {
      src: '../Images/Artwork/Butterflies.webp',
      alt: 'Blooderflies',
      caption: 'Blooderflies',
      medium: 'Digitaldruck auf Leinwand',
      format: '80 x 80 cm',
      link: '../gallery/blooderflies/index.html'
    }
  ];

  let currentImage = 0;

  function showImage(index) {
    const image = galleryImages[index];

    imageElement.src = image.src;
    imageElement.alt = image.alt;
    captionElement.textContent = image.caption;
    mediumElement.textContent = image.medium;
    formatElement.textContent = image.format;
    linkElement.href = image.link;
  }

  prevButton.addEventListener('click', function () {
    currentImage--;

    if (currentImage < 0) {
      currentImage = galleryImages.length - 1;
    }

    showImage(currentImage);
  });

  nextButton.addEventListener('click', function () {
    currentImage++;

    if (currentImage >= galleryImages.length) {
      currentImage = 0;
    }

    showImage(currentImage);
  });

  showImage(currentImage);
}