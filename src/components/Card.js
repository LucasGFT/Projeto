import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;
    const vazio = '';
    return (
      <div className="card">
        <h3 data-testid="name-card">{cardName}</h3>
        <h5 data-testid="description-card">{cardDescription}</h5>
        <h2 data-testid="attr1-card">{cardAttr1}</h2>
        <h2 data-testid="attr2-card">{cardAttr2}</h2>
        <h2 data-testid="attr3-card">{cardAttr3}</h2>
        <img src={ cardImage } alt={ vazio } data-testid="image-card" />
        <h3 data-testid="rare-card">{cardRare}</h3>
        { !hasTrunfo && cardTrunfo ? <h2 data-testid="trunfo-card">Super Trunfo</h2>
          : null }
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
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Card;
