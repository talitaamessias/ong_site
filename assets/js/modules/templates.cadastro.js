export function CadastroTemplate(){
  return `
  <section class="container mt-3">
    <h1>Cadastro</h1>
    <figure class="card mt-2">
      <img src="assets/img/cadastro.jpg" alt="Pessoa preenchendo formulário">
      <figcaption class="small">Participe das nossas ações.</figcaption>
    </figure>

    <div id="form-alert" class="alert" style="display:none"></div>

    <form id="cadastro" class="card mt-2" novalidate>
      <fieldset>
        <legend><strong>Dados Pessoais</strong></legend>
        <div class="grid grid-2">
          <div><label>Nome Completo</label><input id="nome" required placeholder="Seu nome completo"><small class="invalid-msg" data-error-for="nome"></small></div>
          <div><label>E-mail</label><input id="email" type="email" required placeholder="voce@exemplo.com"><small class="invalid-msg" data-error-for="email"></small></div>
          <div><label>CPF</label><input id="cpf" required placeholder="000.000.000-00"><small class="small">Formato: 000.000.000-00</small><small class="invalid-msg" data-error-for="cpf"></small></div>
          <div><label>Telefone</label><input id="telefone" required placeholder="(00) 00000-0000"><small class="small">Formato: (00) 00000-0000</small><small class="invalid-msg" data-error-for="telefone"></small></div>
          <div><label>Data de Nascimento</label><input id="nascimento" type="date" required><small class="invalid-msg" data-error-for="nascimento"></small></div>
          <div><label>CEP</label><input id="cep" required placeholder="00000-000"><small class="invalid-msg" data-error-for="cep"></small></div>
          <div><label>Endereço</label><input id="endereco" required placeholder="Rua, número, complemento"><small class="invalid-msg" data-error-for="endereco"></small></div>
          <div><label>Cidade</label><input id="cidade" required><small class="invalid-msg" data-error-for="cidade"></small></div>
          <div><label>Estado</label><input id="uf" required placeholder="SP, RJ, MG…"><small class="invalid-msg" data-error-for="uf"></small></div>
          <div><label><input id="termos" type="checkbox"> Confirmo a veracidade das informações.</label><small class="invalid-msg" data-error-for="termos"></small></div>
        </div>
      </fieldset>
      <div class="mt-2">
        <button class="button" type="submit">Enviar</button>
        <button class="button-outline" type="reset">Limpar</button>
      </div>
    </form>
  </section>`;
}
