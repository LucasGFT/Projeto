import React from 'react';
import Form from './components/Form';
import './css/app.css';
import Card from './components/Card';
import CardResult from './components/CardResult';

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
    cartas: [],
    hasTrunfo: false,
  };

  validacao = (num) => {
    const maiorNumero = 90;
    if (Number(num) >= 0 && Number(num) <= maiorNumero) {
      return true;
    }
  };

  somaDosTresNumeros = (num1, num2, num3) => {
    const maiorNumero = 270;
    if (Number(num1) + Number(num2) + Number(num3) <= maiorNumero) {
      return true;
    }
  };

  alterarArrayCartas = (array) => {
    const p = array.every((element) => element.cardTrunfo === false);
    if (p) {
      this.setState({
        hasTrunfo: false,
      });
    }
    this.setState({
      cartas: array,
    });
  };

  salvarCartas = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      cartas,
    } = this.state;
    const carta = cartas;
    const obj = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };
    const juncao = (cart, objs) => [...cart, objs];
    this.setState(
      {
        cartas: juncao(carta, obj),
      },
      () => {
        this.setState({
          cardName: '',
          cardDescription: '',
          cardImage: '',
          cardAttr1: '',
          cardAttr2: '',
          cardAttr3: '',
          cardRare: 'normal',
          cardTrunfo: false,
        });
        if (cardTrunfo) {
          this.setState({ hasTrunfo: true });
        }
      },
    );
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
          cardImage,
          cardAttr1,
          cardAttr2,
          cardAttr3,
        } = this.state;
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
      hasTrunfo,
      cartas,
    } = this.state;
    document.title = 'Tryunfo';
    return (
      <div>
        <div>
          <h1>Tryunfo</h1>
          <div className="contact">
            <h3>Contact:</h3>
            <a target="_blank" href="https://github.com/LucasGFT" rel="noreferrer">
              <img
                alt="github"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/lucas-gomes-filgueiras/"
              rel="noreferrer"
            >
              <img
                alt="linkedin"
                src="https://cdn-icons-png.flaticon.com/512/49/49408.png"
              />
            </a>
          </div>
        </div>
        <div className="FormularioECarta">
          <Form
            onInputChange={ this.haveChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.salvarCartas }
            hasTrunfo={ hasTrunfo }
          />
          <div className="cardd">
            <h3>Pre visualização</h3>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardImage={ cardImage }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardRare={ cardRare }
              hasTrunfo={ hasTrunfo }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
        { cartas.length > 0 && (
          <div className="cardResults">
            <h3 className="cartasSalvas">Cartas Salvas</h3>
            <button
              className="removerTodasCartas"
              type="button"
              onClick={ () => this.alterarArrayCartas([]) }
            >
              Remover todas as Cartas
            </button>
          </div>
        ) }
        <br />
        <div className="cardsSalvo">
          {cartas.map((element, index) => (
            <CardResult
              indexs={ index }
              cartas={ cartas }
              cardName={ element.cardName }
              cardDescription={ element.cardDescription }
              cardImage={ element.cardImage }
              cardAttr1={ element.cardAttr1 }
              cardAttr2={ element.cardAttr2 }
              cardAttr3={ element.cardAttr3 }
              cardTrunfo={ element.cardTrunfo }
              cardRare={ element.cardRare }
              key={ element.cardName }
              funcAlterar={ this.alterarArrayCartas }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
