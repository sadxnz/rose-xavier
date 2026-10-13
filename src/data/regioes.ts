// Regiões do mapa facial. Desenho em viewBox 0 0 300 400.
// `area`: onde o toque funciona. `marca`: a linha tracejada (o lápis branco da Rose).
// Regiões dos dois lados do rosto têm um caminho para cada lado, para o traço nascer ao mesmo tempo.
// `formulario`: procedimento que já vem marcado no formulário de agendamento.

import { procedimentos } from './conteudo';

export interface Regiao {
  id: string;
  nome: string;
  avaliado: string;
  procedimentos: string[];
  formulario: string;
  area: string[];
  marca: string[];
}

const [estetica, terapeutica, furo] = procedimentos.map((p) => p.nome);

export const regioes: Regiao[] = [
  {
    id: 'testa',
    nome: 'Testa',
    avaliado:
      'As linhas que aparecem quando você levanta as sobrancelhas, se elas continuam marcadas com o rosto parado e como a testa se movimenta.',
    procedimentos: [estetica],
    formulario: estetica,
    area: ['M98 136C106 110 126 98 150 98S194 110 202 136C184 140 166 141 150 141S116 140 98 136Z'],
    marca: ['M98 136C106 110 126 98 150 98S194 110 202 136C184 140 166 141 150 141S116 140 98 136Z'],
  },
  {
    id: 'glabela',
    nome: 'Entre as sobrancelhas',
    avaliado: 'As linhas verticais que surgem quando você franze a testa e a força desse movimento.',
    procedimentos: [estetica],
    formulario: estetica,
    area: ['M150 143C157 143 160 151 160 158S156 172 150 172 140 166 140 158 143 143 150 143Z'],
    marca: ['M150 143C157 143 160 151 160 158S156 172 150 172 140 166 140 158 143 143 150 143Z'],
  },
  {
    id: 'olhos',
    nome: 'Ao redor dos olhos',
    avaliado: 'As linhas no canto dos olhos que aparecem ao sorrir, com o rosto parado e em movimento.',
    procedimentos: [estetica],
    formulario: estetica,
    area: [
      'M103 170C93 166 84 175 84 185S93 204 103 199C99 191 99 178 103 170Z',
      'M197 170C207 166 216 175 216 185S207 204 197 199C201 191 201 178 197 170Z',
    ],
    marca: [
      'M103 170C93 166 84 175 84 185S93 204 103 199C99 191 99 178 103 170Z',
      'M197 170C207 166 216 175 216 185S207 204 197 199C201 191 201 178 197 170Z',
    ],
  },
  {
    id: 'nariz',
    nome: 'Nariz',
    avaliado: 'As linhas que aparecem nas laterais do nariz quando você franze o rosto.',
    procedimentos: [estetica],
    formulario: estetica,
    area: ['M144 176H156C157 196 160 214 163 228 166 238 160 244 150 244S134 238 137 228C140 214 143 196 144 176Z'],
    marca: ['M144 176H156C157 196 160 214 163 228 166 238 160 244 150 244S134 238 137 228C140 214 143 196 144 176Z'],
  },
  {
    id: 'queixo',
    nome: 'Queixo',
    avaliado: 'A pele do queixo que fica enrugada, como casca de laranja, quando você contrai a boca.',
    procedimentos: [estetica],
    formulario: estetica,
    area: ['M130 296C140 292 160 292 170 296 170 310 162 320 150 321S130 310 130 296Z'],
    marca: ['M130 296C140 292 160 292 170 296 170 310 162 320 150 321S130 310 130 296Z'],
  },
  {
    id: 'mandibula',
    nome: 'Mandíbula',
    avaliado:
      'A força do músculo que você usa para mastigar e apertar os dentes, ligada ao bruxismo, e se há dor ou cansaço na região.',
    procedimentos: [terapeutica],
    formulario: terapeutica,
    area: [
      'M85 240C91 264 103 288 123 312L131 302C113 282 101 260 97 236Z',
      'M215 240C209 264 197 288 177 312L169 302C187 282 199 260 203 236Z',
    ],
    marca: ['M91 239C97 263 109 287 127 307', 'M209 239C203 263 191 287 173 307'],
  },
  {
    id: 'orelha',
    nome: 'Orelha',
    avaliado: 'O lóbulo, o melhor ponto para o furo e se a pele da região está saudável.',
    procedimentos: [furo],
    formulario: furo,
    area: [
      'M84 161C69 155 60 176 64 195S77 216 89 212Z',
      'M216 161C231 155 240 176 236 195S223 216 211 212Z',
    ],
    marca: ['M84 161C69 155 60 176 64 195S77 216 89 212', 'M216 161C231 155 240 176 236 195S223 216 211 212'],
  },
];
