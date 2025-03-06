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
    
    // Cerrar modal de observaciones
    document.getElementById('btn-cerrar-modal').addEventListener('click', function() {
        modal.classList.remove('active');
    });
    
    document.querySelectorAll('.btn-cancelar').forEach(btn => {
        btn.addEventListener('click', function() {
            modal.classList.remove('active');
        });
    });
    
    // Guardar formulario de observaciones
    document.getElementById('form-observacion').addEventListener('submit', function(e) {
        e.preventDefault();
        modal.classList.remove('active');
        
        // Mostrar notificación
        const notification = document.getElementById('notification');
        document.getElementById('notification-message').textContent = 'Observación guardada correctamente';
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    });
    
    // Guardar calificaciones
    document.getElementById('guardar').addEventListener('click', function() {
        // Recalcular definitivas antes de guardar
        calcularDefinitivas();
        
        // Mostrar notificación
        const notification = document.getElementById('notification');
        document.getElementById('notification-message').textContent = 'Calificaciones guardadas correctamente';
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    });
    
    // Mostrar modal de historial
    document.getElementById('ver-historial').addEventListener('click', function() {
        document.getElementById('modal-historial').classList.add('active');
    });
    
    // Cerrar modal de historial
    document.getElementById('btn-cerrar-historial').addEventListener('click', function() {
        document.getElementById('modal-historial').classList.remove('active');
    });
    
    // Calcular definitivas cuando cambian las notas
    const notasInputs = document.querySelectorAll('.nota-input');
    notasInputs.forEach(input => {
        input.addEventListener('change', calcularDefinitivas);
    });
    
    // Función para calcular las definitivas
    function calcularDefinitivas() {
        const filas = document.querySelectorAll('#tabla-calificaciones tr');
        
        filas.forEach(fila => {
            const nota1 = parseFloat(fila.querySelector('input[name="nota1"]').value) || 0;
            const nota2 = parseFloat(fila.querySelector('input[name="nota2"]').value) || 0;
            const nota3 = parseFloat(fila.querySelector('input[name="nota3"]').value) || 0;
            
            // Cálculo ponderado: 30% + 30% + 40%
            const definitiva = (nota1 * 0.3) + (nota2 * 0.3) + (nota3 * 0.4);
            
            // Actualizar la celda de definitiva con un decimal
            fila.querySelector('.nota-definitiva').textContent = definitiva.toFixed(1);
            
            // Aplicar color según la nota
            const celdaDefinitiva = fila.querySelector('.nota-definitiva');
            if (definitiva >= 4.5) {
                celdaDefinitiva.style.color = '#2ecc71'; // Verde para notas excelentes
            } else if (definitiva >= 3.5) {
                celdaDefinitiva.style.color = '#3498db'; // Azul para notas buenas
            } else if (definitiva >= 3.0) {
                celdaDefinitiva.style.color = '#f39c12'; // Naranja para notas básicas
            } else {
                celdaDefinitiva.style.color = '#e74c3c'; // Rojo para notas insuficientes
            }
        });
    }
    
    // Calcular definitivas al cargar la página
    calcularDefinitivas();