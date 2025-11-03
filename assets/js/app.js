document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", e => {
      if (link.getAttribute("href").startsWith("#")) {
        e.preventDefault();
      }
    });
  });
});

