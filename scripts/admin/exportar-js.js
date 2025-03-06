/**
 * Módulo de exportación de datos para el sistema INFOJIS
 * Permite exportar datos de asistencia en diferentes formatos
 */

// Agregar el HTML del modal al documento
function agregarModalExportacion() {
  // Verificar si el modal ya existe en el DOM
  if (document.getElementById('modal-exportar')) {
    return;
  }

  // Crear el modal de exportación
  const modalHTML = `
  <div id="modal-exportar" class="modal-exportar">
    <div class="modal-exportar-contenido">
      <div class="modal-exportar-header">
        <h3><i class="fas fa-file-export"></i> Exportar datos de estudiantes</h3>
        <button class="btn-cerrar-exportar" id="btn-cerrar-exportar"><i class="fas fa-times"></i></button>
      </div>
      
      <div class="modal-exportar-body">
        <!-- Sección de formato -->
        <div class="seccion-exportar">
          <h4>Seleccione formato de exportación:</h4>
          <div class="opciones-formato">
            <div class="opcion-formato selected" data-formato="excel">
              <div class="radio-personalizado"></div>
              <span>Excel (.xlsx)</span>
            </div>
            <div class="opcion-formato" data-formato="pdf">
              <div class="radio-personalizado"></div>
              <span>PDF (.pdf)</span>
            </div>
            <div class="opcion-formato" data-formato="csv">
              <div class="radio-personalizado"></div>
              <span>CSV (.csv)</span>
            </div>
          </div>
        </div>
        
        <!-- Sección de campos a exportar -->
        <div class="seccion-exportar">
          <h4>Seleccione la información a exportar:</h4>
          <div class="opciones-campos">
            <div class="seleccionar-todos">
              <div class="checkbox-personalizado" id="check-todos"></div>
              <span style="font-weight: bold;">Seleccionar todos</span>
            </div>
            
            <div class="campos-container">
              <!-- Columna 1 -->
              <div class="campo-opcion selected" data-campo="id">
                <div class="checkbox-personalizado checked"></div>
                <span class="campo-label">ID Estudiante</span>
              </div>
              <div class="campo-opcion selected" data-campo="nombre">
                <div class="checkbox-personalizado checked"></div>
                <span class="campo-label">Nombre</span>
              </div>
              <div class="campo-opcion" data-campo="apellido">
                <div class="checkbox-personalizado"></div>
                <span class="campo-label">Apellido</span>
              </div>
              
              <!-- Columna 2 -->
              <div class="campo-opcion selected" data-campo="estado">
                <div class="checkbox-personalizado checked"></div>
                <span class="campo-label">Estado de asistencia</span>
              </div>
              <div class="campo-opcion" data-campo="observaciones">
                <div class="checkbox-personalizado"></div>
                <span class="campo-label">Observaciones</span>
              </div>
              <div class="campo-opcion selected" data-campo="fecha">
                <div class="checkbox-personalizado checked"></div>
                <span class="campo-label">Fecha</span>
              </div>
              
              <!-- Columna 3 -->
              <div class="campo-opcion" data-campo="curso">
                <div class="checkbox-personalizado"></div>
                <span class="campo-label">Curso</span>
              </div>
              <div class="campo-opcion" data-campo="asignatura">
                <div class="checkbox-personalizado"></div>
                <span class="campo-label">Asignatura</span>
              </div>
              <div class="campo-opcion" data-campo="porcentaje">
                <div class="checkbox-personalizado"></div>
                <span class="campo-label">% Asistencia</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Sección de fechas -->
        <div class="seccion-exportar">
          <h4>Periodo a exportar:</h4>
          <div class="seccion-fechas">
            <div class="grupo-fecha">
              <label for="fecha-desde">Desde:</label>
              <input type="date" id="fecha-desde" value="${getPrimerDiaMes()}">
            </div>
            <div class="grupo-fecha">
              <label for="fecha-hasta">Hasta:</label>
              <input type="date" id="fecha-hasta" value="${getUltimoDiaMes()}">
            </div>
          </div>
        </div>
      </div>
      
      <div class="modal-exportar-footer">
        <button class="btn-cancelar-exportar">Cancelar</button>
        <button class="btn-confirmar-exportar"><i class="fas fa-file-export"></i> Exportar</button>
      </div>
    </div>
  </div>
  `;

  // Agregar estilos del modal
  const estilosModal = `
  <style>
    /* Estilos del modal de exportación */
    .modal-exportar {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
      animation: fadeIn 0.3s ease;
    }

    .modal-exportar.active {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal-exportar-contenido {
      width: 90%;
      max-width: 600px;
      background-color: white;
      border-radius: 6px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      animation: slideIn 0.3s ease;
    }

    .modal-exportar-header {
      background-color: #ff6600;
      color: white;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modal-exportar-header h3 {
      margin: 0;
      font-size: 18px;
    }

    .btn-cerrar-exportar {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color 0.2s;
    }

    .btn-cerrar-exportar:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    .modal-exportar-body {
      padding: 20px;
    }

    .seccion-exportar {
      margin-bottom: 25px;
    }

    .seccion-exportar h4 {
      margin: 0 0 15px 0;
      font-size: 14px;
      color: #333;
    }

    .opciones-formato {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-bottom: 10px;
    }

    .opcion-formato {
      display: flex;
      align-items: center;
      padding: 8px 12px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
      transition: border-color 0.2s;
    }

    .opcion-formato:hover {
      border-color: #ff6600;
    }

    .opcion-formato.selected {
      border-color: #ff6600;
    }

    .radio-personalizado {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid #ddd;
      margin-right: 10px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: border-color 0.2s;
    }

    .opcion-formato.selected .radio-personalizado {
      border-color: #ff6600;
    }

    .radio-personalizado::after {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #ff6600;
      opacity: 0;
      transition: opacity 0.2s;
    }

    .opcion-formato.selected .radio-personalizado::after {
      opacity: 1;
    }

    .opciones-campos {
      background-color: #f9f9f9;
      border: 1px solid #eee;
      border-radius: 4px;
      padding: 15px;
    }

    .seleccionar-todos {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #eee;
    }

    .checkbox-personalizado {
      width: 16px;
      height: 16px;
      border: 1.5px solid #ddd;
      border-radius: 2px;
      margin-right: 10px;
      position: relative;
      cursor: pointer;
      transition: border-color 0.2s;
    }

    .checkbox-personalizado.checked {
      border-color: #ff6600;
      background-color: white;
    }

    .checkbox-personalizado.checked::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 5px;
      width: 5px;
      height: 10px;
      border: solid #ff6600;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    .campos-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 15px;
    }

    .campo-opcion {
      display: flex;
      align-items: center;
    }

    .campo-label {
      cursor: pointer;
      font-size: