export function ProjetosTemplate(){
  return `
  <section class="container mt-3">
    <h1>Projetos Sociais</h1>
    <figure class="card mt-2">
      <img src="assets/img/projetos.jpg" alt="Projetos sociais">
      <figcaption class="small">Resultados e impacto.</figcaption>
    </figure>
    <div class="grid grid-3 mt-3">
      <article class="card" id="educacao"><span class="badge">Educação</span><h2>Educação para o Futuro</h2><p>Capacitação tecnológica.</p></article>
      <article class="card" id="cultura"><span class="badge">Cultura</span><h2>Cultura que Transforma</h2><p>Oficinas artísticas.</p></article>
      <article class="card" id="emprego"><span class="badge">Empregabilidade</span><h2>Primeiro Emprego</h2><p>Mentorias e encaminhamento.</p></article>
    </div>

    <section class="card mt-3">
      <h2>Transparência e Doações</h2>
      <p><strong>Campanha:</strong> Laboratório de Informática — <em>Meta R$ 50.000</em></p>
      <p class="actions">
        <a class="button" href="#" data-toast="donate">Doar agora</a>
        <a class="button-outline" href="#" data-modal="open">Prestação de contas</a>
      </p>
    </section>
  </section>

  <!-- Modal fica no template para não depender do index -->
  <div class="modal-backdrop" role="dialog" aria-modal="true" aria-label="Relatórios de Transparência">
    <div class="modal card">
      <header class="flex items-center justify-between">
        <h3>Relatórios de Transparência</h3>
        <button class="btn-ghost" data-modal="close" aria-label="Fechar">✕</button>
      </header>
      <p class="text-muted">Relatórios anuais e auditorias (simulação).</p>
      <div class="actions">
        <a class="button-outline" href="#">Relatório 2023</a>
        <a class="button-outline" href="#">Relatório 2024</a>
      </div>
      <div class="text-right mt-2">
        <button class="button" data-modal="close">Fechar</button>
      </div>
    </div>
  </div>`;
}
