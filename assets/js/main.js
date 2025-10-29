document.addEventListener("DOMContentLoaded",() => {
  // Hamburger
  const hamburger = document.querySelector(".hamburger");
  const drawer = document.querySelector(".mobile-drawer");
  if(hamburger && drawer){
    hamburger.addEventListener("click", ()=> drawer.classList.toggle("open"));
  }

  // Toast
  const toast = document.querySelector(".toast");
  document.querySelectorAll("[data-toast='donate']").forEach(btn => btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(!toast) return;
    toast.textContent = "Obrigado! Em breve ativaremos as doações online.";
    toast.classList.add("show");
    setTimeout(()=> toast.classList.remove("show"), 2800);
  }));

  // Modal
  const openModal = document.querySelectorAll("[data-modal='open']");
  const closeModal = document.querySelectorAll("[data-modal='close']");
  const backdrop = document.querySelector(".modal-backdrop");
  openModal.forEach(b => b.addEventListener("click",(e)=>{e.preventDefault(); if(backdrop) backdrop.classList.add("open");}));
  closeModal.forEach(b => b.addEventListener("click",(e)=>{e.preventDefault(); if(backdrop) backdrop.classList.remove("open");}));

  // Masks + validation
  const form = document.querySelector("form#cadastro");
  const formAlert = document.querySelector("#form-alert");
  function mask(v, pattern){
    const s = v.replace(/\D/g,'');
    let i = 0, out='';
    for(const ch of pattern){ out += (ch === '#') ? (s[i++] ?? '') : ch; }
    return out;
  }
  const cpf = document.querySelector("#cpf");
  const tel = document.querySelector("#telefone");
  const cep = document.querySelector("#cep");
  if(cpf) cpf.addEventListener("input", e => e.target.value = mask(e.target.value, "###.###.###-##"));
  if(tel) tel.addEventListener("input", e => e.target.value = mask(e.target.value, "(##) #####-####"));
  if(cep) cep.addEventListener("input", e => e.target.value = mask(e.target.value, "#####-###"));

  if(form){
    form.addEventListener("submit",(e)=>{
      if(!form.checkValidity()){
        e.preventDefault();
        if(formAlert){
          formAlert.className = "alert alert-danger mt-2";
          formAlert.innerHTML = "<strong>Ops!</strong> Verifique os campos obrigatórios e os formatos.";
        }
      }else{
        e.preventDefault();
        if(formAlert){
          formAlert.className = "alert alert-success mt-2";
          formAlert.textContent = "Cadastro enviado com sucesso (simulado).";
        }
      }
    });
  }
});