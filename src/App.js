import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  };

  validacao = (num) => {
    const maiorNumero = 90;
    if (Number(num) >= 0 && Number(num) <= maiorNumero) {
      return true;
    }
  };

  somaDosTresNumeros = (num1, num2, num3) => {
    const maiorNumero = 210;
    if (Number(num1) + Number(num2) + Number(num3) <= maiorNumero) {
      return true;
    }
  };

  haveChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        const {
          cardName,
          cardDescription,
          cardImage, cardAttr1, cardAttr2, cardAttr3 } = this.state;
        if (
          cardName
          && cardDescription
          && cardImage
          && this.validacao(cardAttr1)
          && this.validacao(cardAttr2)
          && this.validacao(cardAttr3)
          && this.somaDosTresNumeros(cardAttr1, cardAttr2, cardAttr3)
        ) {
          this.setState({
            isSaveButtonDisabled: false,
          });
        } else {
          this.setState({
            isSaveButtonDisabled: true,
          });
        }
      },
    );
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1> Tryunfo</h1>
        <Form
          onInputChange={ this.haveChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
