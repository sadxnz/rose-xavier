// Regiões do mapa facial. Desenho em viewBox 0 0 300 400.
// `area`: onde o toque funciona. `marca`: a linha tracejada (o lápis branco da Rose).
// Regiões dos dois lados do rosto têm um caminho para cada lado, para o traço nascer ao mesmo tempo.

export interface Regiao {
  id: string;
  nome: string;
  avaliado: string;
  procedimentos: string[];
  area: string[];
  marca: string[];
}

const aFazer = ['[PREENCHER: procedimentos que a Rose faz nesta região]'];

export const regioes: Regiao[] = [
  {
    id: 'testa',
    nome: 'Testa',
    avaliado:
      'As linhas que aparecem quando você levanta as sobrancelhas, se elas continuam marcadas com o rosto parado e como a testa se movimenta. [ROSE VALIDA]',
    procedimentos: aFazer,
    area: ['M98 136C106 110 126 98 150 98S194 110 202 136C184 140 166 141 150 141S116 140 98 136Z'],
    marca: ['M98 136C106 110 126 98 150 98S194 110 202 136C184 140 166 141 150 141S116 140 98 136Z'],
  },
  {
    id: 'glabela',
    nome: 'Entre as sobrancelhas',
    avaliado:
      'As linhas verticais que surgem quando você franze a testa e a força desse movimento. [ROSE VALIDA]',
    procedimentos: aFazer,
    area: ['M150 143C157 143 160 151 160 158S156 172 150 172 140 166 140 158 143 143 150 143Z'],
    marca: ['M150 143C157 143 160 151 160 158S156 172 150 172 140 166 140 158 143 143 150 143Z'],
  },
  {
    id: 'olhos',
    nome: 'Ao redor dos olhos',
    avaliado:
      'As linhas no canto dos olhos que aparecem ao sorrir, com o rosto parado e em movimento. [ROSE VALIDA]',
    procedimentos: aFazer,
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
    id: 'olheiras',
    nome: 'Olheiras',
    avaliado: 'A profundidade da região abaixo dos olhos, a cor e a textura da pele. [ROSE VALIDA]',
    procedimentos: aFazer,
    area: [
      'M106 191C114 197 126 197 134 191C133 200 126 207 118 207S106 200 106 191Z',
      'M194 191C186 197 174 197 166 191C167 200 174 207 182 207S194 200 194 191Z',
    ],
    marca: [
      'M106 191C114 197 126 197 134 191C133 200 126 207 118 207S106 200 106 191Z',
      'M194 191C186 197 174 197 166 191C167 200 174 207 182 207S194 200 194 191Z',
    ],
  },
  {
    id: 'nariz',
    nome: 'Nariz',
    avaliado:
      'O dorso, a ponta e o perfil do nariz, e como ele se relaciona com o resto do rosto. [ROSE VALIDA]',
    procedimentos: aFazer,
    area: ['M144 176H156C157 196 160 214 163 228 166 238 160 244 150 244S134 238 137 228C140 214 143 196 144 176Z'],
    marca: ['M144 176H156C157 196 160 214 163 228 166 238 160 244 150 244S134 238 137 228C140 214 143 196 144 176Z'],
  },
  {
    id: 'macas',
    nome: 'Maçãs do rosto',
    avaliado: 'O volume e a sustentação da região, de frente e de perfil. [ROSE VALIDA]',
    procedimentos: aFazer,
    area: [
      'M94 214C104 208 122 210 130 218 127 232 114 240 102 239 94 234 91 222 94 214Z',
      'M206 214C196 208 178 210 170 218 173 232 186 240 198 239 206 234 209 222 206 214Z',
    ],
    marca: [
      'M94 214C104 208 122 210 130 218 127 232 114 240 102 239 94 234 91 222 94 214Z',
      'M206 214C196 208 178 210 170 218 173 232 186 240 198 239 206 234 209 222 206 214Z',
    ],
  },
  {
    id: 'bigode',
    nome: 'Bigode chinês',
    avaliado: 'O sulco que vai do nariz ao canto da boca, com o rosto parado e sorrindo. [ROSE VALIDA]',
    procedimentos: aFazer,
    area: [
      'M136 242C130 250 124 261 122 273L108 271C110 256 117 245 126 236Z',
      'M164 242C170 250 176 261 178 273L192 271C190 256 183 245 174 236Z',
    ],
    marca: ['M133 240C126 250 120 260 117 272', 'M167 240C174 250 180 260 183 272'],
  },
  {
    id: 'labios',
    nome: 'Lábios',
    avaliado:
      'Contorno, volume, simetria e hidratação, e a proporção entre o lábio de cima e o de baixo. [ROSE VALIDA]',
    procedimentos: aFazer,
    area: ['M122 266C132 256 142 255 150 259 158 255 168 256 178 266 172 284 160 288 150 288S128 284 122 266Z'],
    marca: ['M122 266C132 256 142 255 150 259 158 255 168 256 178 266 172 284 160 288 150 288S128 284 122 266Z'],
  },
  {
    id: 'queixo',
    nome: 'Queixo',
    avaliado: 'A projeção do queixo de perfil e o equilíbrio com o nariz e os lábios. [ROSE VALIDA]',
    procedimentos: aFazer,
    area: ['M130 296C140 292 160 292 170 296 170 310 162 320 150 321S130 310 130 296Z'],
    marca: ['M130 296C140 292 160 292 170 296 170 310 162 320 150 321S130 310 130 296Z'],
  },
  {
    id: 'mandibula',
    nome: 'Mandíbula',
    avaliado: 'O contorno da linha da mandíbula, do queixo até perto da orelha. [ROSE VALIDA]',
    procedimentos: aFazer,
    area: [
      'M85 240C91 264 103 288 123 312L131 302C113 282 101 260 97 236Z',
      'M215 240C209 264 197 288 177 312L169 302C187 282 199 260 203 236Z',
    ],
    marca: ['M91 239C97 263 109 287 127 307', 'M209 239C203 263 191 287 173 307'],
  },
];
