// Esperar a que el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', function() {
      // Elementos del DOM
      const botonIngresar = document.getElementById('boton-ingresar');
      const botonRegistrar = document.getElementById('boton-registrar');
      const overlay = document.getElementById('overlay');
      const loginForm = document.getElementById('login-form');
      const closeLoginBtn = document.getElementById('close-login');
      const loginFormElement = document.querySelector('.login-form');

      // Mostrar el formulario de inicio de sesión
      function mostrarFormularioLogin() {
        overlay.style.display = 'block';
        loginForm.style.display = 'block';
        // Añadir una pequeña animación
        setTimeout(() => {
          loginForm.style.opacity = '1';
          loginForm.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 10);
      }

      // Ocultar el formulario de inicio de sesión
      function ocultarFormularioLogin() {
        loginForm.style.opacity = '0';
        loginForm.style.transform = 'translate(-50%, -50%) scale(0.9)';
        setTimeout(() => {
          overlay.style.display = 'none';
          loginForm.style.display = 'none';
        }, 300);
      }

      // Event Listeners
      botonIngresar.addEventListener('click', function(e) {
        e.preventDefault();
        mostrarFormularioLogin();
      });

      // Cuando se hace clic en el botón registrar, se navega a la página de registro
      botonRegistrar.addEventListener('click', function(e) {
        e.preventDefault();
        // Puedes cambiar esta redirección según la ruta de tu aplicación
        window.location.href = 'views/doc/view/registro-usuario.html';
      });

      // Cerrar el formulario de inicio de sesión cuando se hace clic en el botón de cerrar
      closeLoginBtn.addEventListener('click', function() {
        ocultarFormularioLogin();
      });

      // Cerrar el formulario cuando se hace clic en el overlay
      overlay.addEventListener('click', function() {
        ocultarFormularioLogin();
      });

      // Prevenir que se cierre el formulario cuando se hace clic dentro del formulario
      loginForm.addEventListener('click', function(e) {
        e.stopPropagation();
      });

      // Manejar el envío del formulario de inicio de sesión
      loginFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Aquí puedes agregar la lógica de autenticación
        // Por ejemplo, verificar las credenciales con una API
        
        console.log('Intento de inicio de sesión:', { email, password });
        
        // Ejemplo simple (reemplazar con tu lógica real)
        if (email && password) {
          // Simulación de inicio de sesión exitoso
          // En un caso real, aquí validarías con tu backend
          
          // Redirigir al usuario al dashboard después del inicio de sesión
          window.location.href = 'views/docente/inicio.html';
        } else {
          alert('Por favor ingresa un usuario y contraseña válidos');
        }
      });

      // Efecto de animación para las características
      const features = document.querySelectorAll('.feature-card');
      
      // Función para verificar si un elemento está en el viewport
      function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      // Aplicar animaciones cuando los elementos entran en el viewport
      function handleScrollAnimations() {
        features.forEach((feature, index) => {
          if (isInViewport(feature)) {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
          }
        });
      }
      
      // Año actual para el copyright del footer
      const yearElement = document.getElementById('current-year');
      if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
      }

      // Ejecutar la función de animación al cargar la página y al hacer scroll
      window.addEventListener('scroll', handleScrollAnimations);
      window.addEventListener('load', handleScrollAnimations);
      
      // Scroll suave para enlaces internos
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const href = this.getAttribute('href');
          
          // Ignorar enlaces que no son anclas internas
          if (href === '#' || href.startsWith('#/')) return;
          
          e.preventDefault();
          
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    });