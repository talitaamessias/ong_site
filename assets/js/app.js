import { Router } from "./modules/spa.js";
import { HomeTemplate } from "./modules/templates.home.js";
import { ProjetosTemplate } from "./modules/templates.projetos.js";
import { CadastroTemplate } from "./modules/templates.cadastro.js";
import { UI } from "./modules/ui.js";
import { Validate } from "./modules/validate.js";
import { Storage } from "./modules/storage.js";

const outlet=document.querySelector("#app");
Router.mount(outlet);
Router.add("#/",()=>HomeTemplate());
Router.add("#/projetos",()=>ProjetosTemplate());
Router.add("#/cadastro",()=>CadastroTemplate());
Router.start();

UI.bindGlobalUI();

window.addEventListener("page:rendered",({detail})=>{
  if(detail.path==="#/cadastro"){
    const form=document.querySelector("form#cadastro");
    if(form){
      Storage.load(form);
      const { validateAll } = Validate.bindForm(form);
      form.addEventListener("input",()=>Storage.save(form));
      form.addEventListener("reset",()=>{ setTimeout(()=>Storage.clear(),0); });
      setTimeout(()=>validateAll(),10);
    }
  }
});