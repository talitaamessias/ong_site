function maskCPF(value){return value.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2');}
function maskPhone(value){return value.replace(/\D/g,'').replace(/(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d{4})$/,'$1-$2');}
function maskCEP(value){return value.replace(/\D/g,'').replace(/(\d{5})(\d{3})$/,'$1-$2');}
document.addEventListener("DOMContentLoaded",()=>{
  const cpf=document.querySelector("#cpf");
  const phone=document.querySelector("#telefone");
  const cep=document.querySelector("#cep");
  if(cpf) cpf.addEventListener("input",(e)=>e.target.value=maskCPF(e.target.value));
  if(phone) phone.addEventListener("input",(e)=>e.target.value=maskPhone(e.target.value));
  if(cep) cep.addEventListener("input",(e)=>e.target.value=maskCEP(e.target.value));
  const form=document.querySelector("form#cadastro");
  if(form){form.addEventListener("submit",(e)=>{if(!form.checkValidity()){e.preventDefault();alert("Por favor, complete os campos obrigatórios no formato correto.");}});}
  document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",(e)=>{const id=a.getAttribute("href");const el=document.querySelector(id);if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"});}});});
});