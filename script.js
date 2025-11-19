// Aplica fade-in ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
});

// Lista de temas disponíveis
const temasDisponiveis = [
  'fe',
  'esperanca',
  'culpa',
  'tristeza',
  'perdao',
  'coracao-quebrantado'
];

// Redireciona com fade-out para a página do tema escolhido
function abrirTema(tema) {
  if (temasDisponiveis.includes(tema)) {
    document.body.classList.remove('fade-in');
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = `temas/${tema}.html`;
    }, 500);
  } else {
    alert("Tema não encontrado.");
  }
}

// Escolhe um tema aleatório e abre com transição
function abrirTemaAleatorio() {
  const aleatorio = temasDisponiveis[Math.floor(Math.random() * temasDisponiveis.length)];
  abrirTema(aleatorio);
}

function compartilhar() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: "Confira esta mensagem: " + document.querySelector("blockquote").innerText,
      url: window.location.href
    })
    .then(() => console.log("Compartilhado com sucesso!"))
    .catch((error) => console.log("Erro ao compartilhar:", error));
  } else {
    alert("Compartilhamento não suportado neste navegador.");
  }
}

