import React, { Component } from 'react';
import './animalslist.css';
import Animal from './animal.js';

export default class AnimalsList extends Component {
	addAnimals() {
		this.props.createAnimal();
	}
	
	render() {
		const List = this.props.store.map(animal => {
																	return (
																		<Animal deleteAnimal={this.props.deleteAnimal} dataId={animal.id} key={animal.id} animal={animal}/>
																	);
																});
		return (
			<div className="animalslist">
				<div className="addAnimals">
					<button onClick={this.addAnimals.bind(this)}><span>Добавить</span></button>
				</div>
				<div className="container">
					<div className="row">{List}</div>
				</div>
			</div>
		);
	}
}