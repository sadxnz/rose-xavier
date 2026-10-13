# Site da Rose Xavier, enfermeira esteta

## Contexto
Construa o site profissional da Rose Xavier, enfermeira que atua com estética injetável (lista de procedimentos: [PREENCHER]) e atende no Clinical Hub, em [CIDADE], Ceará. O site tem um único trabalho: fazer a pessoa agendar uma avaliação presencial pelo WhatsApp, com confiança.

Público: mulheres adultas que chegam pelo Instagram, no celular, já pesquisaram o procedimento e têm dois medos: ficar artificial e cair na mão de alguém sem formação.

As fotos reais estão em ./fotos. Abra e olhe cada uma antes de decidir qualquer coisa de design. A identidade visual tem que sair delas, não de um template de clínica.

## Fotos (./fotos)
- rose-recepcao.jpg: Rose de macacão preto na recepção, arco iluminado e ripado de madeira (abertura)
- rose-jaleco-espelho.jpg: selfie de jaleco no consultório (quem atende)
- rose-macacao-espelho.jpg: selfie de macacão na sala (apoio)
- preparo-1.jpg, preparo-2.jpg: Rose de luvas preparando a seringa (como é o atendimento)
- bandeja-1 a 4.jpg: bandeja espelhada com seringas e o espelho de mão com o logo. A caixa do medicamento aparece com a marca: só use se recortar ou desfocar a embalagem
- marcacao-*.jpg e espelho-*.jpg: mostram uma paciente. Ficam FORA da versão inicial

## Identidade (extraída das fotos)
- Logo: mão dourada segurando um botão de flor de três pétalas, com o nome em serifada dourada. Se ./marca/logo.svg não existir, não redesenhe o logo: use só o nome em texto.
- Materiais do espaço: ripado de madeira clara, quartzito com veios taupe, puxadores concha em latão escovado, arco de recepção com luz quente, espelhos de formato orgânico (tipo seixo), revestimento 3D de mármore trançado com filetes dourados, gavetas marrom-chocolate.
- A Rose: jaleco branco acinturado, preto, joias douradas (brinco sol com pérola), tatuagens, rabo de cavalo alinhado. Elegante e firme, nada de rosa-bebê ou "fofo".
- Paleta de partida (confirme amostrando as fotos com Pillow/k-means e ajuste): pedra #D8CEC0, veio taupe #9E8F7F, madeira #C6A27A, latão #B39556, marrom gaveta #5A4132 (é o escuro do site, no lugar de preto), branco jaleco #FCFCFB. O rosa da máscara (#E8A9B9) só pode aparecer como cor de estado (seleção/foco).
- Linguagem de forma: o arco da recepção e os espelhos orgânicos viram as máscaras das imagens (clip-path ou SVG). Raio de borda não é uniforme: cada forma tem um motivo.
- Tipografia: no máximo duas famílias, escolhidas e justificadas. Caminhos possíveis: serifada de alto contraste com ar de joalheria (ex.: Bodoni Moda) ou sans geométrica clássica parecida com a placa do Clinical Hub (ex.: Jost). Proibidas: Inter, Poppins, Montserrat, Playfair Display, Cormorant, Raleway, DM Sans, Fraunces, Instrument Serif.

## Stack
- Astro com saída estática + CSS próprio com custom properties. Sem Tailwind, sem shadcn, sem biblioteca de componentes, sem GSAP. JavaScript só onde há interação.
- Imagens pelo `<Picture>` do Astro: AVIF/WebP, srcset, lazy abaixo da dobra, EXIF removido (fotos de iPhone podem carregar localização GPS).
- Fontes auto-hospedadas em woff2, subset latin, com fallback.
- Deploy na Vercel.

## Seções, nesta ordem
1. Abertura: rose-recepcao dentro da forma do arco. Nome, "Enfermeira" e [SLOGAN DA ROSE]. Um botão só: "Agendar avaliação". Nada de número grande com estatística.
2. Quem atende: rose-jaleco-espelho. Formação, especialização em estética e tempo de atuação como [PREENCHER]; Coren-CE nº 554751. Texto curto em primeira pessoa, que ela vai reescrever. Credenciais aparecem ANTES do primeiro formulário.
3. Mapa facial interativo (o elemento memorável, detalhado abaixo).
4. Procedimentos: lista em formato de índice/cardápio, não grade de cards. Cada item expande: o que é, duração da sessão, quando é o retorno, cuidados depois. Todo conteúdo clínico é [ROSE VALIDA]. Não invente números.
5. Como é o atendimento: é uma sequência real, então aqui a numeração faz sentido: 1) avaliação e anamnese, 2) marcação do rosto, 3) aplicação, 4) retorno. Use preparo-1 e preparo-2.
6. O espaço: Clinical Hub, endereço [PREENCHER], horários [PREENCHER], link "Abrir no Google Maps" (sem iframe).
7. Dúvidas: acordeão acessível. Dói? Quanto tempo dura? Quem não pode fazer? Quanto custa? Respostas [ROSE VALIDA].
8. Agendar: mini-formulário (nome, o que quer avaliar, já fez antes?) que monta a mensagem e abre `wa.me/[NUMERO]?text=...`. Nenhum dado vai para servidor.
9. Rodapé: Rose Xavier, Enfermeira, Coren-CE nº 554751, endereço, Instagram, o aviso "Resultados variam de pessoa para pessoa; todo procedimento depende de avaliação presencial" e link para a política de privacidade.

No mobile: botão fixo embaixo "Agendar pelo WhatsApp", que some quando a seção 8 está na tela.

## Mapa facial interativo
- Ilustração original em SVG, rosto frontal em traço fino, no estilo das linhas brancas que a Rose desenha com lápis antes de aplicar. Use as fotos de marcação só como referência de estilo; não trace o rosto da paciente.
- Regiões clicáveis: testa, entre as sobrancelhas, ao redor dos olhos, [OUTRAS REGIÕES QUE ELA ATENDE].
- Ao tocar, a linha de marcação é desenhada em tracejado sobre a região (é a ÚNICA animação de vitrine do site) e abre um painel (lateral no desktop, bottom sheet no mobile) com: o que costuma ser avaliado ali, procedimentos possíveis "sujeitos à avaliação" e o botão "Perguntar sobre essa região", que abre o WhatsApp com o nome da região já na mensagem.
- Acessível: cada região também existe como `<button>` numa lista para teclado e leitor de tela, com aria-pressed, foco visível e Esc fechando o painel.
- Proibido prometer resultado ("elimina rugas", "rejuvenesce X anos").

## Regras legais (não negociáveis)
- Nunca citar marca de toxina ou preenchedor em texto, alt ou nome de arquivo: medicamento de venda sob prescrição não pode ser anunciado ao público.
- Nome, categoria profissional e nº do Coren (Coren-CE nº 554751) visíveis no site.
- Nenhuma promessa de resultado, nenhum antes e depois, nenhum depoimento, nota ou número de clientes inventado.
- Fotos com paciente ficam fora. Deixe pronto no código, desligado por uma flag, um componente de galeria para quando houver autorização de imagem por escrito.
- LGPD: o formulário não coleta dados de saúde; política de privacidade simples [PREENCHER]; nenhum pixel ou analytics até eu pedir.

## Vícios de site feito por IA (proibidos)
- Gradiente roxo/azul, glassmorphism, blobs flutuando no fundo, brilho neon.
- Grade de três cards iguais com ícone em cima; mesmo border-radius e mesma sombra cinza em tudo.
- Emojis e ícones genéricos (Lucide, Heroicons) enfeitando títulos.
- Rótulo em CAPS espaçado acima de cada título; uma palavra do título em itálico ou cor diferente; seta no fim de todo botão; metadados separados por ponto médio.
- Fade-up em toda seção, contadores animados, carrossel automático, cursor customizado, parallax.
- Fundo creme #F4F1EA com acento terracota; "quase preto" #111.
- Foto de banco de imagem ou gerada por IA.
- Numeração 01/02/03 fora da seção de etapas.

## Texto
- Português do Brasil, frases curtas, voz ativa, tom de conversa de consultório. Botões dizem o que acontece ("Abrir WhatsApp", nunca "Saiba mais").
- Banidas: "realce sua beleza natural", "sua melhor versão", "transforme sua autoestima", "excelência", "experiência única", "o cuidado que você merece", "descubra".
- Tudo que você não sabe vira [PREENCHER: descrição]. Nunca lorem ipsum, nunca dado inventado.

## Processo
1. Olhe as fotos, extraia a paleta e me entregue um plano curto: tokens de cor em hex, tipografia com escala, wireframe ASCII das seções no mobile e no desktop, e uma frase sobre o que torna este site diferente de um template de clínica.
2. Revise o plano contra a lista de vícios. O que parecer escolha padrão, troque e me diga o que trocou. ESPERE meu OK antes de codar.
3. Construa mobile-first (390px), depois desktop (1440px).
4. Tire screenshots com Playwright nas duas larguras, critique e corrija. Antes de entregar, remova um enfeite.
5. Metas: Lighthouse ≥ 95 em performance e acessibilidade no mobile, contraste AA, prefers-reduced-motion respeitado (sem animação de traço, o painel abre direto), HTML semântico, JSON-LD de negócio local e Open Graph com rose-recepcao.
6. No final, liste todos os [PREENCHER] e [ROSE VALIDA] que sobraram.
