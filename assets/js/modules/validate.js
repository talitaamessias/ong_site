export const Validate = (() => {
  const onlyD = (s) => (s||"").replace(/\D/g,"");
  const emailOk = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s||"");
  const telOk = (s) => /^\(\d{2}\)\s\d{5}-\d{4}$/.test(s||"");
  const cepOk = (s) => /^\d{5}-\d{3}$/.test(s||"");

  const maskCPF = v => onlyD(v).replace(/^(\d{3})(\d{3})(\d{3})(\d{0,2}).*/,(_,a,b,c,d)=> d?`${a}.${b}.${c}-${d}`:`${a}.${b}.${c}`);
  const maskTel = v => onlyD(v).replace(/^(\d{2})(\d{5})(\d{0,4}).*/,(_,a,b,c)=> c?`(${a}) ${b}-${c}`:`(${a}) ${b}`);
  const maskCEP = v => onlyD(v).replace(/^(\d{5})(\d{0,3}).*/,(_,a,b)=> b?`${a}-${b}`:a);

  function cpfOk(cpf){
    const s=onlyD(cpf);
    if(!s||s.length!==11||/(\d)\1{10}/.test(s))return false;
    let sum=0; for(let i=0;i<9;i++) sum+=+s[i]*(10-i);
    let d1=(sum*10)%11; if(d1===10)d1=0; if(d1!==+s[9]) return false;
    sum=0; for(let i=0;i<10;i++) sum+=+s[i]*(11-i);
    let d2=(sum*10)%11; if(d2===10)d2=0; return d2===+s[10];
  }

  const UFs=new Set("AC AL AP AM BA CE DF ES GO MA MT MS MG PA PB PR PE PI RJ RN RS RO RR SC SP SE TO".split(" "));

  function setErr(form,id,msg){
    const el=form.querySelector(`[data-error-for="${id}"]`);
    const f=form.querySelector("#"+id);
    el&&(el.textContent=msg||"");
    if(f){ f.classList.toggle("is-invalid",!!msg); f.classList.toggle("is-valid",!msg && f.value.trim()!==""); }
  }

  function idadeOk(str){
    if(!str) return false;
    const d=new Date(str); if(isNaN(d)) return false;
    const n=new Date(); let age=n.getFullYear()-d.getFullYear();
    const m=n.getMonth()-d.getMonth();
    if(m<0||(m===0&&n.getDate()<d.getDate())) age--;
    return age>=16;
  }

  return {
    bindForm(form){
      const a=document.querySelector("#form-alert");
      const f={nome:form.querySelector("#nome"),email:form.querySelector("#email"),cpf:form.querySelector("#cpf"),
        telefone:form.querySelector("#telefone"),nascimento:form.querySelector("#nascimento"),cep:form.querySelector("#cep"),
        endereco:form.querySelector("#endereco"),cidade:form.querySelector("#cidade"),uf:form.querySelector("#uf"),termos:form.querySelector("#termos")};

      f.cpf?.addEventListener("input",e=>e.target.value=maskCPF(e.target.value));
      f.telefone?.addEventListener("input",e=>e.target.value=maskTel(e.target.value));
      f.cep?.addEventListener("input",e=>e.target.value=maskCEP(e.target.value));

      function validate(){
        const errs=[];
        f.nome.value.trim()?setErr(form,"nome",""):(setErr(form,"nome","Campo obrigatório."),errs.push("Nome"));
        emailOk(f.email.value)?setErr(form,"email",""):(setErr(form,"email","E-mail inválido."),errs.push("E-mail"));
        cpfOk(f.cpf.value)?setErr(form,"cpf",""):(setErr(form,"cpf","CPF inválido."),errs.push("CPF"));
        telOk(f.telefone.value)?setErr(form,"telefone",""):(setErr(form,"telefone","Use (00) 00000-0000."),errs.push("Telefone"));
        idadeOk(f.nascimento.value)?setErr(form,"nascimento",""):(setErr(form,"nascimento","Idade mínima: 16."),errs.push("Nascimento"));
        cepOk(f.cep.value)?setErr(form,"cep",""):(setErr(form,"cep","Use 00000-000."),errs.push("CEP"));
        f.endereco.value.trim()?setErr(form,"endereco",""):(setErr(form,"endereco","Campo obrigatório."),errs.push("Endereço"));
        f.cidade.value.trim()?setErr(form,"cidade",""):(setErr(form,"cidade","Campo obrigatório."),errs.push("Cidade"));
        (f.uf.value && UFs.has(f.uf.value.toUpperCase()))?setErr(form,"uf",""):(setErr(form,"uf","UF inválida."),errs.push("UF"));
        if(f.termos){ f.termos.checked?setErr(form,"termos",""):(setErr(form,"termos","Aceite os termos."),errs.push("Termos")); }

        if(a){
          if(errs.length){ a.style.display="block"; a.className="alert alert-danger"; a.innerHTML="<strong>Corrija:</strong> "+errs.join(", ")+ "."; }
          else{ a.style.display="block"; a.className="alert alert-success"; a.textContent="Cadastro válido! (simulação)"; }
        }
        return !errs.length;
      }

      form.addEventListener("submit",e=>{ e.preventDefault(); validate(); });
      form.addEventListener("input",()=>{ clearTimeout(form._t); form._t=setTimeout(validate,150); });
    }
  };
})();
