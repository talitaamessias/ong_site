export function HomeTemplate(){return`
  <section class="hero">
    <div class="container">
      <div class="kicker small">SPA Dinâmica</div>
      <h1>ONG Exemplo — Impacto que se move</h1>
      <p>Agora como aplicação de página única (SPA), com navegação instantânea e componentes interativos.</p>
      <div class="mt-2">
        <a class="button" data-link href="#/projetos">Ver Projetos</a>
        <a class="button-outline" data-link href="#/cadastro">Quero ser voluntário(a)</a>
      </div>
    </div>
  </section>
  <section>
    <div class="container grid grid-12">
      <div class="col-4 col-md-6 col-sm-12"><article class="card"><h3>Histórico</h3><p>50+ iniciativas apoiadas em 12 estados.</p><span class="badge mt-2">ESG</span></article></div>
      <div class="col-4 col-md-6 col-sm-12"><article class="card"><h3>Equipe</h3><p>Profissionais e voluntários qualificados.</p><span class="badge mt-2">Conselho</span></article></div>
      <div class="col-4 col-md-12 col-sm-12"><article class="card"><h3>Transparência</h3><p>Relatórios periódicos de impacto.</p><a class="button mt-2" href="#" data-modal="open">Ver Relatórios</a></article></div>
    </div>
  </section>
  <section>
    <div class="container grid grid-12">
      <div class="col-6 col-sm-12">
        <figure class="card glass"><img src="assets/img/hero.jpg" alt="Ação comunitária"><figcaption class="small">Ação comunitária.</figcaption></figure>
      </div>
      <div class="col-6 col-sm-12">
        <figure class="card glass"><img src="assets/img/voluntarios.jpg" alt="Voluntários"><figcaption class="small">Rede de voluntariado.</figcaption></figure>
      </div>
    </div>
  </section>`;}