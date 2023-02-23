import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cartas,
      funcAlterar,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      indexs,
    } = this.props;
    // console.log(cartas)
    const vazio = '';
    const removerCarta = (event) => {
      const a = event.target.parentNode.parentNode;
      const cc = cartas.filter(
        (element, index) => index !== Number(a.classList[1]) && element,
      );
      funcAlterar(cc);
    };

    return (
      <div className={ `cardResult ${indexs}` }>
        <div className="carta">
          Name:
          <h3 data-testid="name-card">{`  ${cardName}`}</h3>
        </div>
        <div className="carta">
          Descricao:
          <h5 data-testid="description-card">{cardDescription}</h5>
        </div>
        <div className="carta">
          Atributo1:
          <h2 data-testid="attr1-card">{cardAttr1}</h2>
        </div>
        <div className="carta">
          Atributo2:
          <h2 data-testid="attr2-card">{cardAttr2}</h2>
        </div>
        <div className="carta">
          Atributo3:
          <h2 data-testid="attr3-card">{cardAttr3}</h2>
        </div>
        <div className="image-card-result">
          <img src={ cardImage } alt={ vazio } data-testid="image-card" />
        </div>
        <div className="carta">
          Raridade:
          <h3 data-testid="rare-card">{cardRare}</h3>
        </div>
        <div className="carta">
          {cardTrunfo ? <h2 data-testid="trunfo-card">Super Trunfo</h2> : null}
        </div>
        <div className="carta">
          <button
            type="button"
            className="buttonRemoverCard"
            onClick={ removerCarta }
          >
            Remover Carta
          </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cartas: PropTypes.instanceOf(Object).isRequired,
  indexs: PropTypes.number.isRequired,
  funcAlterar: PropTypes.func.isRequired,
};

export default Card;
