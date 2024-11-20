document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validación básica
    if (name && email && message) {
        document.getElementById('formMessage').textContent = "¡Gracias por tu mensaje! Te responderé pronto.";
        document.getElementById('formMessage').style.color = "green";

        // Limpia el formulario
        this.reset();
    } else {
        document.getElementById('formMessage').textContent = "Por favor, completa todos los campos.";
        document.getElementById('formMessage').style.color = "red";
    }
});
