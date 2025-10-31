export function CadastroTemplate(){return`
  <section class="container mt-3">
    <h1>Cadastro</h1>
    <figure class="card glass">
      <img src="assets/img/cadastro.jpg" alt="Cadastro">
      <figcaption class="small">Participe como voluntário(a) ou apoiador(a).</figcaption>
    </figure>

    <div id="form-alert" class="alert mt-2" style="display:none"></div>

    <form id="cadastro" action="#" method="post" novalidate class="mt-3">
      <fieldset class="card">
        <legend><strong>Dados Pessoais</strong></legend>
        <div class="grid grid-12">
          <div class="col-6 col-sm-12">
            <label for="nome">Nome Completo</label>
            <input id="nome" name="nome" type="text" placeholder="Seu nome completo" required autocomplete="name">
            <div data-error-for="nome" class="invalid-msg"></div>
          </div>
          <div class="col-6 col-sm-12">
            <label for="email">E-mail</label>
            <input id="email" name="email" type="email" placeholder="voce@exemplo.com" required autocomplete="email">
            <div data-error-for="email" class="invalid-msg"></div>
          </div>
          <div class="col-6 col-sm-12">
            <label for="cpf">CPF</label>
            <input id="cpf" name="cpf" type="text" inputmode="numeric" placeholder="000.000.000-00" required>
            <div class="helper">Formato: 000.000.000-00</div>
            <div data-error-for="cpf" class="invalid-msg"></div>
          </div>
          <div class="col-6 col-sm-12">
            <label for="telefone">Telefone</label>
            <input id="telefone" name="telefone" type="tel" inputmode="tel" placeholder="(00) 00000-0000" required>
            <div class="helper">Formato: (00) 00000-0000</div>
            <div data-error-for="telefone" class="invalid-msg"></div>
          </div>
          <div class="col-4 col-sm-12">
            <label for="nascimento">Data de Nascimento</label>
            <input id="nascimento" name="nascimento" type="date" required>
            <div data-error-for="nascimento" class="invalid-msg"></div>
          </div>
          <div class="col-4 col-sm-12">
            <label for="cep">CEP</label>
            <input id="cep" name="cep" type="text" inputmode="numeric" placeholder="00000-000" required>
            <div data-error-for="cep" class="invalid-msg"></div>
          </div>
          <div class="col-4 col-sm-12">
            <label for="endereco">Endereço</label>
            <input id="endereco" name="endereco" type="text" placeholder="Rua, número, complemento" required autocomplete="address-line1">
            <div data-error-for="endereco" class="invalid-msg"></div>
          </div>
          <div class="col-6 col-sm-12">
            <label for="cidade">Cidade</label>
            <input id="cidade" name="cidade" type="text" required autocomplete="address-level2">
            <div data-error-for="cidade" class="invalid-msg"></div>
          </div>
          <div class="col-6 col-sm-12">
            <label for="estado">Estado</label>
            <select id="estado" name="estado" required autocomplete="address-level1">
              <option value="" selected disabled>Selecione</option>
              <option>AC</option><option>AL</option><option>AP</option><option>AM</option>
              <option>BA</option><option>CE</option><option>DF</option><option>ES</option>
              <option>GO</option><option>MA</option><option>MT</option><option>MS</option>
              <option>MG</option><option>PA</option><option>PB</option><option>PR</option>
              <option>PE</option><option>PI</option><option>RJ</option><option>RN</option>
              <option>RS</option><option>RO</option><option>RR</option><option>SC</option>
              <option>SP</option><option>SE</option><option>TO</option>
            </select>
            <div data-error-for="estado" class="invalid-msg"></div>
          </div>
        </div>
      </fieldset>

      <fieldset class="card mt-3">
        <legend><strong>Interesse</strong></legend>
        <label for="area">Área de interesse</label>
        <select id="area" name="area">
          <option>Voluntariado</option>
          <option>Doações</option>
          <option>Parcerias</option>
          <option>Outros</option>
        </select>
        <div class="mt-2">
          <label for="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows="4" placeholder="Conte como deseja contribuir"></textarea>
        </div>
        <div class="mt-2">
          <label><input id="termos" type="checkbox" name="termos"> Confirmo a veracidade das informações.</label>
          <div data-error-for="termos" class="invalid-msg"></div>
        </div>
      </fieldset>

      <div class="mt-3">
        <input type="submit" class="button" value="Enviar cadastro">
        <button class="button-outline" type="reset">Limpar</button>
      </div>
    </form>
  </section>`;}