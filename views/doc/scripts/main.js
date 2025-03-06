document.addEventListener('DOMContentLoaded', function() {
    // Animación en el scroll
    const animateElements = document.querySelectorAll('.animate');

    function checkIfInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Estado inicial de las animaciones
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // Verificar visibilidad en carga y desplazamiento
    window.addEventListener('load', checkIfInView);
    window.addEventListener('scroll', checkIfInView);
});