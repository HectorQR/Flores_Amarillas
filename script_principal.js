document.getElementById('accessForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    const username = document.getElementById('username').value.trim().toLowerCase();
    const keyword = document.getElementById('keyword').value.trim();
    const errorMessage = document.getElementById('error-message');
    const users = {
        "mishel": "22222",
        "andrea": "6789"
    };
    if (users[username] && users[username] === keyword) {
        document.querySelector('.form-container').classList.add('animate__fadeOut');
        setTimeout(() => {
            window.location.href = `index_secundario.html?user=${encodeURIComponent(username)}`;
        }, 1000); // Añadir un retardo de 1 segundo antes de redirigir
    } else {
        errorMessage.classList.remove('hidden'); // Muestra un mensaje de error si la validación falla
    }
});