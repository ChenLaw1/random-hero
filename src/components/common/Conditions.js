import React, { Component } from 'react';
import './Conditions.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.limitChange = this.limitChange.bind(this);
  }
  limitChange(event) {
    this.props.onLimitChange(event.target.value);
  }

  render() {
    return (
      <form className="conditions">
        <label>Repeat Limit:</label>
        <input 
          type='number' 
          value={this.props.limit} 
          min={1} 
          max={this.props.heroCount - 1}
          onChange={this.limitChange}
        />
      </form>
    );
  }
}

export default App;
