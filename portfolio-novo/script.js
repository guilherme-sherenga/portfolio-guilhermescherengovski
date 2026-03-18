document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Email inválido!");
    return;
  }

  alert("Mensagem enviada com sucesso!");

  this.reset();
});