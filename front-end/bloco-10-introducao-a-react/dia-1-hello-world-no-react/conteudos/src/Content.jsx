import React, {Component} from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
   return <div>
      { conteudos.map((conteudo) => {
        return <div className="card">
          <h3>O conteúdo é: { conteudo.conteudo }</h3>
          <h4>Status: { conteudo.status }</h4>
          <h4>Bloco: { conteudo.bloco }</h4>
        </div>
      }) }
    </div>
  }
}

export default Content