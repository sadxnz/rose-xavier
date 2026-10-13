// Texto do site. Tudo que é clínico está marcado [ROSE VALIDA]; o que falta, [PREENCHER].

// Rascunho em primeira pessoa: a Rose reescreve com as palavras dela.
export const apresentacao =
  'Sou a Rose, enfermeira, e atendo estética injetável em Fortaleza. Todo atendimento começa com uma conversa e uma avaliação do seu rosto, parado e em movimento. Eu explico cada etapa antes e só aplico o que for indicado para você.';

export const credenciais = [
  { rotulo: 'Formação', valor: '[PREENCHER: graduação em Enfermagem, instituição e ano]' },
  { rotulo: 'Especialização', valor: '[PREENCHER: especialização em estética, instituição]' },
  { rotulo: 'Em estética desde', valor: '[PREENCHER: ano em que começou a atuar]' },
  { rotulo: 'Registro', valor: 'Coren-CE nº 554751' },
];

export const procedimentos = [1, 2, 3, 4].map((n) => ({
  nome: `[PREENCHER: procedimento ${n}]`,
  oQueE: '[ROSE VALIDA: o que é, em uma ou duas frases]',
  duracao: '[ROSE VALIDA: duração da sessão]',
  retorno: '[ROSE VALIDA: em quantos dias é o retorno]',
  cuidados: '[ROSE VALIDA: cuidados nas primeiras horas e nos primeiros dias]',
}));

export const etapas = [
  {
    titulo: 'Avaliação e anamnese',
    texto:
      'A gente conversa sobre o que te incomoda, sua saúde e o que você espera. Eu examino o rosto parado e em movimento e digo o que é indicado e o que não é. [ROSE VALIDA]',
  },
  {
    titulo: 'Marcação do rosto',
    texto:
      'Com um lápis branco, eu marco no seu rosto as regiões combinadas. Você confere tudo no espelho antes de começar. [ROSE VALIDA]',
  },
  {
    titulo: 'Aplicação',
    texto:
      'Eu preparo o material e aplico seguindo a marcação. [ROSE VALIDA: como é feito o conforto durante a aplicação e quanto tempo leva]',
  },
  {
    titulo: 'Retorno',
    texto:
      'Você volta para eu ver como o rosto respondeu. [ROSE VALIDA: em quantos dias é o retorno e o que acontece nele]',
  },
];

export const duvidas = [
  {
    pergunta: 'Dói?',
    resposta: '[ROSE VALIDA: como é a sensação durante a aplicação e o que é feito para o seu conforto]',
  },
  {
    pergunta: 'Quanto tempo dura?',
    resposta:
      'Varia de pessoa para pessoa e de procedimento para procedimento. [ROSE VALIDA: duração média de cada procedimento]',
  },
  {
    pergunta: 'Quem não pode fazer?',
    resposta:
      'Na avaliação, eu pergunto sobre a sua saúde para saber se o procedimento é indicado para você. [ROSE VALIDA: principais contraindicações]',
  },
  {
    pergunta: 'Quanto custa?',
    resposta:
      'O valor depende do que for indicado na avaliação. [ROSE VALIDA: se a avaliação é cobrada e como funciona o pagamento]',
  },
];
