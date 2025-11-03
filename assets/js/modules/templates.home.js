export function HomeTemplate(){
  return `
  <section class="hero">
    <div class="container">
      <h1>ONG Exemplo</h1>
      <p class="small">Projetos, doações e voluntariado — simples, transparente e rápido.</p>
      <p class="actions">
        <a class="button" data-link href="#/projetos">Ver projetos</a>
        <a class="button-outline" data-link href="#/cadastro">Quero ser voluntário(a)</a>
      </p>
      <figure class="card mt-2">
        <img src="assets/img/hero.jpg" alt="Equipe da ONG em ação">
        <figcaption class="small">Nossa atuação em campo.</figcaption>
      </figure>
    </div>
  </section>

  <section class="container grid grid-3 mt-3">
    <article class="card"><h2>Transparência</h2><p>Relatórios e prestação de contas.</p></article>
    <article class="card"><h2>Impacto</h2><p>50+ iniciativas em 12 estados.</p></article>
    <article class="card"><h2>Comunidade</h2><p>Rede de voluntários engajados.</p></article>
  </section>`;
}
