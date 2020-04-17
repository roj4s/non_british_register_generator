import React, { Component } from 'react';
import './ConfigNavbar.css';

class ConfigNavbar extends Component{


  constructor(props){
    super(props);
    this.state = {
      menuOpen: 0
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu () {

    this.setState({
      menuOpen: !this.state.menuOpen
    });

  }

  render() {

    let menuClass = 'config-box';
    if(this.state.menuOpen)
      menuClass += "_open";

    return (
      <div>
        <nav>
              <div onClick={this.toggleMenu} className='hamburguer'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
              </div>
      </nav>
      <div className={menuClass}>
              </div>
      </div>
      );

  }

}

export default ConfigNavbar;
