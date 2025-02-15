        $(document).ready(function() {
            $('#gender').on('change', function() {
                if ($(this).val() === "Otro") {
                    $('#other-gender').slideDown();
                } else {
                    $('#other-gender').slideUp();
                    $('#otherGenderText').val('');
                }
            });

            $('#registerForm').on('submit', function(event) {
                event.preventDefault();

                const username = $('#username').val().trim();
                const email = $('#email').val().trim();
                const password = $('#password').val().trim();
                const confirmPassword = $('#confirmPassword').val().trim();
                const firstName = $('#firstName').val().trim();
                const lastName = $('#lastName').val().trim();
                const gender = $('#gender').val();
                const otherGenderText = $('#otherGenderText').val().trim();
                const birthdate = $('#birthdate').val();
                const messageBox = $('#message-box');

                messageBox.removeClass("error-message success-message").hide().text('');

                if (!username || !email || !password || !confirmPassword || !firstName || !birthdate) {
                    messageBox.addClass("error-message").text('Todos los campos obligatorios deben estar completos.').slideDown();
                    return;
                }

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    messageBox.addClass("error-message").text('Ingrese un correo electrónico válido.').slideDown();
                    return;
                }

                if (password.length < 6) {
                    messageBox.addClass("error-message").text('La contraseña debe tener al menos 6 caracteres.').slideDown();
                    return;
                }

                if (password !== confirmPassword) {
                    messageBox.addClass("error-message").text('Las contraseñas no coinciden.').slideDown();
                    return;
                }

                if (gender === "") {
                    messageBox.addClass("error-message").text('Seleccione su género.').slideDown();
                    return;
                }

                const birthDateObj = new Date(birthdate);
                const today = new Date();
                const age = today.getFullYear() - birthDateObj.getFullYear();

                if (age < 18) {
                    messageBox.addClass("error-message").text('Debes tener al menos 18 años para registrarte.').slideDown();
                    return;
                }

                messageBox.addClass("success-message").text('Registro exitoso. Redirigiendo...').slideDown();
                setTimeout(() => {
                    window.location.href = 'timeline.html';
                }, 2000);
            });
        });
