export const Router = (() => {
  const routes = new Map();
  let outlet = null;

  function render() {
    const path = (location.hash || "#/").split("?")[0];
    const view = routes.get(path) || routes.get("#/");
    Promise.resolve(view && view()).then((html) => {
      if (outlet) outlet.innerHTML = html || "";
      window.scrollTo(0, 0);
      window.dispatchEvent(new CustomEvent("page:rendered", { detail: { path } }));
    });
  }

  return {
    mount: (el) => (outlet = el),
    add: (path, fn) => routes.set(path, fn),
    start: () => {
      addEventListener("hashchange", render);
      document.addEventListener("click", (e) => {
        const a = e.target.closest("a[data-link]");
        if (a) {
          e.preventDefault();
          location.hash = a.getAttribute("href");
        }
      });
      render();
    },
  };
})();
