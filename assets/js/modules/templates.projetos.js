export function ProjetosTemplate(){return`
  <section class="container mt-3">
    <h1>Projetos Sociais</h1>
    <figure class="card glass">
      <img src="assets/img/projetos.jpg" alt="Projetos">
      <figcaption class="small">Projetos com métricas de impacto abertas.</figcaption>
    </figure>
  </section>
  <section>
    <div class="container grid grid-12">
      <div class="col-4 col-md-6 col-sm-12" id="educacao">
        <article class="card">
          <div class="badges"><span class="badge">Educação</span></div>
          <h3>Educação para o Futuro</h3>
          <p>Capacitação tecnológica para jovens.</p>
        </article>
      </div>
      <div class="col-4 col-md-6 col-sm-12" id="cultura">
        <article class="card">
          <div class="badges"><span class="badge">Cultura</span></div>
          <h3>Cultura que Transforma</h3>
          <p>Oficinas artísticas itinerantes.</p>
        </article>
      </div>
      <div class="col-4 col-md-12 col-sm-12" id="emprego">
        <article class="card">
          <div class="badges"><span class="badge">Empregabilidade</span></div>
          <h3>Primeiro Emprego</h3>
          <p>Mentorias e encaminhamento.</p>
        </article>
      </div>
    </div>
  </section>
  <section class="container">
    <h2>Transparência e Doações</h2>
    <div class="grid grid-12">
      <div class="col-6 col-sm-12">
        <div class="card">
          <p><strong>Campanha:</strong> Laboratório de Informática</p>
          <p><strong>Meta:</strong> R$ 50.000 — <em>Progresso: R$ 21.350</em></p>
          <div class="mt-2">
            <a class="button" href="#" data-toast="donate">Doar agora</a>
            <a class="button-outline" href="#" data-modal="open">Prestação de contas</a>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-12">
        <figure class="card glass">
          <img src="assets/img/doacoes.jpg" alt="Doações">
          <figcaption class="small">Metas e progresso (simulado).</figcaption>
        </figure>
      </div>
    </div>
  </section>`;}