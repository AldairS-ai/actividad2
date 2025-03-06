// Toggle sidebar solo en móviles
document.getElementById('sidebar-toggle').addEventListener('click', function() {
    if (window.innerWidth <= 992) { // Solo ejecutar en pantallas pequeñas
        document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('sidebar-overlay').classList.toggle('active');
        document.getElementById('main-content').classList.toggle('expanded');
    }
});
    
    // Cerrar sidebar cuando se hace clic en el overlay
    document.getElementById('sidebar-overlay').addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('active');
        document.getElementById('sidebar-overlay').classList.remove('active');
    });