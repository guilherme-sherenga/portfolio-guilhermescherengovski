// Aqui, seleciona o formulário pelo ID formContato e adiciona um evento de envio (submit)
document.getElementById("formContato").addEventListener("submit", function(e) {
  // Adicionado evento para impedir o comportamento padrão do formulário (recarregar a página)
  e.preventDefault();

  // Captura os campo "nome", "e-mail" e "mensagem" removendo espaços extras
  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensagem = document.getElementById("mensagem").value.trim();

  // Aqui, verifica se há algum espaço vazio. Se sim, emite mensagem e retorna para preenchimento
  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos!");
    return;
  }

  // Validação simples de e-mail que avisa caso esqueça algum caractere
  if (!email.includes("@") || !email.includes(".")) {
    alert("Email inválido!");
    return;
  }

  // Se tudo estiver correto, mostra mensagem de envio
  alert("Mensagem enviada com sucesso!");

  // Limpa o formulário após envio
  this.reset();
});
