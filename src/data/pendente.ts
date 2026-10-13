// Destaca [PREENCHER: ...] e [ROSE VALIDA: ...] no texto para ninguém publicar sem revisar.
const escapar = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export function marcar(texto: string) {
  return escapar(texto).replace(
    /\[(PREENCHER|ROSE VALIDA)([^\]]*)\]/g,
    '<mark class="pendente">[$1$2]</mark>',
  );
}
