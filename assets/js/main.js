// =================== MENU HAMBÚRGUER (MOBILE) ===================
(() => {
  const burger = document.querySelector(".hamburger");
  const drawer = document.querySelector(".mobile-drawer");
  if (burger && drawer) {
    burger.addEventListener("click", () => drawer.classList.toggle("open"));
  }
})();

// =================== MODAL & TOAST (PROJETOS) ===================
(() => {
  const toast = (() => {
    let el = document.querySelector(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
      document.body.appendChild(el);
    }
    return {
      show(msg) {
        el.textContent = msg || "Ação realizada.";
        el.classList.add("show");
        clearTimeout(el._t);
        el._t = setTimeout(() => el.classList.remove("show"), 2200);
      },
    };
  })();

  document.addEventListener("click", (e) => {
    // botão de doação (toast)
    const donate = e.target.closest("[data-toast='donate']");
    if (donate) {
      e.preventDefault();
      toast.show("Obrigado! (simulação de doação)");
      return;
    }

    // modal abertura/fechamento
    const open = e.target.closest("[data-modal='open']");
    const close = e.target.closest("[data-modal='close']");
    const backdrop = document.querySelector(".modal-backdrop");
    if (open) {
      e.preventDefault();
      backdrop?.classList.add("open");
    }
    if (close || (backdrop && e.target === backdrop)) {
      e.preventDefault();
      backdrop?.classList.remove("open");
    }
  });
})();

// =================== FORMULÁRIO (cadastro.html) ===================
(() => {
  const form = document.querySelector("form#cadastro");
  if (!form) return;

  const onlyDigits = (s) => (s || "").replace(/\D/g, "");
  const maskCPF = (v) =>
    onlyDigits(v).replace(
      /^(\d{3})(\d{3})(\d{3})(\d{0,2}).*/,
      (_, a, b, c, d) => (d ? `${a}.${b}.${c}-${d}` : `${a}.${b}.${c}`)
    );
  const maskPhone = (v) =>
    onlyDigits(v).replace(
      /^(\d{2})(\d{5})(\d{0,4}).*/,
      (_, a, b, c) => (c ? `(${a}) ${b}-${c}` : `(${a}) ${b}`)
    );
  const maskCEP = (v) =>
    onlyDigits(v).replace(
      /^(\d{5})(\d{0,3}).*/,
      (_, a, b) => (b ? `${a}-${b}` : a)
    );

  const fields = {
    nome: form.querySelector("#nome"),
    email: form.querySelector("#email"),
    cpf: form.querySelector("#cpf"),
    telefone: form.querySelector("#telefone"),
    nascimento: form.querySelector("#nascimento"),
    cep: form.querySelector("#cep"),
    endereco: form.querySelector("#endereco"),
    cidade: form.querySelector("#cidade"),
    estado: form.querySelector("#estado"),
    termos: form.querySelector("#termos"),
  };

  fields.cpf?.addEventListener("input", (e) => (e.target.value = maskCPF(e.target.value)));
  fields.telefone?.addEventListener("input", (e) => (e.target.value = maskPhone(e.target.value)));
  fields.cep?.addEventListener("input", (e) => (e.target.value = maskCEP(e.target.value)));

  const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s || "");
  const isPhone = (s) => /^\(\d{2}\)\s\d{5}-\d{4}$/.test(s || "");
  const isCEP = (s) => /^\d{5}-\d{3}$/.test(s || "");
  const isCPF = (cpf) => {
    const s = onlyDigits(cpf);
    if (!s || s.length !== 11 || /(\d)\1{10}/.test(s)) return false;
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += +s[i] * (10 - i);
    let d1 = (sum * 10) % 11;
    if (d1 === 10) d1 = 0;
    if (d1 !== +s[9]) return false;
    sum = 0;
    for (let i = 0; i < 10; i) sum += +s[i++] * (11 - i);
    let d2 = (sum * 10) % 11;
    if (d2 === 10) d2 = 0;
    return d2 === +s[10];
  };
  const isAgeOK = (dateStr) => {
    if (!dateStr) return false;
    const d = new Date(dateStr);
    if (isNaN(d)) return false;
    const n = new Date();
    let age = n.getFullYear() - d.getFullYear();
    const m = n.getMonth() - d.getMonth();
    if (m < 0 || (m === 0 && n.getDate() < d.getDate())) age--;
    return age >= 16;
  };
  const STATES = new Set(
    "AC AL AP AM BA CE DF ES GO MA MT MS MG PA PB PR PE PI RJ RN RS RO RR SC SP SE TO".split(" ")
  );

  const setError = (id, msg) => {
    const el = form.querySelector(`[data-error-for="${id}"]`);
    const field = form.querySelector("#" + id);
    if (el) el.textContent = msg || "";
    if (field) {
      field.classList.toggle("is-invalid", !!msg);
      field.classList.toggle("is-valid", !msg && field.value.trim() !== "");
    }
  };

  const alertBox = document.querySelector("#form-alert");

  function validateAll() {
    const errs = [];
    fields.nome.value.trim() ? setError("nome", "") : (setError("nome", "Campo obrigatório."), errs.push("Nome"));
    isEmail(fields.email.value) ? setError("email", "") : (setError("email", "E-mail inválido."), errs.push("E-mail"));
    isCPF(fields.cpf.value) ? setError("cpf", "") : (setError("cpf", "CPF inválido."), errs.push("CPF"));
    isPhone(fields.telefone.value) ? setError("telefone", "") : (setError("telefone", "Use (00) 00000-0000."), errs.push("Telefone"));
    isAgeOK(fields.nascimento.value) ? setError("nascimento", "") : (setError("nascimento", "Idade mínima: 16 anos."), errs.push("Nascimento"));
    isCEP(fields.cep.value) ? setError("cep", "") : (setError("cep", "Use 00000-000."), errs.push("CEP"));
    fields.endereco.value.trim() ? setError("endereco", "") : (setError("endereco", "Campo obrigatório."), errs.push("Endereço"));
    fields.cidade.value.trim() ? setError("cidade", "") : (setError("cidade", "Campo obrigatório."), errs.push("Cidade"));
    STATES.has(fields.estado.value) ? setError("estado", "") : (setError("estado", "Selecione uma UF."), errs.push("Estado"));
    if (fields.termos) {
      fields.termos.checked ? setError("termos", "") : (setError("termos", "Aceite os termos."), errs.push("Termos"));
    }

    if (alertBox) {
      if (errs.length) {
        alertBox.style.display = "block";
        alertBox.className = "alert alert-danger";
        alertBox.innerHTML = "<strong>Corrija:</strong> " + errs.join(", ") + ".";
      } else {
        alertBox.style.display = "block";
        alertBox.className = "alert alert-success";
        alertBox.textContent = "Cadastro válido! (simulação de envio)";
      }
    }
    return errs.length === 0;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateAll();
  });

  form.addEventListener("input", () => {
    clearTimeout(form._t);
    form._t = setTimeout(validateAll, 160);
  });
})();
