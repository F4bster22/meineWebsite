const confettiCanvas = document.querySelector('#confetti-canvas');

if (confettiCanvas) {
	const ctx = confettiCanvas.getContext('2d');
	let confettiPieces = [];
	let animationId;

	const colors = [
		'#221d41',
		'#d4cec3',
		'#db9d28',
		'#8b7e66',
		'#3a0101',
		'#c5d9f0'
	];

	const gravity = 0.02;

	function resizeCanvas() {
		confettiCanvas.width = window.innerWidth;
		confettiCanvas.height = window.innerHeight;
	}


	function createConfettiPiece() {
		const isMobileConfetti = window.matchMedia('(max-width: 720px), (orientation: portrait)').matches;
		const shootFromLeft = Math.random() < 0.5;
		const outsideLimit = window.matchMedia('(max-width: 720px), (orientation: portrait)').matches ? 30 : 80;

		const sideOffset = isMobileConfetti ? 5 : 20;
		const minSpeedX = isMobileConfetti ? 1 : 2.5;
		const maxExtraSpeedX = isMobileConfetti ? 2 : 7;

		return {
			x: shootFromLeft ? -sideOffset : confettiCanvas.width + sideOffset,
			y: confettiCanvas.height + 20,

			size: Math.random() * 8 + 5,

			// Seitlicher Schuss ins Bild — mobil deutlich schwächer
			speedX: shootFromLeft
				? Math.random() * maxExtraSpeedX + minSpeedX
				: -(Math.random() * maxExtraSpeedX + minSpeedX),

			// Negativ = nach oben
			speedY: -(Math.random() * 6 + 1),

			rotation: Math.random() * 360,
			rotationSpeed: Math.random() * 10 - 5,

			color: colors[Math.floor(Math.random() * colors.length)]
		};
	}

	function createConfetti() {
		confettiPieces = [];

		for (let i = 0; i < 200; i++) {
			confettiPieces.push(createConfettiPiece());
		}
	}

	function drawConfettiPiece(piece) {
		ctx.save();
		ctx.translate(piece.x, piece.y);
		ctx.rotate(piece.rotation * Math.PI / 180);
		ctx.fillStyle = piece.color;
		ctx.fillRect(
			-piece.size / 2,
			-piece.size / 2,
			piece.size,
			piece.size * 0.55
		);
		ctx.restore();
	}

	function updateConfetti() {
		ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

		confettiPieces.forEach(function(piece) {
			// Bewegung
			piece.x += piece.speedX;
			piece.y += piece.speedY;

			// Schwerkraft: erst hoch, dann langsamer, dann runter
			piece.speedY += gravity;

			// leichte horizontale Beruhigung
			piece.speedX *= 0.99;

			// Drehung
			piece.rotation += piece.rotationSpeed;

			drawConfettiPiece(piece);
		});

		// Entfernen, wenn Teil komplett aus dem sichtbaren Bereich gefallen/geflogen ist
		confettiPieces = confettiPieces.filter(function(piece) {
			return (
				piece.y < confettiCanvas.height + piece.size + 40 &&
				piece.x > -80 &&
				piece.x < confettiCanvas.width + 80
			);
		});

		if (confettiPieces.length > 0) {
			animationId = requestAnimationFrame(updateConfetti);
		} else {
			ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
			cancelAnimationFrame(animationId);
		}
	}

	function startConfetti() {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (prefersReducedMotion) {
			return;
		}

		resizeCanvas();
		createConfetti();
		updateConfetti();
	}

	window.addEventListener('resize', resizeCanvas);
	window.addEventListener('load', function () {
		setTimeout(startConfetti, 500);
	});
};

