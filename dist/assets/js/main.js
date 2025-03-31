const logo = document.getElementById('logo');

// Cuando termina la animación inicial...
logo.addEventListener('animationend', () => {
    logo.classList.add('logo-final'); // Mantiene el estado final
});

// Cuando el mouse sale del logo, se mantiene en el estado final sin reiniciar la caída
logo.addEventListener('mouseleave', () => {
    logo.classList.add('logo-final'); // Evita que vuelva a caer después del hover
});


// Efecto hover en tarjetas
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const x = e.clientX - card.getBoundingClientRect().left;
        const y = e.clientY - card.getBoundingClientRect().top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});

// Crear partículas dinámicas
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Posición aleatoria
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Animación única para cada partícula
    particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    
    particlesContainer.appendChild(particle);
}