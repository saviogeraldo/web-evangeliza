const mensagens = {
  depressao: {
    versiculo: "Salmos 34:18 – Perto está o Senhor dos que têm o coração quebrantado.",
    consolo: "Deus está com você mesmo nos dias mais escuros."
  },
  drogas: {
    versiculo: "João 8:36 – Se, pois, o Filho vos libertar, verdadeiramente sereis livres.",
    consolo: "Jesus oferece libertação completa. Você não está sozinho nessa luta."
  },
  ansiedade: {
    versiculo: "Filipenses 4:6-7 – Não andeis ansiosos por coisa alguma...",
    consolo: "A paz de Deus guardará seu coração e sua mente."
  },
  medo: {
    versiculo: "Isaías 41:10 – Não temas, porque eu sou contigo.",
    consolo: "Deus está com você em cada passo. Ele te fortalece."
  },
  solidao: {
    versiculo: "Mateus 28:20 – Eis que estou convosco todos os dias.",
    consolo: "Você nunca está sozinho. Jesus caminha com você."
  },
  culpa: {
    versiculo: "1 João 1:9 – Se confessarmos os nossos pecados, Ele é fiel e justo para nos perdoar.",
    consolo: "O perdão de Deus é completo. Você pode recomeçar."
  }
};

const equivalencias = {
  depressao: "tristeza",
  ansiedade: "preocupação",
  drogas: "libertação",
  medo: "temor",
  solidao: "abandono",
  culpa: "pecado"
};

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function buscar() {
  const entradaBruta = document.getElementById("entrada").value;
  const entrada = normalizarTexto(entradaBruta);

  const resultado = mensagens[entrada];

  if (resultado) {
    document.getElementById("versiculo").innerText = resultado.versiculo;
    document.getElementById("consolo").innerText = resultado.consolo;
    return;
  }

  const palavraTransformada = equivalencias[entrada] || entrada;

  fetch(`https://bibleapi.co/api/verses/nvi/search?query=${palavraTransformada}`)
    .then(response => response.json())
    .then(data => {
      if (data.verses && data.verses.length > 0) {
        const versiculo = data.verses[0];
        document.getElementById("versiculo").innerText =
          `${versiculo.book.name} ${versiculo.chapter}:${versiculo.number} – ${versiculo.text}`;
        document.getElementById("consolo").innerText =
          "Deus tem uma palavra para você. Medite nesse versículo.";
      } else {
        document.getElementById("versiculo").innerText = "Nenhum versículo encontrado.";
        document.getElementById("consolo").innerText = "Tente outra palavra ou peça ajuda.";
      }
    })
    .catch(error => {
      document.getElementById("versiculo").innerText = "Erro ao buscar versículo.";
      document.getElementById("consolo").innerText = "Verifique sua conexão com a internet.";
      console.error(error);
    });
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