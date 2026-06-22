          // 1. Hole alle wichtigen Elemente aus dem HTML
    			const body = document.body;
                              const menuIcon = document.querySelector('.menuIcon');
    			const closeBtn = document.querySelector('#menu .close');

    			// 2. Funktion: Menü öffnen
    			if (menuIcon) {
        			menuIcon.addEventListener('click', function(event) {
            			event.preventDefault(); // Verhindert das Springen der Seite durch das '#' im Link
            			body.classList.add('is-menu-visible'); // Fügt die Klasse hinzu, die das CSS triggert
        			});
    			}

    			// 3. Funktion: Menü schließen über das "X"
    			if (closeBtn) {
        			closeBtn.addEventListener('click', function(event) {
            			event.preventDefault();
           				body.classList.remove('is-menu-visible'); // Entfernt die Klasse wieder
        			});
    			}

    			// 4. Funktion: Menü schließen, wenn man neben das Menü klickt (auf das Schutzschild)
    			// Wir warten, bis das Schutzschild (:before) im HTML erzeugt wird
    			window.addEventListener('click', function(event) {
       				// Wenn das Menü offen ist und der Klick NICHT auf das Menü oder den Toggle-Button ging
        			if (body.classList.contains('is-menu-visible') && 
            			!event.target.closest('#menu') && 
            			!event.target.closest('.menuToggle')) {
            			body.classList.remove('is-menu-visible');
        			}
    			});
