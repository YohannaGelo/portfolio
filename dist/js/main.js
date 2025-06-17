// Selecciona todos los enlaces que apunten a un ID (anclajes)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === "#" || href === "!" || href === "javascript:void(0)") return;
        // Ignorar los que no apuntan a ningún ID válido

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


// Inicializa EmailJS con tu Public Key
// emailjs.init('Fenwkx_a5_6--uPQ8');

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formFeedback = document.getElementById('form-feedback');

    // Validación en tiempo real
    form.addEventListener('input', (e) => {
        const input = e.target;
        if (input.validity.valid) {
            hideError(input);
        }
    });

    // Envío con EmailJS
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="mr-2">⏳</span> Procesando...';

        try {
            // Envía el correo de confirmación al usuario
            await emailjs.sendForm(
                'service_zyc35ce',
                'template_dmvn59c',
                form
            );

            // Envía el correo con el mensaje del usuario a ti
            await emailjs.sendForm(
                'service_zyc35ce',
                'template_u1pqmi9',
                form
            );

            showFeedback('✅ Mensaje enviado con éxito. ¡Te responderé pronto!', 'bg-green-900/50');
            form.reset();
        } catch (error) {
            showFeedback('❌ Error al enviar. Por favor, inténtalo de nuevo.', 'bg-red-900/50');
            console.error('Error:', error);
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span class="mr-2">💻</span> Ejecutar código';
        }
    });

    // Funciones auxiliares
    function validateForm() {
        let isValid = true;

        if (!form.name.validity.valid) {
            showError(form.name, 'Mínimo 3 caracteres');
            isValid = false;
        }

        if (!form.email.validity.valid) {
            showError(form.email, 'Ingresa un email válido');
            isValid = false;
        }

        if (!form.title.validity.valid) {
            showError(form.title, 'Por favor, ingresa un título para tu mensaje');
            isValid = false;
        }

        if (!form.message.validity.valid) {
            showError(form.message, 'Mínimo 10 caracteres');
            isValid = false;
        }

        return isValid;
    }

    function showError(input, message) {
        const errorElement = document.getElementById(`${input.id}-error`);
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
        input.classList.add('border-pink-500');
    }

    function hideError(input) {
        const errorElement = document.getElementById(`${input.id}-error`);
        errorElement.classList.add('hidden');
        input.classList.remove('border-pink-500');
    }

    function showFeedback(message, bgClass) {
        formFeedback.textContent = message;
        formFeedback.className = `${bgClass} mt-4 p-3 rounded text-center`;
        formFeedback.classList.remove('hidden');
        setTimeout(() => formFeedback.classList.add('hidden'), 5000);
    }
});


const logo = document.getElementById('logo');

// Cuando termina la animación inicial...
logo.addEventListener('animationend', () => {
    logo.classList.add('logo-final'); // Mantiene el estado final
});

// Cuando el mouse sale del logo, se mantiene en el estado final sin reiniciar la caída
logo.addEventListener('mouseleave', () => {
    logo.classList.add('logo-final'); // Evita que vuelva a caer después del hover
});

// Comportamiento del nav
document.addEventListener('DOMContentLoaded', () => {
    // Toggle del menú móvil
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
        // Animación
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.style.transform = 'scale(0.95) translateY(-10px)';
            mobileMenu.style.opacity = '0';
            setTimeout(() => {
                mobileMenu.style.transform = 'scale(1) translateY(0)';
                mobileMenu.style.opacity = '1';
            }, 10);
        }
    });

    // Cerrar al hacer clic fuera
    document.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });

    // Prevenir cierre al hacer clic en el menú
    mobileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
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
function createParticles(containerId, count = 15) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Estilos aleatorios
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = Math.random() * 0.6 + 0.3; // Variar opacidad

        // Animación única para cada partícula
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        particle.style.animationDelay = `${Math.random() * 2}s`;

        container.appendChild(particle);
    }
}

// Crear partículas para ambos contenedores
document.addEventListener('DOMContentLoaded', () => {
    createParticles('particles'); // Para la foto
    createParticles('heroParticles', 60); // Más partículas para el hero (60 en este caso)
});


// Mostrar/ocultar botón al hacer scroll
window.addEventListener('scroll', function () {
    const scrollToTop = document.getElementById('scrollToTop');
    if (window.pageYOffset > 1000) {
        scrollToTop.classList.add('show');
    } else {
        scrollToTop.classList.remove('show');
    }
});

// Toggle del tema
// Función para cambiar el tema
function toggleTheme() {
    const html = document.documentElement;
    const isLight = html.classList.contains('light');

    if (isLight) {
        html.classList.remove('light');
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
        html.classList.add('light');
    }

    // Iconos del botón
    document.getElementById('moonIcon').classList.toggle('hidden', !isLight);
    document.getElementById('sunIcon').classList.toggle('hidden', isLight);

    // Guardar preferencia
    localStorage.setItem('theme', isLight ? 'dark' : 'light');
}


// Función para inicializar el tema al cargar la página
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
        document.getElementById('moonIcon').classList.add('hidden');
        document.getElementById('sunIcon').classList.remove('hidden');
    } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        document.getElementById('sunIcon').classList.add('hidden');
        document.getElementById('moonIcon').classList.remove('hidden');
    }
}


// Inicializar tema al cargar
document.addEventListener('DOMContentLoaded', initTheme);

// Asignar evento al botón
document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// Escuchar cambios en la preferencia del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        document.documentElement.classList.toggle('light', !e.matches);
    }
});

// Abrir modal con info de proyecto
window.openProjectModal = function (projectId) {
    const modal = document.getElementById('projectModal');
    const modalBox = document.getElementById('modalBox');
    const content = document.getElementById('modalContent');

    // Reinicia estado por si quedó una animación anterior
    modalBox.classList.remove('modal-enter', 'modal-exit');

    fetch(`proyectos/${projectId}.html`)
        .then(res => res.text())
        .then(html => {
            content.innerHTML = html;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';

            // Forzar reflow para reiniciar animación
            void modalBox.offsetWidth;

            // Aplicar animación de entrada
            modalBox.classList.add('modal-enter');
        })
        .catch(err => {
            content.innerHTML = '<p>Error al cargar el contenido.</p>';
            modal.classList.remove('hidden');
            void modalBox.offsetWidth;
            modalBox.classList.add('modal-enter');
        });
}

// Cerrar el modal
window.closeModal = function () {

    const modal = document.getElementById('projectModal');
    const modalBox = document.getElementById('modalBox');

    // Limpia entrada y fuerza reflow
    modalBox.classList.remove('modal-enter');
    void modalBox.offsetWidth;

    // Añade salida
    modalBox.classList.add('modal-exit');

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

document.addEventListener('click', (e) => {
    if (e.target.id === 'closeModal' || e.target.id === 'projectModal') {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

function showCertModal(imgUrl) {
    const modal = document.getElementById('certModal');
    const img = document.getElementById('certModalImg');
    img.src = imgUrl;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}
