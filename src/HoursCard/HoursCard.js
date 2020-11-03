import React, { Component } from 'react';
import './HoursCard.css';
import ConfigNavbar from '../ConfigNavbar/ConfigNavbar';
import { Button  } from '@material-ui/core';
import { createMuiTheme, withStyles, ThemeProvider  } from
'@material-ui/core/styles';

const RoundedButton = withStyles((theme) => ({
  root: {
      height: '65px',
      width: '65px',
      borderRadius: '100%'
  },
}))(Button);


class HoursCard extends Component {

  constructor(props) {
    super(props);
    this.btnTheme = createMuiTheme({
      palette: {
        primary: {
          main: "#00c853",
          contrastText: "#fff"
        }
      },
    });

    this.state = {
      entries: [],
      entry_hourA: 6,
      entry_minuteA: 30,
      entry_hourB: 10,
      entry_minuteB: 30,
      lunch_hourA: 11,
      lunch_minuteA: 0,
      lunch_hourB: 12,
      lunch_minuteB: 0,
      lunch_durationA: 60, // minutes
      lunch_durationB: 75, // minutes
      journey_duration: 480 // minutes
      };
    this.generateHours = this.generateHours.bind(this);
    this.scroll = this.scroll.bind(this);
  }

  randomInt(s ,e) {

    if(s > e){
      let a = e;
      e = s;
      s = a;
    }

    return parseInt(s + Math.random() * (e - s));

  }

  componentDidMount() {

    this.generateHours();

  }

  randomDateBetween(hours, minutes){

    const now = new Date();
    const A = new Date(now.getFullYear(), now.getMonth(), now.getDay(),
      hours[0], minutes[0], 0);
    const B = new Date(now.getFullYear(), now.getMonth(), now.getDay(),
      hours[1], minutes[1], 0);
    const rndm = this.randomInt(A.getTime(), B.getTime());
    return new Date(rndm);

  }

  generateHours() {

    const entry = this.randomDateBetween([this.state.entry_hourA, this.state.entry_hourB],
        [this.state.entry_minuteA, this.state.entry_minuteB]);
    console.log(entry);
    const lunch = this.randomDateBetween([this.state.lunch_hourA,
      this.state.lunch_hourB],
        [this.state.lunch_minuteA, this.state.lunch_minuteB]);
    const lunchBack = new Date(lunch.getTime() + 3600000);
    const totalTime = this.state.journey_duration * 60000;
    const remainingTime = totalTime - (lunch.getTime() - entry.getTime());
    const clousure = new Date(lunchBack.getTime() + remainingTime);

    let entries = [[entry.getHours(), entry.getMinutes(), lunch.getHours(),
      lunch.getMinutes()], [lunchBack.getHours(), lunchBack.getMinutes(),
      clousure.getHours(), clousure.getMinutes()]];

    for(let i=0 ;i<entries.length; i++){
      let di = entries[i];
      for(let k=0; k<di.length; k++){
        let w = `${di[k]}`;
        if(w.length === 1){
          w = `0${w}`;
        }
        entries[i][k] = w;
      }
    }

    this.setState({
      ...this.state,
      entries: entries
    });

  }

  scroll() {
    console.log(this.props);
        if(this.props.scrollRef)
            this.props.scrollRef.current.scrollHere.current.scrollIntoView({behavior: 'smooth'})
  }

  render() {

    console.log(this.state.entries);
    let entries = this.state.entries.map((e) =>
      <p><strong>{e[0]}:{e[1]}</strong>    |  <strong>{e[2]}:{e[3]}</strong></p> );

    let reloadBtn = (<ThemeProvider theme={this.btnTheme}>
                        <RoundedButton
                            onClick={this.generateHours}
                            size='large'
                            variant="contained"
                            color="primary"
                        >
                          <i className='material-icons'>update</i>
                        </RoundedButton>
                      </ThemeProvider>);

    entries.splice(1, 0, reloadBtn);

    return (
      <div>
      <ConfigNavbar />
      <div className="HoursCard dark-primary-color">
      <div className="hour-items">
        {entries}
      </div>
      <span className="down-arrows" onClick={this.scroll} >
        <i className="material-icons">keyboard_arrow_down</i>
        <i className="material-icons">keyboard_arrow_down</i>
      </span>
      </div>
      </div>

    );

  }
}
export default HoursCard;
