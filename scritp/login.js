document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const btnSair = document.getElementById("btnSair");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const usuario = document.getElementById("username").value;
      const senha = document.getElementById("password").value;

      const usuarioCorreto = "admin";
      const senhaCorreta = "12345";

      if (usuario === usuarioCorreto && senha === senhaCorreta) {
        window.location.href = "frontpage.html";
      } else {
        alert("Usuário ou senha incorretos.");
      }
    });
  }

  if (btnSair) {
    btnSair.addEventListener("click", () => {
      window.location.href = "../../index.html";
    });
  }

  // === EXPANDIR IMAGEM ===
  const imagens = document.querySelectorAll(".print");
  const overlay = document.getElementById("overlay");
  const imgExpandida = document.getElementById("imagem-expandida");

  imagens.forEach((img) => {
    img.addEventListener("click", () => {
      imgExpandida.src = img.src;
      overlay.style.display = "flex";
    });
  });

  if (overlay) {
    overlay.addEventListener("click", () => {
      overlay.style.display = "none";
    });
  }
});
