import React from 'react';
import './App.css';
import HoursCard from './HoursCard/HoursCard';
import KnowMore from './KnowMore/KnowMore';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'material-design-icons/iconfont/material-icons.css'

class App extends React.Component {

  constructor(props){
    super(props);
    AOS.init();
    this.scrollRef = React.createRef();
  }

  render(){

    return (
      <div className="App">
        <HoursCard scrollRef={this.scrollRef}/>
        <KnowMore ref={this.scrollRef} />
      </div>
    );


  }
}

export default App;
