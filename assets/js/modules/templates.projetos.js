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
  </section>`;
}
