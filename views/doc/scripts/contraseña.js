
document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('email-form');
    const codeForm = document.getElementById('code-form');
    const passwordForm = document.getElementById('password-form');
    let verificationCode = ""; // Código de verificación generado

    // **Paso 1: Ingreso de Email**
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('recovery-email').value.trim();

        if (!isValidEmail(email)) {
            showAlert('Por favor, ingresa un correo electrónico válido.', 'error');
            return;
        }

        // Simular envío de código
        verificationCode = generateVerificationCode();
        showAlert(`Código de verificación enviado: ${verificationCode}`, 'success'); // Simulación
        goToStep(2);
    });

    // **Paso 2: Verificación del Código**
    codeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const code = document.getElementById('verification-code').value.trim();

        if (code !== verificationCode) {
            showAlert('Código incorrecto. Inténtalo de nuevo.', 'error');
            return;
        }

        goToStep(3);
    });

    // **Paso 3: Creación de Nueva Contraseña**
    passwordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newPassword = document.getElementById('new-password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();

        if (newPassword !== confirmPassword) {
            showAlert('Las contraseñas no coinciden. Inténtalo de nuevo.', 'error');
            return;
        }

        if (!isStrongPassword(newPassword)) {
            showAlert('La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y un carácter especial.', 'error');
            return;
        }

        showSuccess();
    });

    // **Cambiar de paso en el proceso**
    function goToStep(step) {
        document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.indicator').forEach(el => el.classList.remove('active'));

        const currentStep = document.getElementById(`step-${step}`);
        if (currentStep) {
            currentStep.classList.add('active');
            document.querySelector(`.indicator[data-step="${step}"]`)?.classList.add('active');
        }
    }

    // **Mostrar mensaje de éxito al restablecer contraseña**
    function showSuccess() {
        document.querySelector('.recovery-steps').style.display = 'none';
        document.querySelector('.step-indicator').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';
    }

    // **Generar un código de verificación aleatorio**
    function generateVerificationCode() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    // **Validar Email**
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // **Validar Seguridad de la Contraseña**
    function isStrongPassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    // **Mostrar Alertas**
    function showAlert(message, type) {
        alert(message); // Puedes reemplazar esto con un modal o notificación en el frontend
    }
});