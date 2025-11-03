import { Router } from "./modules/spa.js";
import { HomeTemplate } from "./modules/templates.home.js";
import { ProjetosTemplate } from "./modules/templates.projetos.js";
import { CadastroTemplate } from "./modules/templates.cadastro.js";
import { UI } from "./modules/ui.js";
import { Validate } from "./modules/validate.js";

// monta a SPA no #app
const outlet = document.querySelector("#app");
if (outlet) {
  Router.mount(outlet);
  Router.add("#/", () => HomeTemplate());
  Router.add("#/projetos", () => ProjetosTemplate());
  Router.add("#/cadastro", () => CadastroTemplate());
  Router.start();
}

// liga interações globais (hambúrguer, toast, modal)
UI.bind();

// quando a rota mudar para cadastro, liga a validação
window.addEventListener("page:rendered", ({detail})=>{
  if (detail?.path === "#/cadastro") {
    const form = document.querySelector("form#cadastro");
    if (form) Validate.bindForm(form);
  }
});
