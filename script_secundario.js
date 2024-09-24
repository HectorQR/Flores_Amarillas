document.addEventListener('DOMContentLoaded', () => {
  const user = localStorage.getItem('user');
  console.log('Usuario recuperado:', user);

  const messagesMishel = [
      "¿Sabías que las flores más lindas son las que florecen en los corazones tiernos? ¡Y el tuyo es un jardín entero! 🌼",
      "Si los abrazos fueran flores, ¡tendrías un jardín infinito! Gracias por ser tan tierna. 🤗",
      "Eres como un rayo de sol en un día nublado, siempre aportando calidez y luz donde quiera que vayas. 🌞",
      "Cada vez que pienso en la palabra 'amiga', apareces tú, con tu dulzura y tu capacidad de hacer sentir especial a todos. 🍬",
      "No hay flor más hermosa que la amistad que compartimos. Gracias por ser la maravillosa persona que eres, llena de amor y cariño. 🌹"
  ];

  const messagesAndrea = [
      "¿Sabías que las risas son contagiosas? ¡Cuidado, ponte mascarilla cada vez que te rias! 🐝💪",
      "Si la risa es la mejor medicina, tú deberías ser la doctora. 😄",
      "Eres como un girasol en un campo de margaritas, destacas con tu energía única e irresistible. 🌻",
      "Tu independencia y confianza son como un imán para la admiración. ¡Nunca dejes de ser así! 💪",
      "¡Gracias por ser tan genial y por estar siempre ahí! 🌟"
  ];

  // Verifica si el usuario es Mishel o Andrea, y selecciona los mensajes correspondientes
  const messages = user.toLowerCase() === "mishel" ? messagesMishel : messagesAndrea;

  // Colocar los mensajes personalizados
  document.getElementById('message1').textContent = messages[0];
  document.getElementById('message2').textContent = messages[1];
  document.getElementById('message3').textContent = messages[2];
  document.getElementById('message4').textContent = messages[3];
  document.getElementById('message5').textContent = messages[4];
});
