import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="nome-carta">
            Nome da Carta:
            <input id="nome-carta" type="text" data-testid="name-input" />
          </label>
          <br />
          <label htmlFor="descricao-carta">
            Descricao da Carta:
            <textarea
              id="descricao-carta"
              type="textarea"
              data-testid="description-input"
            />
          </label>
          <br />
          <label htmlFor="primeiro-atributo-carta">
            Primeiro atributo:
            <input id="primeiro-atributo-carta" type="number" data-testid="attr1-input" />
          </label>
          <br />
          <label htmlFor="segundo-atributo-carta">
            Segundo atributo:
            <input id="segundo-atributo-carta" type="number" data-testid="attr2-input" />
          </label>
          <br />
          <label htmlFor="terceiro-atributo-carta">
            Terceiro atributo:
            <input id="terceiro-atributo-carta" type="number" data-testid="attr3-input" />
          </label>
          <br />
          <label htmlFor="imagem-carta">
            Imagem:
            <input id="imagem-carta" type="text" data-testid="image-input" />
          </label>
          <br />
          <label htmlFor="raridade-carta">
            Escolha a raridade
            <select data-testid="rare-input" id="raridade-carta">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <br />
          <label htmlFor="super-trunfo">
            Super Trunfo?
            <input
              id="super-trunfo"
              type="checkbox"
              data-testid="trunfo-input"
            />
          </label>
          <br />
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
