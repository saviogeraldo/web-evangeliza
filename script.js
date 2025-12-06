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
    { 
      versiculo: "Hebreus 11:1 - Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.", 
      consolo: "A fé é o alicerce da vida cristã. Mesmo quando não vemos saída ou solução, ela nos lembra que Deus já está trabalhando nos bastidores. Confiar em Deus é descansar na certeza de que Ele nunca falha e sempre cumpre Suas promessas." 
    },
    { 
      versiculo: "Romanos 10:17 - Consequentemente, a fé vem por ouvir a mensagem, e a mensagem é ouvida mediante a palavra de Cristo.", 
      consolo: "A fé não nasce do nada, mas é alimentada pela Palavra de Deus. Quanto mais você se aproxima das Escrituras, mais sua confiança em Cristo cresce. É como regar uma planta: a fé floresce quando nutrida pela verdade divina." 
    },
    { 
      versiculo: "Mateus 17:20 - Porque em verdade vos digo: se tiverdes fé como um grão de mostarda, direis a este monte: 'Passa daqui para acolá', e ele passará. Nada vos será impossível.", 
      consolo: "Deus não exige uma fé gigantesca, mas uma fé genuína. Mesmo pequena, ela tem poder porque está depositada em um Deus infinito. O que parece impossível aos olhos humanos se torna possível quando confiamos plenamente nEle." 
    },
    { 
      versiculo: "Marcos 11:24 - Portanto, vos digo que tudo o que pedirdes em oração, crede que o recebereis, e assim será convosco.", 
      consolo: "A oração é o canal direto com Deus. Quando você ora com fé, não apenas fala, mas também confia que Ele já está agindo. Essa confiança traz paz ao coração e esperança ao espírito." 
    },
    { 
      versiculo: "Salmos 37:5 - Entregue o seu caminho ao Senhor, confie nele, e o mais Ele fará.", 
      consolo: "Entregar o caminho ao Senhor é abrir mão do controle e permitir que Ele conduza sua vida. Isso não significa ausência de desafios, mas certeza de que cada passo será guiado por mãos seguras e amorosas." 
    }
  ],

  esperanca: [
    { 
      versiculo: "Jeremias 29:11 - 'Porque eu sei os planos que tenho para vocês', declara o Senhor, 'planos de fazê-los prosperar e não de lhes causar dano, planos de dar-lhes esperança e um futuro.'", 
      consolo: "Mesmo quando o presente parece confuso, Deus já escreveu um futuro de paz para você. Sua esperança não está em circunstâncias passageiras, mas em um Deus eterno que nunca falha." 
    },
    { 
      versiculo: "Romanos 15:13 - Que o Deus da esperança os encha de toda alegria e paz, por sua confiança nele, para que vocês transbordem de esperança pelo poder do Espírito Santo.", 
      consolo: "A esperança verdadeira não é frágil nem temporária. Ela é sustentada pelo Espírito Santo, que enche seu coração de alegria e paz mesmo em meio às tempestades." 
    },
    { 
      versiculo: "Salmos 42:11 - Por que você está assim tão triste, ó minha alma? Por que está tão perturbada dentro de mim? Ponha a sua esperança em Deus! Pois ainda o louvarei: Ele é o meu Salvador e o meu Deus.", 
      consolo: "A alma abatida encontra descanso quando se volta para Deus. Ele é a fonte de esperança que nunca se esgota, mesmo quando tudo ao redor parece desmoronar." 
    },
    { 
      versiculo: "Isaías 40:31 - Mas aqueles que esperam no Senhor renovam as suas forças. Voam alto como águias; correm e não ficam exaustos, andam e não se cansam.", 
      consolo: "Esperar em Deus não é perder tempo, mas ganhar forças. Ele renova sua energia e lhe dá capacidade de enfrentar desafios com coragem e perseverança." 
    },
    { 
      versiculo: "Lamentações 3:22-23 - Graças ao grande amor do Senhor é que não somos consumidos, pois as suas misericórdias são inesgotáveis. Renovam-se cada manhã; grande é a sua fidelidade!", 
      consolo: "Cada novo dia é uma prova da fidelidade de Deus. Mesmo quando falhamos, Suas misericórdias se renovam e nos dão esperança para recomeçar." 
    }
  ],

  culpa: [
    { 
      versiculo: "Romanos 8:1 - Portanto, agora já não há condenação para os que estão em Cristo Jesus.", 
      consolo: "A culpa não tem poder sobre aqueles que estão em Cristo. Ele já pagou o preço e nos libertou da condenação, permitindo que vivamos em paz e liberdade." 
    },
    { 
      versiculo: "Salmos 32:5 - Então reconheci diante de ti o meu pecado e não encobri as minhas culpas. Eu disse: 'Confessarei as minhas transgressões ao Senhor', e tu perdoaste a culpa do meu pecado.", 
      consolo: "Confessar é abrir o coração e deixar Deus limpar as feridas. Ele não apenas perdoa, mas também remove o peso da culpa, trazendo leveza e paz." 
    },
    { 
      versiculo: "Isaías 1:18 - 'Venham, vamos refletir juntos', diz o Senhor. 'Embora os seus pecados sejam vermelhos como escarlate, eles se tornarão brancos como a neve; embora sejam rubros como púrpura, como a lã se tornarão.'", 
      consolo: "Deus não apenas perdoa, Ele transforma. O que era manchado pelo pecado se torna puro e renovado pela graça." 
    },
    { 
      versiculo: "1 João 1:9 - Se confessarmos os nossos pecados, Ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça.", 
      consolo: "A fidelidade de Deus é garantia de perdão. Ao confessar, você é purificado e restaurado, livre da culpa que aprisiona." 
    },
    { 
      versiculo: "Hebreus 10:22 - Aproximemo-nos de Deus com um coração sincero e com plena certeza de fé, tendo o coração purificado da má consciência e o corpo lavado com água pura.", 
      consolo: "Você pode se aproximar de Deus sem medo. Ele limpa sua consciência e lhe dá paz verdadeira, permitindo que viva sem o peso da culpa." 
    }
  ],

  tristeza: [
    { 
      versiculo: "Mateus 5:4 - Bem-aventurados os que choram, pois serão consolados.", 
      consolo: "Deus vê cada lágrima e promete consolo. Sua dor não é ignorada, mas transformada em esperança." 
    },
    { 
      versiculo: "Salmos 34:18 - O Senhor está perto dos que têm o coração quebrantado e salva os de espírito abatido.", 
      consolo: "Nos momentos de tristeza, Deus está mais próximo do que nunca. Ele sustenta e fortalece o coração abatido." 
    },
    { 
      versiculo: "João 16:33 - No mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo.", 
      consolo: "Mesmo em meio às aflições, você pode ter paz. Cristo já venceu e garante vitória para você." 
    },
    { 
      versiculo: "Apocalipse 21:4 - Ele enxugará dos seus olhos toda lágrima. Não haverá mais morte, nem tristeza, nem choro, nem dor, pois a antiga ordem já passou.", 
      consolo: "Há uma promessa eterna: um dia toda tristeza será apagada e só restará alegria." 
    },
    { 
      versiculo: "Isaías 61:3 - E lhes dará uma coroa de beleza em vez de cinzas, óleo de alegria em vez de pranto, e um manto de louvor em vez de espírito angustiado.", 
      consolo: "Deus transforma pranto em louvor e tristeza em alegria abundante. Ele é especialista em restaurar corações." 
    }
  ],

    perdao: [
    { 
      versiculo: "Mateus 6:14 - Pois se vocês perdoarem as ofensas uns dos outros, o Pai celestial também lhes perdoará.", 
      consolo: "O perdão é um ato de libertação. Quando você decide perdoar, não apenas libera o outro, mas também abre espaço para que seu coração seja curado. O perdão é reflexo do amor de Deus, que não guarda rancor e sempre nos dá uma nova chance." 
    },
    { 
      versiculo: "Efésios 4:32 - Sejam bondosos e compassivos uns para com os outros, perdoando-se mutuamente, assim como Deus os perdoou em Cristo.", 
      consolo: "Perdoar é imitar o próprio Cristo. Ele nos perdoou sem exigir nada em troca, e quando fazemos o mesmo, experimentamos a leveza de viver sem mágoas. O perdão abre portas para relacionamentos restaurados e para uma vida mais plena." 
    },
    { 
      versiculo: "Colossenses 3:13 - Suportem-se uns aos outros e perdoem as queixas que tiverem uns contra os outros. Perdoem como o Senhor lhes perdoou.", 
      consolo: "O perdão não é fácil, mas é necessário. Assim como você foi perdoado por Deus, pode estender esse perdão aos outros. Isso não apenas cura feridas, mas também fortalece vínculos e traz paz ao coração." 
    },
    { 
      versiculo: "Salmos 103:12 - E quanto o oriente está longe do ocidente, assim Ele afasta de nós as nossas transgressões.", 
      consolo: "Deus não apenas perdoa, Ele remove completamente nossa culpa. Ele não guarda lembranças do nosso passado, mas nos dá uma nova identidade em Cristo. Isso nos permite viver livres e confiantes em Seu amor." 
    },
    { 
      versiculo: "Miquéias 7:19 - Ele terá compaixão de nós; pisará nossas maldades e lançará todos os nossos pecados nas profundezas do mar.", 
      consolo: "O perdão de Deus é tão profundo que nossos pecados são lançados no esquecimento. Ele não nos define pelo que fizemos, mas pelo amor que nos transforma. Essa verdade nos dá coragem para seguir em frente sem medo." 
    }
  ],

  "coracao-quebrantado": [
    { 
      versiculo: "Salmos 51:17 - Os sacrifícios que agradam a Deus são um espírito quebrantado; um coração quebrantado e contrito, ó Deus, não desprezarás.", 
      consolo: "Deus não rejeita sua dor. Pelo contrário, Ele acolhe sua humildade e transforma sua fraqueza em força espiritual. Um coração quebrantado é terreno fértil para a graça, pois é nele que Deus derrama Seu amor e restauração." 
    },
    { 
      versiculo: "Isaías 57:15 - Pois assim diz o Alto e Sublime, que vive para sempre e cujo nome é santo: 'Habito num lugar alto e santo, mas habito também com o contrito e abatido de espírito, para dar novo ânimo ao espírito do abatido e novo alento ao coração contrito.'", 
      consolo: "O Deus Altíssimo, que habita em lugares celestiais, escolhe estar perto de você quando seu coração está quebrantado. Ele não apenas vê sua dor, mas também lhe dá novo ânimo e esperança para continuar." 
    },
    { 
      versiculo: "Salmos 147:3 - Ele cura os de coração quebrantado e trata das suas feridas.", 
      consolo: "Deus é o médico da alma. Ele não apenas observa suas feridas, mas as trata com cuidado e amor. Cada cicatriz se torna testemunho da cura que só Ele pode realizar." 
    },
    { 
      versiculo: "Mateus 11:28 - Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso.", 
      consolo: "Jesus oferece descanso verdadeiro. Quando o peso da vida parece insuportável, Ele carrega junto e traz paz. Seu convite é para que você deposite toda carga em Suas mãos e encontre alívio." 
    },
    { 
      versiculo: "2 Coríntios 12:9 - Mas ele me disse: 'Minha graça é suficiente para você, pois o meu poder se aperfeiçoa na fraqueza.' Portanto, eu me gloriarei ainda mais alegremente em minhas fraquezas, para que o poder de Cristo repouse em mim.", 
      consolo: "Na sua fraqueza, o poder de Cristo se manifesta. O que parece limite se torna oportunidade para experimentar a graça infinita de Deus. É na vulnerabilidade que Ele revela Sua força e sustento." 
    }
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

// Função para carregar versículo e consolo aleatório da categoria atual
function carregarVersiculo() {
  const tema = document.body.getAttribute("data-tema"); // pega o tema da página
  if (temas[tema]) {
    const lista = temas[tema];
    const sorteado = lista[Math.floor(Math.random() * lista.length)];

    document.querySelector("blockquote").textContent = sorteado.versiculo;
    document.querySelector(".consolo").textContent = sorteado.consolo;
  }
}

// Executa ao carregar a página de tema
window.onload = carregarVersiculo;


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