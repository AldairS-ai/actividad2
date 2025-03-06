// Mostrar hora actual
function actualizarHora() {
    const ahora = new Date();
    const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
        
    document.querySelector('.filter-content p').textContent = ahora.toLocaleDateString('es-ES', opciones);
    }
    
// Actualizar saludo según la hora
function actualizarSaludo() {
    const hora = new Date().getHours();
    let saludo = '¡Buenos días, Luz!';
        
    if (hora >= 12 && hora < 18) {
        saludo = '¡Buenas tardes, Luz!';
    } else if (hora >= 18) {
        saludo = '¡Buenas noches, Luz!';
    }
        
    document.querySelector('.filter-content h2').textContent = saludo;
}

// Iniciar funciones al cargar la página
window.addEventListener('load', function() {
    actualizarHora();
    actualizarSaludo();
});