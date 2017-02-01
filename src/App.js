import React, { Component } from 'react';
import './App.css';
import AnimalsCounter from './animalsCounter/animalsCounter';

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		value: 0
  	};
  }
  changeValue(value) {
  	this.setState({value});
  }
  render() {
    return (
      <div className="App">
      	<AnimalsCounter />
      </div>
    );
  }
}

export default App;
