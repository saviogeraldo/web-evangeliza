const versiculosPorPalavra = {
  "fe": [
    "Hebreus 11:1 – Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não veem.",
    "Romanos 10:17 – De sorte que a fé é pelo ouvir, e o ouvir pela palavra de Deus."
  ],
  "amor": [
    "1 Coríntios 13:4 – O amor é sofredor, é benigno; o amor não é invejoso; o amor não trata com leviandade, não se ensoberbece.",
    "João 3:16 – Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
  ],
  "esperanca": [
    "Romanos 15:13 – Ora, o Deus de esperança vos encha de todo o gozo e paz em crença, para que abundeis em esperança pela virtude do Espírito Santo.",
    "Salmos 42:11 – Por que estás abatida, ó minha alma, e por que te perturbas dentro de mim? Espera em Deus, pois ainda o louvarei, ele é a salvação da minha face e o meu Deus."
  ],
  "perdao": [
    "Efésios 4:32 – Antes sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo.",
    "Mateus 6:14 – Porque, se perdoardes aos homens as suas ofensas, também vosso Pai celestial vos perdoará a vós."
  ],
  "alegria": [
    "Filipenses 4:4 – Regozijai-vos sempre no Senhor; outra vez digo, regozijai-vos.",
    "Salmos 30:5 – O choro pode durar uma noite, mas a alegria vem pela manhã."
  ],
  "vida": [
    "João 10:10 – Eu vim para que tenham vida, e a tenham com abundância.",
    "Provérbios 4:23 – Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida."
  ]
};

const consolosPorPalavra = {
  "fe": [
    "Continue acreditando, mesmo quando não vê. Deus honra a fé que persevera.",
    "A fé te sustenta quando tudo parece incerto. Confie, Deus está no controle."
  ],
  "amor": [
    "O amor de Deus é incondicional. Você é profundamente amado.",
    "Deus te ama com amor eterno. Nada pode separar você desse amor."
  ],
  "esperanca": [
    "Mesmo nos dias difíceis, há esperança em Deus. Ele não te abandona.",
    "A esperança é a luz que brilha na escuridão. Deus é sua fonte de renovação."
  ],
  "perdao": [
    "Perdoar liberta a alma. Deus já te perdoou — siga em paz.",
    "O perdão cura feridas profundas. Liberte-se e viva com leveza."
  ],
  "alegria": [
    "A verdadeira alegria vem do Senhor. Ela supera qualquer circunstância.",
    "Deus transforma lágrimas em dança. Sua alegria é força para o coração."
  ],
  "vida": [
    "Deus te deu vida com propósito. Viva com coragem e gratidão.",
    "Cada dia é um presente divino. Sua vida tem valor eterno."
  ]
};

let ultimoVersiculo = "";
let ultimoConsolo = "";

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function buscar() {
  const entradaBruta = document.getElementById("entrada").value;
  const palavra = normalizarTexto(entradaBruta);

  const resultados = versiculosPorPalavra[palavra];
  const consolos = consolosPorPalavra[palavra];

  if (!resultados || !consolos) {
    document.getElementById("versiculo").innerText = "Nenhum versículo encontrado com essa palavra.";
    document.getElementById("consolo").innerText = "Tente outra palavra como: fé, amor, esperança...";
    return;
  }

  // Versículo aleatório diferente do anterior
  const candidatosVerso = resultados.filter(v => v !== ultimoVersiculo);
  const escolhidoVerso = candidatosVerso.length > 0
    ? candidatosVerso[Math.floor(Math.random() * candidatosVerso.length)]
    : resultados[Math.floor(Math.random() * resultados.length)];
  ultimoVersiculo = escolhidoVerso;

  // Consolo aleatório diferente do anterior
  const candidatosConsolo = consolos.filter(c => c !== ultimoConsolo);
  const escolhidoConsolo = candidatosConsolo.length > 0
    ? candidatosConsolo[Math.floor(Math.random() * candidatosConsolo.length)]
    : consolos[Math.floor(Math.random() * consolos.length)];
  ultimoConsolo = escolhidoConsolo;

  document.getElementById("versiculo").innerText = escolhidoVerso;
  document.getElementById("consolo").innerText = escolhidoConsolo;
}

function compartilharWhatsApp() {
  const versiculo = document.getElementById("versiculo").innerText;
  const consolo = document.getElementById("consolo").innerText;

  if (!versiculo || !consolo) {
    alert("Busque uma palavra primeiro para compartilhar.");
    return;
  }

  const mensagem = `${versiculo}\n\n${consolo}`;
  const link = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
}