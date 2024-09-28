function login() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    if ((name.toLowerCase() === 'mishel' && password === '22222') || 
        (name.toLowerCase() === 'andrea' && password === '6789')) {
        localStorage.setItem('user', name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
        window.location.href = 'index_secundario.html'; // Página de las cartas
    } else {
        alert('Nombre o contraseña incorrectos');
    }
}