import React, { Component } from 'react';
import Quantity from './quantity/quantity.js';
import QntChanger from './qntchanger/qntchanger.js';
import AnimalsList from './animalslist/animalslist.js';
import StoreAnimalsList from '../stores/storeanimalslist.js';
import StoreAnimalsSpecies from '../stores/storeanimalsspecies.js';
import * as AnimalsActions from '../actions/animalsActions';

class AnimalsCounter extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		name: StoreAnimalsSpecies.getSpecies()[0].nameWhen1,
  		value: 1,
  		storeAnimalsList: StoreAnimalsList.getList(),
  		storeAnimalsSpecies: StoreAnimalsSpecies.getSpecies()
  	};
  }

  changeName(id, nametype) {
  	this.setState({name: this.state.storeAnimalsSpecies[id][nametype]});
  }

  changeValue(value) {
  	this.setState({value});
  }

  componentWillMount() {
  	StoreAnimalsList.on("change", () => {
  		this.setState({
  			storeAnimalsList: StoreAnimalsList.getList()
  		});
  	});
  	StoreAnimalsSpecies.on("change", () => {
  		this.setState({
  			storeAnimalsSpecies: StoreAnimalsSpecies.getSpecies()
  		});
  	});
  	this.createAnimal('initial', this.state.storeAnimalsSpecies[0].nameWhen1, 1);
  	this.createAnimal('initial', this.state.storeAnimalsSpecies[2].nameFrom5, 5);
  }

  createAnimal(arg, name, value) {
  	if (arg === 'initial') {
  		AnimalsActions.createAnimal(name, value);
  	} else {
	  	AnimalsActions.createAnimal(this.state.name, this.state.value);
	}
  }

  deleteAnimal(id) {
  	AnimalsActions.deleteAnimal(id);
  }

  createSpecie(nameWhen1, nameFrom2To4, nameFrom5) {
  	AnimalsActions.createSpecie(nameWhen1, nameFrom2To4, nameFrom5);
  }

  render() {
    return (
      <div>
      	<Quantity qnt={this.state.value} store={this.state.storeAnimalsSpecies} changeName={this.changeName.bind(this)} createSpecie={this.createSpecie.bind(this)} />
      	<QntChanger value={this.state.value} changeValue={this.changeValue.bind(this)} />
      	<AnimalsList deleteAnimal={this.deleteAnimal.bind(this)} createAnimal={this.createAnimal.bind(this)} store={this.state.storeAnimalsList} />
      </div>
    );
  }
}

export default AnimalsCounter;
