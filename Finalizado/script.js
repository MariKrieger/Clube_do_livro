document.getElementById('clubForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const clubName = document.getElementById('clubName').value.trim();
  const friends = document.getElementById('friends').value.split(',').map(friend => friend.trim());

  if (clubName && friends.length > 0) {
      // Aqui você pode adicionar a lógica para salvar o clube em um banco de dados ou em localStorage
      document.getElementById('message').innerText = `Clube "${clubName}" criado com sucesso! Amigos adicionados: ${friends.join(', ')}`;
      
      // Limpa os campos
      document.getElementById('clubName').value = '';
      document.getElementById('friends').value = '';
  } else {
      document.getElementById('message').innerText = 'Por favor, preencha todos os campos.';
  }
});