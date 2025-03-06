// Abrir modal de observaciones
    const botonesObservacion = document.querySelectorAll('.btn-observacion');
    const modal = document.getElementById('modal-observacion');
    
    botonesObservacion.forEach(boton => {
        boton.addEventListener('click', function() {
            const studentName = this.getAttribute('data-student');
            document.getElementById('student-name').textContent = studentName;
            modal.classList.add('active');
        });
    });
    
    // Cerrar modal
    document.getElementById('btn-cerrar-modal').addEventListener('click', function() {
        modal.classList.remove('active');
    });
    
    document.querySelectorAll('.btn-cancelar').forEach(btn => {
        btn.addEventListener('click', function() {
            modal.classList.remove('active');
        });
    });
    
    // Guardar formulario
    document.getElementById('form-observacion').addEventListener('submit', function(e) {
        e.preventDefault();
        modal.classList.remove('active');
        
        // Mostrar notificación
        const notification = document.getElementById('notification');
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    });
    
    // Guardar asistencias
    document.getElementById('guardar').addEventListener('click', function() {
        // Mostrar notificación
        const notification = document.getElementById('notification');
        document.getElementById('notification-message').textContent = 'Asistencias guardadas correctamente';
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    });