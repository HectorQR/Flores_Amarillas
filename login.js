function verifyLogin() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
  
    if ((name.toLowerCase() === 'andrea' && password === '6789') || 
        (name.toLowerCase() === 'mishel' && password === '12345')) {
      // Guardar el nombre formateado en localStorage
      localStorage.setItem('user', name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
      
      // Verificación en consola de que el nombre se ha guardado correctamente
      console.log('Usuario guardado en localStorage:', localStorage.getItem('user'));
      
      // Redirigir a la página secundaria
      window.location.href = 'index_secundario.html'; // Página de las cartas
    } else {
      // Mostrar mensaje de error si las credenciales no coinciden
      alert('Nombre o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
  }
  