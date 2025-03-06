/**
 * Módulo de Gestión de Usuarios - INFOJIS
 * Permite crear, editar, eliminar y listar usuarios del sistema
 */

document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const btnNuevoUsuario = document.getElementById('btn-nuevo-usuario');
    const modalUsuario = document.getElementById('modal-usuario');
    const btnCerrarModal = document.getElementById('btn-cerrar-modal');
    const formUsuario = document.getElementById('form-usuario');
    const modalTitulo = document.getElementById('modal-titulo');
    const usuarioId = document.getElementById('usuario-id');
    const fotoInput = document.getElementById('foto-input');
    const fotoPreview = document.getElementById('foto-preview');
    const botonesEditar = document.querySelectorAll('.btn-editar');
    const botonesEliminar = document.querySelectorAll('.btn-eliminar');
    const modalConfirmar = document.getElementById('modal-confirmar');
    const btnCerrarConfirmacion = document.getElementById('btn-cerrar-confirmacion');
    const btnCancelarEliminar = document.getElementById('btn-cancelar-eliminar');
    const btnConfirmarEliminar = document.getElementById('btn-confirmar-eliminar');
    const nombreUsuarioEliminar = document.getElementById('nombre-usuario-eliminar');
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    
    // Datos simulados de usuarios
    let usuarios = [
        { 
            id: 'U001', 
            nombre: 'Luz Marina Ospino Díaz', 
            email: 'luz.ospino@infojis.edu',
            rol: 'docente',
            estado: 'activo',
            fechaCreacion: '15/01/2025',
            foto: '../../imagenes/perfil-foto.jpg'
        },
        { 
            id: 'U002', 
            nombre: 'Carlos Martínez Rojas', 
            email: 'carlos.martinez@infojis.edu',
            rol: 'administrador',
            estado: 'activo',
            fechaCreacion: '20/01/2025',
            foto: '../../imagenes/user-fond.jpeg'
        },
        { 
            id: 'U003', 
            nombre: 'María Fernanda Torres', 
            email: 'maria.torres@infojis.edu',
            rol: 'docente',
            estado: 'inactivo',
            fechaCreacion: '25/01/2025',
            foto: '../../imagenes/user-fond.jpeg'
        },
        { 
            id: 'U004', 
            nombre: 'Santiago Pérez Gómez', 
            email: 'santiago.perez@infojis.edu',
            rol: 'docente',
            estado: 'activo',
            fechaCreacion: '01/02/2025',
            foto: '../../imagenes/user-fond.jpeg'
        }
    ];

    // Variable para almacenar el ID del usuario a eliminar
    let usuarioAEliminar = null;

    /**
     * Muestra el modal para crear un nuevo usuario
     */
    function mostrarModalNuevoUsuario() {
        // Limpiar el formulario
        formUsuario.reset();
        usuarioId.value = '';
        fotoPreview.src = '../../imagenes/user-fond.jpeg';
        
        // Cambiar el título del modal
        modalTitulo.textContent = 'Nuevo Usuario';
        
        // Mostrar el modal
        modalUsuario.classList.add('active');
    }

    /**
     * Cierra el modal de usuario
     */
    function cerrarModalUsuario() {
        modalUsuario.classList.remove('active');
    }

    /**
     * Abre el modal para editar un usuario existente
     * @param {string} id - ID del usuario a editar
     */
    function editarUsuario(id) {
        // Buscar el usuario por ID
        const usuario = usuarios.find(u => u.id === id);
        
        if (usuario) {
            // Llenar el formulario con los datos del usuario
            usuarioId.value = usuario.id;
            document.getElementById('usuario-nombre').value = usuario.nombre;
            document.getElementById('usuario-email').value = usuario.email;
            document.getElementById('usuario-rol').value = usuario.rol;
            document.getElementById('usuario-estado').value = usuario.estado;
            document.getElementById('usuario-password').value = '********'; // Contraseña de ejemplo
            document.getElementById('usuario-password-confirm').value = '********'; // Contraseña de ejemplo
            fotoPreview.src = usuario.foto;
            
            // Cambiar el título del modal
            modalTitulo.textContent = 'Editar Usuario';
            
            // Mostrar el modal
            modalUsuario.classList.add('active');
        }
    }

    /**
     * Abre el modal de confirmación para eliminar un usuario
     * @param {string} id - ID del usuario a eliminar
     */
    function confirmarEliminarUsuario(id) {
        // Buscar el usuario por ID
        const usuario = usuarios.find(u => u.id === id);
        
        if (usuario) {
            // Guardar el ID del usuario a eliminar
            usuarioAEliminar = id;
            
            // Actualizar el mensaje de confirmación con el nombre del usuario
            nombreUsuarioEliminar.textContent = usuario.nombre;
            
            // Mostrar el modal de confirmación
            modalConfirmar.classList.add('active');
        }
    }

    /**
     * Cierra el modal de confirmación
     */
    function cerrarModalConfirmacion() {
        modalConfirmar.classList.remove('active');