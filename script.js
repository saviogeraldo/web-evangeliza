// Aplica fade-in ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');

  // Se estiver em uma página de tema, sorteia versículo/consolo
  const temaAtual = document.body.getAttribute("data-tema");
  if (temaAtual && temas[temaAtual]) {
    mostrarVersiculoConsolo(temaAtual);
  }
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

// Banco de dados dos versículos/consolos
const temas = {
  fe: [
    { versiculo: "Hebreus 11:1 - Ora, a fé é a certeza...", consolo: "Confie que Deus está no controle." },
    { versiculo: "Romanos 10:17 - A fé vem pelo ouvir...", consolo: "Alimente sua fé ouvindo a Palavra." },
    { versiculo: "Mateus 17:20 - Se tiverdes fé...", consolo: "Mesmo uma fé pequena pode mover montanhas." },
    { versiculo: "Marcos 11:24 - Tudo o que pedirem...", consolo: "Ore com fé e espere pela resposta." },
    { versiculo: "Salmos 37:5 - Entregue o seu caminho...", consolo: "Confie e Ele agirá em seu favor." }
  ],

  esperanca: [
    { versiculo: "Jeremias 29:11 - Eu é que sei os planos...", consolo: "Deus tem planos de paz e esperança." },
    { versiculo: "Romanos 15:13 - O Deus da esperança...", consolo: "Sua esperança se fortalece pela fé." },
    { versiculo: "Salmos 42:11 - Por que estás abatida...", consolo: "Espere em Deus, pois ainda O louvará." },
    { versiculo: "Isaías 40:31 - Mas os que esperam...", consolo: "Sua força será renovada ao esperar em Deus." },
    { versiculo: "Lamentações 3:22-23 - As misericórdias...", consolo: "A cada manhã, Deus renova sua esperança." }
  ],

  culpa: [
    { versiculo: "Romanos 8:1 - Agora, pois, já nenhuma condenação há...", consolo: "Em Cristo você é livre da culpa." },
    { versiculo: "Salmos 32:5 - Confessei o meu pecado...", consolo: "Ao confessar, Deus perdoa e tira o peso da culpa." },
    { versiculo: "Isaías 1:18 - Ainda que os vossos pecados sejam vermelhos...", consolo: "Deus purifica e torna você limpo." },
    { versiculo: "1 João 1:9 - Se confessarmos os nossos pecados...", consolo: "Ele é fiel e justo para perdoar." },
    { versiculo: "Hebreus 10:22 - Aproximemo-nos de Deus com coração sincero...", consolo: "Você pode se achegar a Deus sem culpa." }
  ],

  tristeza: [
    { versiculo: "Mateus 5:4 - Bem-aventurados os que choram...", consolo: "Deus enxuga suas lágrimas e traz consolo." },
    { versiculo: "Salmos 34:18 - Perto está o Senhor dos que têm o coração quebrantado...", consolo: "Ele está próximo quando você se sente abatido." },
    { versiculo: "João 16:33 - No mundo tereis aflições...", consolo: "Em Cristo você encontra paz mesmo na dor." },
    { versiculo: "Apocalipse 21:4 - Ele enxugará dos seus olhos toda lágrima...", consolo: "Um dia não haverá mais tristeza nem dor." },
    { versiculo: "Isaías 61:3 - Óleo de alegria em vez de pranto...", consolo: "Deus transforma sua tristeza em alegria." }
  ],

  perdao: [
    { versiculo: "Mateus 6:14 - Se perdoarem aos homens...", consolo: "O perdão abre espaço para a paz." },
    { versiculo: "Efésios 4:32 - Sejam bondosos e compassivos...", consolo: "Perdoar é refletir o amor de Cristo." },
    { versiculo: "Colossenses 3:13 - Suportem-se uns aos outros...", consolo: "Assim como Cristo perdoou, você também pode perdoar." },
    { versiculo: "Salmos 103:12 - Quanto o oriente está longe do ocidente...", consolo: "Deus afasta de você a culpa ao perdoar." },
    { versiculo: "Miquéias 7:19 - Ele lançará todos os nossos pecados...", consolo: "Deus não guarda rancor, Ele perdoa." }
  ],

  "coracao-quebrantado": [
    { versiculo: "Salmos 51:17 - Sacrifícios agradáveis a Deus são um espírito quebrantado...", consolo: "Deus não despreza um coração humilde." },
    { versiculo: "Isaías 57:15 - Habito com o contrito e abatido de espírito...", consolo: "Deus está perto do coração quebrantado." },
    { versiculo: "Salmos 147:3 - Ele cura os de coração quebrantado...", consolo: "Deus restaura suas feridas." },
    { versiculo: "Mateus 11:28 - Vinde a mim todos os cansados...", consolo: "Jesus dá descanso ao coração aflito." },
    { versiculo: "2 Coríntios 12:9 - A minha graça te basta...", consolo: "Na fraqueza, o poder de Cristo se aperfeiçoa." }
  ]
};

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

// Mostra versículo/consolo aleatório no tópico
function mostrarVersiculoConsolo(tema) {
  const lista = temas[tema];
  const item = lista[Math.floor(Math.random() * lista.length)];
  document.querySelector("blockquote").innerText = item.versiculo;
  document.querySelector(".consolo").innerText = item.consolo;
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
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert("Link copiado para compartilhar!"))
      .catch(() => alert("Não foi possível copiar o link."));
  }
}

// Intersection Observer para animar elementos ao entrar na tela
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    } else {
      entry.target.classList.remove("animate");
    }
  });
}, { threshold: 0.2 });

// Seleciona os elementos que terão animação
document.querySelectorAll(
  ".hero-title, .scroll-down, .intro, .subintro, .botoes button"
).forEach(el => observer.observe(el));