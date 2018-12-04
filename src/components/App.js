import React, { Component } from 'react';
import Conditions from './common/Conditions';
// import Output from './common/Output';
import './App.css';
import { availableIcons, heroesList } from '../global/consts';
import '../images/ana.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [],
      repeatLimit: 10,
      iconImgSrc: availableIcons['default.png']
    }

    this.updateRepeatLimit = this.updateRepeatLimit.bind(this);
    this.randomizeHero = this.randomizeHero.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
  }

  clearHistory = () => {
    this.setState({
      history: [],
      iconImgSrc: availableIcons['default.png']
    });
  }

  randomizeHero = () => {
    let { history, repeatLimit } = this.state;
    const heroCount = heroesList.length - 1;

    let random;
    do {
      random = Math.floor(Math.random() * (heroCount + 1));
    } while (history.includes(random))

    history = [random, ...history];

    const newImg = availableIcons[heroesList[random]['imgSrc'] || 'default.png'];

    if (history.length > repeatLimit) {
      history = history.slice(0, repeatLimit);
    }
    

    this.setState({
      history,
      iconImgSrc: newImg
    });
  }

  updateRepeatLimit = (limit) => {
    let { history } = this.state;
    const heroCount = heroesList.length;

    limit = Math.min(Math.max(parseInt(limit), 1), heroCount - 1);

    this.setState({
      history,
      repeatLimit: limit
    });
  };

  render() {
    const heroes = this.state.history.map((item, i) => <li key={i}>{heroesList[item]['name']}</li>);

    return (
      <div className="App">
        <Conditions 
          heroCount={heroesList.length}
          limit={this.state.repeatLimit}
          onLimitChange={this.updateRepeatLimit}
        />
        <hr />
        <div className='btnContainer'>
          <button className="randomBtn" onClick={this.randomizeHero}>Random Hero</button>
          <button className="clearHistoryBtn" onClick={this.clearHistory}>Clear History</button>
        </div>
        <hr />
        <img className='heroIcon'
          src={this.state.iconImgSrc}
          alt='hero icon'/>
        <ul className='heroesHistory'>
          {heroes}
        </ul>
      </div>
    );
  }
}

export default App;
