let currentChannel = "geral"; // Canal padrão

// Função para alternar entre canais
function switchChannel(channel) {
  // Esconde todas as mensagens dos canais
  document.querySelectorAll(".channel-messages").forEach(el => el.style.display = "none");

  // Exibe apenas o canal selecionado
  const selectedChannel = document.getElementById(channel);
  if (selectedChannel) {
    selectedChannel.style.display = "block";
  }

  // Atualiza o título do canal
  const channelName = document.getElementById("channel-name");
  if (channelName) {
    channelName.textContent = `# ${channel}`;
  }

  // Define o canal atual para envio de mensagens
  currentChannel = channel;
}

// Função para enviar uma mensagem
function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const messageText = messageInput.value.trim();

  // Verifica se a mensagem não está vazia
  if (messageText) {
    // Seleciona a área de mensagens do canal atual
    const currentChannelMessages = document.getElementById(currentChannel);

    // Cria um novo elemento para a mensagem
    const newMessage = document.createElement("p");
    newMessage.innerHTML = `<span class="user">Você:</span> ${messageText}`;

    // Adiciona a mensagem na área do canal atual
    currentChannelMessages.appendChild(newMessage);

    // Limpa o campo de entrada
    messageInput.value = "";

    // Rolagem automática para a última mensagem
    const chatMessages = document.getElementById("chat-messages");
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}
