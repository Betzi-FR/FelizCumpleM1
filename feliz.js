

const confettiColors = [
  '#FFFFFF', // blanco
  '#F9A8C4', // rosa claro
  '#F4D06F'  // dorado suave
];

// Función del confeti (Corregida con protección de errores)
function lanzarConfeti() {
    try {
        const duration = randomInRange; // 15 segundos
        const animationEnd = Date.now() + duration;

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            // Verificamos si la librería "confetti" existe antes de llamarla
            if (typeof confetti === 'function') {
                confetti({
                    startVelocity: 30,
                    spread: 90,
                    colors:confettiColors,
                    origin: { x: Math.random() * (0.3 - 0.1) + 0.1, y: Math.random() - 0.2 }
                });
                confetti({
                    startVelocity: 30,
                    spread: 90,
                    colors:confettiColors,
                    origin: { x: Math.random() * (0.9 - 0.7) + 0.7, y: Math.random() - 0.2 }
            });
                             
            }
        }, 250);
    } catch (e) {
        console.warn("La librería de confeti no está cargada correctamente.");
    }
}

// Función de la música
function reproducirMusica() {
    const audio = document.getElementById('musica');
    if (audio) {
        audio.volume = 0.5;
        audio.play().catch(error => {
            console.log("El navegador bloqueó el audio, esperando clic.");
        });
    }
}
function activarControlVolumen() {
    const audio = document.getElementById('musica');
    const slider = document.getElementById('slider-volumen');

    if (audio && slider) {
        slider.addEventListener('input', function() {
            // Ajusta el volumen del audio (0.0 a 1.0)
            audio.volume = this.value;
        });
    }
}

// Llamamos a la función
activarControlVolumen();

// --- PUNTO DE ARRANQUE SEGURO ---
window.addEventListener('load', () => {
    
    lanzarConfeti();
    setTimeout(reproducirMusica, 500);
    
});

// Respaldo para la música por bloqueo de navegador
document.body.addEventListener('click', () => {
    reproducirMusica();
}, { once: true });


function crearMensajesLocos() {
    const contenedor = document.querySelector('.contenedor-me');
    if (!contenedor) return;

    const frases = ["Te amo", "Eres la mejor del 🌎", "❤️", "Siempre juntas", "Eres mi todo", "Bonita", "Mi vida", "VIEJA APESTOSA"];

    setInterval(function() {
        const msj = document.createElement("div");
        msj.className = "mensaje-flotante";
        msj.innerText = frases[Math.floor(Math.random() * frases.length)];

        // Detectar si la pantalla es vertical (celular)
        const esVertical = window.innerHeight > window.innerWidth;
        
        let x;
        if (esVertical) {
            // En celular: Forzado al puro centro (entre 40% y 60%)
            // Esto evita que cualquier parte del cuadro toque los bordes
            x = Math.random() * 20 + 40; 
        } else {
            // En monitor: Todo el ancho disponible
            x = Math.random() * 70 + 15;
        }

        const y = Math.random() * 60 + 20; // Evitamos que salgan pegados arriba o abajo
        
        msj.style.left = x + "vw";
        msj.style.top = y + "vh";

        const rot = (Math.random() - 0.5) * 10; // Rotación mínima para evitar recortes
        msj.style.transform = "translate(-50%, -50%) rotate(" + rot + "deg)";

        contenedor.appendChild(msj);

        setTimeout(function() {
            msj.remove();
        }, 4000);
    }, 1800);
}

crearMensajesLocos();