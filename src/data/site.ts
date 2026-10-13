export const site = {
  nome: 'Rose Xavier',
  profissao: 'Enfermeira',
  coren: 'Coren-CE nº 554751',
  slogan: 'Um toque na sua beleza.',
  local: 'Clinical Hub',
  cidade: 'Fortaleza',
  uf: 'CE',
  // Sala alugada, endereço ainda não definido. Quando houver, preencha aqui:
  // o endereço aparece no site e o link "Abrir no Google Maps" é ligado.
  endereco: null as string | null,
  horarios: 'Atendimento só com horário marcado.',
  whatsapp: '5585991211235',
  whatsappExibicao: '(85) 99121-1235',
  instagram: 'enf.rosexavier',
  // Fotos com paciente: só ligar com autorização de imagem por escrito.
  galeriaAtiva: false,
};

export const mensagemPadrao = 'Olá, Rose! Vim pelo site e quero agendar uma avaliação.';

export function linkWhatsApp(texto: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`;
}

export function linkMaps(endereco: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
}

export const linkInstagram = `https://www.instagram.com/${site.instagram}/`;
