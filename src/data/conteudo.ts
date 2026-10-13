// Texto do site. O que ainda falta está marcado [PREENCHER].
// Os textos clínicos foram escritos a partir de fontes públicas e a Rose deve ler antes de publicar:
// bulas de toxina botulínica (início do efeito, duração, contraindicações), Parecer Cofen nº 51/2025
// (furo de orelha humanizado), Parecer de Câmara Técnica nº 001/2022/GTEE/Cofen (toxina por enfermeiro
// habilitado em estética), revisões sobre bruxismo e cuidados pós-aplicação, e matérias sobre furo em bebês.
// Nenhum nome de marca de medicamento aparece aqui, por regra legal.

// Rascunho em primeira pessoa: a Rose reescreve com as palavras dela.
export const apresentacao =
  'Sou a Rose, enfermeira, e atendo em Fortaleza com toxina botulínica, estética e terapêutica, e furo humanizado de orelha. Todo atendimento começa com uma conversa e uma avaliação. Eu explico cada etapa antes e só aplico o que for indicado para você.';

export const credenciais = [
  { rotulo: 'Formação', valor: 'Graduação em Enfermagem pela UECE, há mais de 8 anos' },
  { rotulo: 'Especialização', valor: 'Estética avançada pelo IVESP' },
  { rotulo: 'Registro', valor: 'Coren-CE nº 554751' },
];

export const procedimentos = [
  {
    nome: 'Toxina botulínica estética',
    oQueE:
      'A toxina botulínica relaxa por um tempo os músculos que formam as linhas de expressão, como as da testa, entre as sobrancelhas e ao redor dos olhos. O efeito começa a aparecer entre 3 e 5 dias e costuma durar de 3 a 6 meses. Depois, o músculo volta a se mexer normalmente.',
    duracao:
      'A aplicação é rápida: algumas picadas com agulha bem fina. A conversa, a avaliação e a marcação antes levam mais tempo que a aplicação em si.',
    retorno: 'Por volta de 15 dias depois, quando o efeito já apareceu, para ver como o rosto respondeu.',
    cuidados:
      'Nas primeiras 4 horas, não deite e não massageie nem aperte a região. No primeiro dia, evite exercício intenso, sauna e calor forte. Se sentir dificuldade para engolir, falar ou respirar, procure atendimento na hora.',
  },
  {
    nome: 'Toxina botulínica terapêutica',
    oQueE:
      'A mesma substância, usada no tratamento do bruxismo, o hábito de apertar ou ranger os dentes. A aplicação é feita no músculo da mandíbula que faz essa força. O efeito é temporário e, no bruxismo, os estudos falam em 3 a 6 meses.',
    duracao: 'Parecida com a estética: avaliação, marcação e poucas aplicações no músculo indicado.',
    retorno: 'Por volta de 15 dias depois, para avaliar a resposta do músculo.',
    cuidados:
      'Nas primeiras 4 horas, não deite e não massageie a região. No primeiro dia, evite exercício intenso e calor forte. Se sentir dificuldade para engolir, falar ou respirar, procure atendimento na hora.',
  },
  {
    nome: 'Furo humanizado',
    oQueE:
      'Furo de orelha com consulta de enfermagem antes, marcação do ponto no lóbulo, material estéril e descartável e joia antialérgica, como aço cirúrgico ou titânio. A perfuração é feita com cateter estéril, sem pistola. Para bebês, o comum é esperar pelo menos os 2 meses de vida, depois do teste do pezinho e das primeiras vacinas.',
    duracao:
      'Inclui a conversa, a escolha da joia e a marcação. A perfuração em si é rápida, e o bebê pode estar no colo, mamando ou dormindo.',
    retorno: 'Combinamos um retorno para conferir a cicatrização e liberar a troca do primeiro brinco.',
    cuidados:
      'Limpe o furo com soro fisiológico duas vezes ao dia, com as mãos limpas. Não tire nem troque o brinco antes de eu liberar e evite puxar ou enroscar. Se ficar muito vermelho, inchado ou com secreção, me avise.',
  },
];

export const etapas = [
  {
    titulo: 'Avaliação e anamnese',
    texto:
      'A gente conversa sobre o que te incomoda, sua saúde e o que você espera. Eu examino a região e digo o que é indicado e o que não é.',
  },
  {
    titulo: 'Marcação',
    texto: 'Com um lápis branco, eu marco os pontos combinados. Você confere tudo no espelho antes de começar.',
  },
  {
    titulo: 'Aplicação',
    texto:
      'Eu preparo o material na hora e aplico seguindo a marcação, com agulha fina ou cateter estéril. É rápido, e se precisar dá para usar anestésico na pele antes.',
  },
  {
    titulo: 'Retorno',
    texto:
      'Na toxina botulínica, o retorno é por volta de 15 dias depois, quando o efeito já apareceu. No furo, é para conferir a cicatrização antes da troca do brinco.',
  },
];

export const duvidas = [
  {
    pergunta: 'Dói?',
    resposta:
      'A picada é de agulha bem fina, e o desconforto costuma ser leve e passar rápido. Se precisar, dá para usar anestésico na pele antes.',
  },
  {
    pergunta: 'Quanto tempo dura?',
    resposta:
      'A toxina botulínica é temporária: o efeito aparece entre 3 e 5 dias e costuma durar de 3 a 6 meses, variando de pessoa para pessoa. O furo é permanente.',
  },
  {
    pergunta: 'Quem não pode fazer?',
    resposta:
      'A toxina botulínica não é indicada na gravidez e na amamentação, para quem tem doença neuromuscular, como miastenia gravis, alergia aos componentes ou infecção no local. Alguns remédios, como certos antibióticos, também pedem cuidado. No furo de bebê, não se faz em prematuros nem antes dos 3,5 kg. Por isso eu pergunto sobre sua saúde na avaliação.',
  },
  {
    pergunta: 'Quanto custa?',
    resposta: 'O valor depende do procedimento e do que for indicado na avaliação. Me chama no WhatsApp que eu te passo.',
  },
];
