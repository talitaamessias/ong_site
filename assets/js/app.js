<main id="app"></main>
document.addEventListener("DOMContentLoaded", () => {
  const routes = {
    "/": "index.html",
    "/projetos": "projetos.html",
    "/cadastro": "cadastro.html"
  };

  function loadPage(path) {
    const page = routes[path] || "index.html";
    fetch(page)
      .then(res => res.text())
      .then(html => {
        document.getElementById("app").innerHTML = html;
        window.scrollTo(0, 0);
      })
      .catch(() => {
        document.getElementById("app").innerHTML = "<h2>Página não encontrada</h2>";
      });
  }

  // inicializa
  loadPage(location.hash.slice(1) || "/");

  // navegação hash
  window.addEventListener("hashchange", () => {
    const hash = location.hash.slice(1);
    loadPage(hash || "/");
  });
});
