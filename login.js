$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        const username = $('#username').val().trim();
        const password = $('#password').val().trim();
        const errorMessage = $('#error-message');
        
        if (username === '' || password === '') {
            errorMessage.text('Por favor, complete todos los campos.');
            return;
        }

        if (username === 'demo' && password === 'demo') {
            window.location.href = 'timeline.html';
        } else {
            errorMessage.text('Usuario o contraseña incorrectos.');
        }
    });
});