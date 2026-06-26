// Seleccionamos todas las secciones de tus moodboards
const sections = document.querySelectorAll('section');
let currentIndex = 0;
let isTransitioning = false; // Evita que se dupliquen transiciones al presionar rápido

// Inicializamos mostrando la primera sección (Moodboard 1)
sections[currentIndex].classList.add('visible');

function changeSection(direction) {
    if (isTransitioning) return;
    
    let nextIndex = currentIndex + direction;
    
    // Validamos límites (no pasarse de la primera ni de la última sección)
    if (nextIndex >= 0 && nextIndex < sections.length) {
        isTransitioning = true;
        
        // Desvanecer sección actual
        sections[currentIndex].classList.remove('visible');
        
        // Actualizar índice
        currentIndex = nextIndex;
        
        // Mostrar nueva sección con Fade
        sections[currentIndex].classList.add('visible');
        
        // Bloqueo temporal mientras dura la animación de CSS (0.8s = 800ms)
        setTimeout(() => {
            isTransitioning = false;
        }, 800);
    }
}

// Escuchamos el teclado del usuario (Flechas y teclado estándar)
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        changeSection(1); // Avanza a la siguiente sección
    } else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        changeSection(-1); // Regresa a la sección anterior
    }
});

// OPCIONAL: Si el usuario usa la rueda del mouse, también cambia con fade
window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        changeSection(1);
    } else if (e.deltaY < 0) {
        changeSection(-1);
    }
}, { passive: true });