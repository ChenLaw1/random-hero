import React, { Component } from 'react';
import Conditions from './common/Conditions';
// import Output from './common/Output';
import './App.css';
import { heroesList } from '../global/consts';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroesList,
      history: [1,2,3],
      repeatLimit: 10
    }

    this.updateRepeatLimit = this.updateRepeatLimit.bind(this);
    this.randomizeHero = this.randomizeHero.bind(this);
  }

  randomizeHero = () => {
    let { history, repeatLimit } = this.state;
    const heroCount = this.state.heroesList.length - 1;

    let random;
    do {
      random = Math.floor(Math.random() * (heroCount + 1));
    } while (history.includes(random))

    history = [...history, random];

    if (history.length > repeatLimit) {
      history = history.slice(-repeatLimit);
    }
    this.setState({history});
  }

  updateRepeatLimit = (limit) => {
    let { history } = this.state;
    const heroCount = this.state.heroesList.length;

    limit = Math.min(Math.max(parseInt(limit), 1), heroCount - 1);

    this.setState({
      history,
      repeatLimit: limit
    });
  };

  render() {
    const heroes = this.state.history.map((item, i) => <li key={i}>{this.state.heroesList[item]}</li>);

    return (
      <div className="App">
        <Conditions 
          heroCount={this.state.heroesList.length}
          limit={this.state.repeatLimit}
          onLimitChange={this.updateRepeatLimit}
        />
        <hr />
        <button className="randomBtn" onClick={this.randomizeHero}>Random Hero</button>
        <hr />
        <ul>
          {heroes}
        </ul>
      </div>
    );
  }
}

export default App;
