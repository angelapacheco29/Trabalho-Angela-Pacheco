document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const mensagem = document.getElementById("mensagem").value;

      if (nome && email && mensagem) {
        alert("Mensagem enviada com sucesso! Obrigada pelo contato, " + nome + "!");
        form.reset();
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });
  }
});

