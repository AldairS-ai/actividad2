// Cambiar tema
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', function() {
            // Desactivar todas las opciones
            document.querySelectorAll('.theme-option').forEach(opt => {
                opt.classList.remove('active');
            });
            
            // Activar la opción seleccionada
            this.classList.add('active');
        });
    });
    
    // Validación de contraseña
    document.getElementById('confirm-password').addEventListener('input', function() {
        const newPassword = document.getElementById('new-password').value;
        if (this.value !== newPassword) {
            this.setCustomValidity('Las contraseñas no coinciden');
        } else {
            this.setCustomValidity('');
        }
    });
    
    // Guardar configuración
    document.getElementById('guardar-config').addEventListener('click', function() {
        // Mostrar notificación
        const notification = document.getElementById('notification');
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    });