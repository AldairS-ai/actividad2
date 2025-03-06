// Datos para los gráficos
const datosAsistenciaSemanal = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7', 'Semana 8', 'Semana 9', 'Semana 10', 'Semana 11', 'Semana 12'],
    datasets: [
        {
            label: 'Asistencia (%)',
            data: [83.5, 85.2, 82.7, 84.8, 86.3, 87.1, 85.9, 84.2, 83.7, 85.1, 85.7, 86.5],
            borderColor: '#27ae60',
            backgroundColor: 'rgba(46, 204, 113, 0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: '#27ae60'
        },
        {
            label: 'Inasistencia (%)',
            data: [11.2, 10.5, 12.1, 10.8, 9.6, 8.9, 9.7, 10.3, 11.6, 10.1, 9.3, 8.7],
            borderColor: '#e74c3c',
            backgroundColor: 'rgba(231, 76, 60, 0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: '#e74c3c'
        },
        {
            label: 'Justificaciones (%)',
            data: [5.3, 4.3, 5.2, 4.4, 4.1, 4.0, 4.4, 5.5, 4.7, 4.8, 5.0, 4.8],
            borderColor: '#ff8c00',
            backgroundColor: 'rgba(255, 150, 0, 0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: '#ff8c00'
        }
    ]
};

const datosAsistenciaPorCurso = {
    labels: ['1° Año A', '1° Año B', '2° Año A', '2° Año B'],
    datasets: [
        {
            label: 'Asistencia (%)',
            data: [87.2, 84.5, 88.1, 83.2],
            backgroundColor: '#27ae60',
            borderColor: '#27ae60',
            borderWidth: 1
        },
        {
            label: 'Inasistencia (%)',
            data: [8.5, 10.2, 7.4, 10.9],
            backgroundColor: '#e74c3c',
            borderColor: '#e74c3c',
            borderWidth: 1
        },
        {
            label: 'Justificación (%)',
            data: [4.3, 5.3, 4.5, 5.9],
            backgroundColor: '#ff8c00',
            borderColor: '#ff8c00',
            borderWidth: 1
        }
    ]
};

const datosMotivosInasistencia = {
    labels: ['Enfermedad', 'Trámites', 'Familiar', 'Transporte', 'Sin justificar'],
    datasets: [
        {
            data: [42, 15, 18, 8, 17],
            backgroundColor: [
                '#27ae60',
                '#3498db',
                '#f39c12',
                '#9b59b6',
                '#e74c3c'
            ],
            borderWidth: 0
        }
    ]
};

// Función para inicializar todos los gráficos
function inicializarGraficos() {
    // Gráfico de evolución de asistencia semanal
    const ctxEvolucion = document.getElementById('grafico-evolucion').getContext('2d');
    new Chart(ctxEvolucion, {
        type: 'line',
        data: datosAsistenciaSemanal,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Porcentaje (%)'
                    }
                }
            }
        }
    });

    // Gráfico de asistencia por curso
    const ctxCursos = document.getElementById('grafico-cursos').getContext('2d');
    new Chart(ctxCursos, {
        type: 'bar',
        data: datosAsistenciaPorCurso,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Porcentaje (%)'
                    }
                }
            }
        }
    });

    // Gráfico de motivos de inasistencia
    const ctxMotivos = document.getElementById('grafico-motivos').getContext('2d');
    new Chart(ctxMotivos, {
        type: 'doughnut',
        data: datosMotivosInasistencia,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.raw) {
                                label += context.raw + '% del total';
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// Event Listeners para controles de filtros y periodos
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar los gráficos
    inicializarGraficos();

    // Event Listener para cambio de periodo en el gráfico de evolución
    document.getElementById('periodo-selector').addEventListener('change', function() {
        // Aquí se implementaría la lógica para cambiar los datos según el periodo
        // Por simplicidad, simularemos un cambio aleatorio
        if (this.value === 'mensual') {
            datosAsistenciaSemanal.labels = ['Marzo', 'Abril', 'Mayo', 'Junio'];
            datosAsistenciaSemanal.datasets[0].data = [84.3, 85.7, 86.1, 85.2];
            datosAsistenciaSemanal.datasets[1].data = [10.5, 9.8, 9.3, 9.7];
            datosAsistenciaSemanal.datasets[2].data = [5.2, 4.5, 4.6, 5.1];
        } else if (this.value === 'trimestral') {
            datosAsistenciaSemanal.labels = ['1er Trimestre', '2do Trimestre', '3er Trimestre'];
            datosAsistenciaSemanal.datasets[0].data = [84.7, 86.3, 85.9];
            datosAsistenciaSemanal.datasets[1].data = [10.2, 9.1, 9.4];
            datosAsistenciaSemanal.datasets[2].data = [5.1, 4.6, 4.7];
        } else {
            // Semanal (datos originales)
            datosAsistenciaSemanal.labels = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7', 'Semana 8', 'Semana 9', 'Semana 10', 'Semana 11', 'Semana 12'];
            datosAsistenciaSemanal.datasets[0].data = [83.5, 85.2, 82.7, 84.8, 86.3, 87.1, 85.9, 84.2, 83.7, 85.1, 85.7, 86.5];
            datosAsistenciaSemanal.datasets[1].data = [11.2, 10.5, 12.1, 10.8, 9.6, 8.9, 9.7, 10.3, 11.6, 10.1, 9.3, 8.7];
            datosAsistenciaSemanal.datasets[2].data = [5.3, 4.3, 5.2, 4.4, 4.1, 4.0, 4.4, 5.5, 4.7, 4.8, 5.0, 4.8];
        }
        
        // Actualizar el gráfico con los nuevos datos
        const chart = Chart.getChart('grafico-evolucion');
        chart.update();
    });

    // Event Listener para el botón de filtrar
    document.querySelector('.btn-filtrar').addEventListener('click', function() {
        // Simulación de carga de datos
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando...';
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-filter"></i> Filtrar';
            // Se podría implementar lógica real para filtrar datos
            // Por ahora solo mostramos una notificación
            mostrarNotificacion('Filtros aplicados correctamente', 'success');
            
            // Simulamos cambios en las estadísticas
            document.querySelector('.card-stats:nth-child(1) .card-stats-number').textContent = '87.2%';
            document.querySelector('.card-stats:nth-child(2) .card-stats-number').textContent = '8.1%';
            document.querySelector('.card-stats:nth-child(3) .card-stats-number').textContent = '4.7%';
            
            // Actualizamos todos los gráficos
            const charts = Object.values(Chart.instances);
            charts.forEach(chart => chart.update());
        }, 1500);
    });

    // Event Listener para el botón de exportar
    document.querySelector('.btn-exportar').addEventListener('click', function() {
        // Simulación de generación de reporte
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generando...';
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-download"></i> Exportar';
            mostrarNotificacion('Reporte generado correctamente', 'success');
        }, 2000);
    });
});

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo) {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    
    // Definir icono según tipo
    let icono = 'check-circle';
    if (tipo === 'error') icono = 'times-circle';
    if (tipo === 'warning') icono = 'exclamation-triangle';
    if (tipo === 'info') icono = 'info-circle';
    
    // Agregar contenido
    notificacion.innerHTML = `
        <i class="fas fa-${icono}"></i>
        <span>${mensaje}</span>
    `;
    
    // Agregar a la página
    document.body.appendChild(notificacion);
    
    // Mostrar con animación
    setTimeout(() => {
        notificacion.classList.add('mostrar');
    }, 10);
    
    // Eliminar después de 5 segundos
    setTimeout(() => {
        notificacion.classList.remove('mostrar');
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 5000);
}