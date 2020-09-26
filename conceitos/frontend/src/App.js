import React, {Component} from 'react'; //sempre terá essa linha
import './App.css'
export default class App extends Component{ //instância da classe que herda de component
  render(){//método para renderizar objetos em tela
    return( //retorno de objeto criado
      //obrigatório todo returno de classe ser anotado por <div> ou por um objeto
      <div>
          <h1> Welcome to my first component ReactJS</h1>
      </div>
    )
  }
}
