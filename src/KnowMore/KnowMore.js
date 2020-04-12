import React, { Component } from 'react';
import './KnowMore.css';
import '../palette.css';

class KnowMore extends Component {

  constructor(props) {
    super(props);
    this.scrollHere = React.createRef();
  }

  render() {

    return (
      <div
          ref={this.scrollHere}
          data-aos="fade-in"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="KnowMore light-primary-color primary-text-color">
      <p id='KnowMore'>"Registro britãnico" é uma expressão utilizada para se referir
      a registros de marcações de horario de trabalho que seguem um padrão fixo.
      Por exemplo a marcação sempre compeça as 7h, pausa para almoço das 11h ate
      12h e tem marcação final as 17h. As autoridades trabalhistas no Brasil
      recomendam
      a não utilização de registros que seguem o padrão do registro britãnico como
      prova de marcação de ponto.</p>
      <p>Esse sistema web, muito simples, simula registros que não seguem o padrão
      do registro britãnico. Ele foi desenvolvido utilizando o framework de
      desenvolvimento web ReactJs. Para fazer deploy é utilizado
      o Docker.</p><div className="GithubLogo"><a
      href="https://github.com/roj4s/non_british_register_generator"><img
      alt="Github Repository Link"
      className="GithubLogoImg" src='github-logo.png'
      /></a></div></div>
    );

  }
}
export default KnowMore;
