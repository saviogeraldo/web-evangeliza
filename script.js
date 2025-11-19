const versiculosPorPalavra = {
  "tristeza": [
    "Salmos 34:18 – Perto está o Senhor dos que têm o coração quebrantado e salva os contritos de espírito.",
    "Mateus 5:4 – Bem-aventurados os que choram, porque eles serão consolados."
  ],
  "culpa": [
    "1 João 1:9 – Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar e nos purificar de toda injustiça.",
    "Romanos 8:1 – Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus."
  ],
  "fe": [
    "Hebreus 11:1 – Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não veem.",
    "Romanos 10:17 – De sorte que a fé é pelo ouvir, e o ouvir pela palavra de Deus."
  ],
  "esperanca": [
    "Romanos 15:13 – Ora, o Deus de esperança vos encha de todo o gozo e paz em crença...",
    "Salmos 42:11 – Por que estás abatida, ó minha alma? Espera em Deus..."
  ],
  "perdao": [
    "Efésios 4:32 – Antes sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros...",
    "Mateus 6:14 – Porque, se perdoardes aos homens as suas ofensas, também vosso Pai celestial vos perdoará."
  ],
  "alegria": [
    "Filipenses 4:4 – Regozijai-vos sempre no Senhor; outra vez digo, regozijai-vos.",
    "Salmos 30:5 – O choro pode durar uma noite, mas a alegria vem pela manhã."
  ],
  "vida": [
    "João 10:10 – Eu vim para que tenham vida, e a tenham com abundância.",
    "Provérbios 4:23 – Sobre tudo o que se deve guardar, guarda o teu coração..."
  ]
};

const consolosPorPalavra = {
  "tristeza": [
    "Deus enxuga cada lágrima. Você não está sozinho.",
    "Mesmo na dor, há consolo em Deus. Ele te sustenta."
  ],
  "culpa": [
    "Deus já te perdoou. Receba a paz que vem do perdão.",
    "A graça de Deus cobre toda culpa. Você é livre."
  ],
  "fe": [
    "Continue acreditando, mesmo quando não vê. Deus honra a fé que persevera.",
    "A fé te sustenta quando tudo parece incerto. Confie, Deus está no controle."
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

function buscar(palavraBruta) {
  const palavra = normalizarTexto(palavraBruta);

  const resultados = versiculosPorPalavra[palavra];
  const consolos = consolosPorPalavra[palavra];

  if (!resultados || !consolos) {
    document.getElementById("versiculo").innerText = "Nenhum versículo encontrado com esse tema.";
    document.getElementById("consolo").innerText = "Tente outro tópico como: fé, esperança, perdão...";
    return;
  }

  const candidatosVerso = resultados.filter(v => v !== ultimoVersiculo);
  const escolhidoVerso = candidatosVerso.length > 0
    ? candidatosVerso[Math.floor(Math.random() * candidatosVerso.length)]
    : resultados[Math.floor(Math.random() * resultados.length)];
  ultimoVersiculo = escolhidoVerso;

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
    alert("Escolha um tema primeiro para compartilhar.");
    return;
  }

  const mensagem = `${versiculo}\n\n${consolo}`;
  const link = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
}

function buscarAleatorio() {
  const temas = Object.keys(versiculosPorPalavra);
  const temaAleatorio = temas[Math.floor(Math.random() * temas.length)];
  buscar(temaAleatorio);
}