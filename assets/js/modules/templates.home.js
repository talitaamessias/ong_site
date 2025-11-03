export function HomeTemplate(){
  return `
  <section class="hero">
    <div class="container">
      <h1>Impacto que se move</h1>
      <p>SPA com navegação instantânea e componentes interativos.</p>
      <p class="actions">
        <a class="button" data-link href="#/projetos">Ver Projetos</a>
        <a class="button-outline" data-link href="#/cadastro">Quero ser voluntário(a)</a>
      </p>
      <figure class="card mt-2">
        <img src="assets/img/hero.jpg" alt="Equipe da ONG em ação">
        <figcaption class="small">Nossa atuação em campo.</figcaption>
      </figure>
    </div>
  </section>
  <section class="container grid grid-3 mt-3">
    <article class="card"><h2>Histórico</h2><p>50+ iniciativas apoiadas.</p></article>
    <article class="card"><h2>Equipe</h2><p>Profissionais e voluntários.</p></article>
    <article class="card"><h2>Transparência</h2><p>Relatórios periódicos.</p></article>
  </section>`;
}
