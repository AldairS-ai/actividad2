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

    // Manejo de pestañas
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Activar la pestaña actual
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Mostrar el contenido correspondiente
        document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
        document.getElementById('tab-' + tabId).style.display = 'block';
      });
    });

    // Navegar a la pestaña de registro cuando hacen clic en "Nuevo Estudiante"
    document.getElementById('btn-nuevo-estudiante').addEventListener('click', function() {
      document.querySelector('[data-tab="registro"]').click();
    });

    // Modal de Eliminación
    const botonesEliminar = document.querySelectorAll('.btn-delete');
    const modalEliminar = document.getElementById('modal-eliminar');
    
    botonesEliminar.forEach(boton => {
      boton.addEventListener('click', function() {
        const fila = this.closest('tr');
        const nombreEstudiante = fila.querySelector('.student-name').textContent;
        document.getElementById('estudiante-eliminar').textContent = nombreEstudiante;
        modalEliminar.classList.add('active');
      });
    });
    
    // Cerrar modal de eliminación
    document.getElementById('btn-cerrar-modal-eliminar').addEventListener('click', function() {
      modalEliminar.classList.remove('active');
    });
    
    document.querySelectorAll('#modal-eliminar .btn-cancelar').forEach(btn => {
      btn.addEventListener('click', function() {
        modalEliminar.classList.remove('active');
      });
    });

    // Confirmar eliminación
    document.querySelector('.btn-eliminar-confirmar').addEventListener('click', function() {
      modalEliminar.classList.remove('active');
      
      // Mostrar notificación
      const notification = document.getElementById('notification');
      document.getElementById('notification-message').textContent = 'Estudiante eliminado correctamente';
      notification.classList.add('show');
      
      setTimeout(() => {
        notification.classList.remove('show');
      }, 3000);
    });

    
    // Modal de Detalles
const botonesVer = document.querySelectorAll('.btn-view');
const modalDetalles = document.getElementById('modal-detalles');

botonesVer.forEach(boton => {
  boton.addEventListener('click', function() {
    const fila = this.closest('tr');
    const nombreEstudiante = fila.querySelector('.student-name').textContent;
    const detallesContainer = document.getElementById('detalles-estudiante');
    
    // Simulación de carga de datos del estudiante
    detallesContainer.innerHTML = `
      <div class="student-profile">
        <div class="profile-header">
          <img src="../../imagenes/user-fond.jpeg" alt="Foto del estudiante" class="profile-image">
          <div class="profile-info">
            <h4>${nombreEstudiante}</h4>
            <span class="student-id">ID: ${fila.cells[0].textContent}</span>
            <span class="status-badge status-${fila.querySelector('.status-badge').classList.contains('status-active') ? 'active' : fila.querySelector('.status-badge').classList.contains('status-pending') ? 'pending' : 'inactive'}">
              ${fila.querySelector('.status-badge').textContent}
            </span>
          </div>
        </div>
        
        <div class="profile-sections">
          <div class="profile-section">
            <h5><i class="fas fa-user"></i> Datos Personales</h5>
            <div class="profile-data">
              <div class="data-row">
                <strong>Nombre Completo:</strong>
                <span>${nombreEstudiante}</span>
              </div>
              <div class="data-row">
                <strong>Documento:</strong>
                <span>RC 1041783456</span>
              </div>
              <div class="data-row">
                <strong>Fecha de Nacimiento:</strong>
                <span>15/06/2020</span>
              </div>
              <div class="data-row">
                <strong>Género:</strong>
                <span>${nombreEstudiante.includes('María') || nombreEstudiante.includes('Ana') || nombreEstudiante.includes('Valentina') ? 'Femenino' : 'Masculino'}</span>
              </div>
            </div>
          </div>
          
          <div class="profile-section">
            <h5><i class="fas fa-graduation-cap"></i> Datos Académicos</h5>
            <div class="profile-data">
              <div class="data-row">
                <strong>Curso:</strong>
                <span>${fila.cells[3].textContent}</span>
              </div>
              <div class="data-row">
                <strong>Grupo:</strong>
                <span>${fila.cells[4].textContent}</span>
              </div>
              <div class="data-row">
                <strong>Jornada:</strong>
                <span>Mañana</span>
              </div>
              <div class="data-row">
                <strong>Fecha de Ingreso:</strong>
                <span>${fila.querySelector('.student-id').textContent.split('Ingreso: ')[1]}</span>
              </div>
            </div>
          </div>
          
          <div class="profile-section">
            <h5><i class="fas fa-address-book"></i> Datos de Contacto</h5>
            <div class="profile-data">
              <div class="data-row">
                <strong>Dirección:</strong>
                <span>Calle 45 #23-78, Barrio Centro</span>
              </div>
              <div class="data-row">
                <strong>Teléfono:</strong>
                <span>3157894561</span>
              </div>
              <div class="data-row">
                <strong>Email:</strong>
                <span>acudiente_${nombreEstudiante.split(' ')[0].toLowerCase()}@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div class="profile-section">
            <h5><i class="fas fa-user-friends"></i> Datos del Acudiente</h5>
            <div class="profile-data">
              <div class="data-row">
                <strong>Nombre:</strong>
                <span>Pedro ${nombreEstudiante.split(' ')[1]}</span>
              </div>
              <div class="data-row">
                <strong>Parentesco:</strong>
                <span>Padre</span>
              </div>
              <div class="data-row">
                <strong>Teléfono:</strong>
                <span>3154789632</span>
              </div>
              <div class="data-row">
                <strong>Ocupación:</strong>
                <span>Comerciante</span>
              </div>
            </div>
          </div>
          
          <div class="profile-section">
            <h5><i class="fas fa-file-alt"></i> Documentos</h5>
            <div class="profile-data documents">
              <a href="#" class="document-link"><i class="fas fa-file-pdf"></i> Documento de Identidad</a>
              <a href="#" class="document-link"><i class="fas fa-file-pdf"></i> Certificado EPS</a>
              <a href="#" class="document-link"><i class="fas fa-file-pdf"></i> Certificado Académico</a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    modalDetalles.classList.add('active');
  });
});

// Cerrar modal de detalles
document.getElementById('btn-cerrar-modal-detalles').addEventListener('click', function() {
  modalDetalles.classList.remove('active');
});

document.querySelectorAll('#modal-detalles .btn-cancelar').forEach(btn => {
  btn.addEventListener('click', function() {
    modalDetalles.classList.remove('active');
  });
});

// Botón de editar desde el modal
document.querySelector('.btn-edit-modal').addEventListener('click', function() {
  modalDetalles.classList.remove('active');
  document.querySelector('[data-tab="registro"]').click();
  
  // Simulación de carga de datos en el formulario
  const nombreEstudiante = document.getElementById('detalles-estudiante').querySelector('h4').textContent.split(' ');
  document.getElementById('nombres').value = nombreEstudiante[0] + (nombreEstudiante.length > 2 ? ' ' + nombreEstudiante[1] : '');
  document.getElementById('apellidos').value = nombreEstudiante[nombreEstudiante.length - 2] + ' ' + nombreEstudiante[nombreEstudiante.length - 1];
});

// Manejo del formulario
document.getElementById('form-matricula').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Validación básica
  let valido = true;
  const camposRequeridos = document.querySelectorAll('#form-matricula [required]');
  
  camposRequeridos.forEach(campo => {
    if (!campo.value) {
      campo.classList.add('error');
      valido = false;
    } else {
      campo.classList.remove('error');
    }
  });
  
  if (valido) {
    // Mostrar notificación
    const notification = document.getElementById('notification');
    document.getElementById('notification-message').textContent = 'Estudiante matriculado correctamente';
    notification.classList.add('show');
    
    setTimeout(() => {
      notification.classList.remove('show');
      document.querySelector('[data-tab="estudiantes"]').click();
      this.reset();
    }, 3000);
  }
});

// Botón de cancelar en el formulario
document.querySelector('.form-actions .btn-cancelar').addEventListener('click', function() {
  document.getElementById('form-matricula').reset();
  document.querySelector('[data-tab="estudiantes"]').click();
});

// Funcionalidad de los filtros
document.querySelector('.btn-filtrar').addEventListener('click', function() {
  const curso = document.getElementById('select-curso').value;
  const estado = document.getElementById('select-estado').value;
  const busqueda = document.getElementById('buscar-estudiante').value.toLowerCase();
  
  const filas = document.querySelectorAll('#tabla-estudiantes tr');
  
  filas.forEach(fila => {
    const cursoFila = fila.cells[3].textContent.toLowerCase();
    const estadoFila = fila.querySelector('.status-badge').textContent.toLowerCase();
    const nombreFila = fila.querySelector('.student-name').textContent.toLowerCase();
    const idFila = fila.cells[0].textContent.toLowerCase();
    
    const coincideCurso = !curso || cursoFila.includes(curso.toLowerCase());
    const coincideEstado = !estado || estadoFila === estado.toLowerCase();
    const coincideBusqueda = !busqueda || nombreFila.includes(busqueda) || idFila.includes(busqueda);
    
    if (coincideCurso && coincideEstado && coincideBusqueda) {
      fila.style.display = '';
    } else {
      fila.style.display = 'none';
    }
  });
  
  // Actualizar contador
  const filasVisibles = Array.from(filas).filter(fila => fila.style.display !== 'none').length;
  document.querySelector('.table-details span').innerHTML = `<i class="fas fa-users"></i> ${filasVisibles} estudiantes`;
});

// Botón de exportar
document.querySelector('.btn-exportar').addEventListener('click', function() {
  alert('Exportando datos a Excel...');
  // Mostrar notificación
  const notification = document.getElementById('notification');
  document.getElementById('notification-message').textContent = 'Datos exportados correctamente';
  notification.classList.add('show');
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
});

// Visualización previa de la foto
document.getElementById('foto').addEventListener('change', function(e) {
  const archivo = e.target.files[0];
  if (archivo) {
    const lector = new FileReader();
    lector.onload = function(evento) {
      const photoPreview = document.querySelector('.photo-preview');
      photoPreview.innerHTML = `<img src="${evento.target.result}" alt="Previsualización">`;
    }
    lector.readAsDataURL(archivo);
  }
});

// Funcionalidad de paginación
document.querySelectorAll('.btn-pagina').forEach(boton => {
  boton.addEventListener('click', function() {
    alert('Cambiando a otra página...');
  });
});

// Buscador con evento de tecla
document.getElementById('buscar-estudiante').addEventListener('keyup', function(e) {
  if (e.key === 'Enter') {
    document.querySelector('.btn-filtrar').click();
  }
});

// Botones de editar en la tabla
document.querySelectorAll('.btn-edit').forEach(boton => {
  boton.addEventListener('click', function() {
    const fila = this.closest('tr');
    const nombreEstudiante = fila.querySelector('.student-name').textContent;
    
    document.querySelector('[data-tab="registro"]').click();
    
    // Simulación de carga de datos en el formulario
    const nombreParts = nombreEstudiante.split(' ');
    document.getElementById('nombres').value = nombreParts[0] + (nombreParts.length > 2 ? ' ' + nombreParts[1] : '');
    document.getElementById('apellidos').value = nombreParts[nombreParts.length - 2] + ' ' + nombreParts[nombreParts.length - 1];
    document.getElementById('grado').value = fila.cells[3].textContent.toLowerCase().replace('á', 'a').replace('í', 'i');
    document.getElementById('grupo').value = fila.cells[4].textContent;
    
    const estadoTexto = fila.querySelector('.status-badge').textContent.toLowerCase();
    document.getElementById('estado').value = estadoTexto;
  });
});