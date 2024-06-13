document.addEventListener('DOMContentLoaded', () => {
    // Función para capturar entradas mediante prompt()
    const captureInput = (message) => {
        let input = prompt(message);
        return input ? input.trim() : '';
    };

    // Declaración de variables y objetos necesarios para simular el proceso
    let user = {
        name: '',
        email: '',
        password: '',
        message: ''
    };

    // Funciones para realizar operaciones
    const concatStrings = (str1, str2) => `${str1} ${str2}`;
    const addNumbers = (num1, num2) => num1 + num2;
    const percentage = (num, percent) => (num * percent) / 100;

    // Captura de entradas del usuario
    user.name = captureInput('Introduce tu nombre:');
    user.email = captureInput('Introduce tu email:');
    user.password = captureInput('Introduce tu contraseña:');
    user.message = captureInput('Introduce tu mensaje:');

    // Validar que todos los campos estén llenos
    let isValid = true;
    for (let key in user) {
        if (user[key] === '') {
            isValid = false;
            break;
        }
    }

    // Procesamiento esencial del simulador
    if (isValid) {
        let fullName = concatStrings(user.name, user.email);
        let passwordLength = user.password.length;
        let messageLength = user.message.length;
        let strength = passwordLength > 8;
        let halfMessageLength = percentage(messageLength, 50);

        // Resultados en consola
        console.log(`Nombre completo: ${fullName}`);
        console.log(`Longitud de la contraseña: ${passwordLength}`);
        console.log(`Contraseña segura: ${strength}`);
        console.log(`Mitad de la longitud del mensaje: ${halfMessageLength}`);

        // Notificación de resultados con alert()
        alert(`Nombre completo: ${fullName}`);
        alert(`Longitud de la contraseña: ${passwordLength}`);
        alert(`Contraseña segura: ${strength}`);
        alert(`Mitad de la longitud del mensaje: ${halfMessageLength}`);
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
