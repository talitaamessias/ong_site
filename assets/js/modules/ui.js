export const UI = (() => {
  function toast(msg){
    let t = document.querySelector(".toast");
    if(!t){ t = document.createElement("div"); t.className = "toast"; t.setAttribute("role","status"); t.setAttribute("aria-live","polite"); document.body.appendChild(t); }
    t.textContent = msg || "Ação realizada.";
    t.classList.add("show");
    clearTimeout(t._t); t._t = setTimeout(()=>t.classList.remove("show"), 2200);
  }
  return {
    bind(){
      const burger=document.querySelector(".hamburger"), drawer=document.querySelector(".mobile-drawer");
      burger && drawer && burger.addEventListener("click",()=>drawer.classList.toggle("open"));
      document.body.addEventListener("click",(e)=>{
        const d=e.target.closest("[data-toast='donate']"); if(d){ e.preventDefault(); toast("Obrigado! (simulação de doação)"); }
        const open=e.target.closest("[data-modal='open']"), close=e.target.closest("[data-modal='close']"); const backdrop=document.querySelector(".modal-backdrop");
        if(open){ e.preventDefault(); backdrop?.classList.add("open"); }
        if(close || (backdrop && e.target===backdrop)){ e.preventDefault(); backdrop?.classList.remove("open"); }
      });
    }
  };
})();
