export function HomeTemplate(){
  return `
  <section class="hero">
    <div class="container">
      <h1>ONG Exemplo</h1>
      <p class="small">Projetos, doações e voluntariado.</p>
      <p class="actions">
        <a class="button" data-link href="#/projetos">Ver projetos</a>
        <a class="button-outline" data-link href="#/cadastro">Quero ser voluntário(a)</a>
      </p>
    </div>
  </section>

  <section class="container grid grid-3 mt-3">
    <article class="card"><h2>Transparência</h2><p>Prestação de contas clara.</p></article>
    <article class="card"><h2>Impacto</h2><p>50+ iniciativas em 12 estados.</p></article>
    <article class="card"><h2>Comunidade</h2><p>Rede de voluntários engajados.</p></article>
  </section>`;
}
