import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    console.log(hasTrunfo);
    return (
      <div>
        <form>
          <label htmlFor="nome-carta">
            Nome da Carta:
            <input
              name="cardName"
              id="nome-carta"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="descricao-carta">
            Descricao da Carta:
            <textarea
              name="cardDescription"
              id="descricao-carta"
              type="textarea"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="primeiro-atributo-carta">
            Primeiro atributo:
            <input
              name="cardAttr1"
              id="primeiro-atributo-carta"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="segundo-atributo-carta">
            Segundo atributo:
            <input
              name="cardAttr2"
              id="segundo-atributo-carta"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="terceiro-atributo-carta">
            Terceiro atributo:
            <input
              name="cardAttr3"
              id="terceiro-atributo-carta"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="imagem-carta">
            Imagem:
            <input
              name="cardImage"
              id="imagem-carta"
              type="text"
              data-testid="image-input0"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="raridade-carta">
            Escolha a raridade
            <select
              name="cardRare"
              data-testid="rare-input"
              id="raridade-carta"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <br />
          <label htmlFor="super-trunfo">
            {hasTrunfo ? (
              <h3>Você já tem um Super Trunfo em seu baralho</h3>
            ) : (
              <div>
                <h3>Super Trunfo?</h3>
                <input
                  name="cardTrunfo"
                  id="super-trunfo"
                  type="checkbox"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </div>
            )}
          </label>
          <br />
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
