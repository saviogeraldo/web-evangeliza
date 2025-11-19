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
    }, 500); // tempo da transição
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
  const titulo = document.querySelector('h2')?.innerText || '';
  const versiculo = document.querySelector('blockquote')?.innerText || '';
  const consolo = document.querySelector('.consolo')?.innerText || '';
  const texto = `${titulo}\n\n${versiculo}\n\n${consolo}`;

  const urlWhatsApp = `https://wa.me/?text=${encodeURIComponent(texto)}`;
  window.open(urlWhatsApp, '_blank');
}