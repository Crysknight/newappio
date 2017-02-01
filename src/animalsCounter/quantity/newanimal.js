import React, { Component } from 'react';

export default class NewAnimal extends Component {
	constructor() {
		super();
		this.state = {
			nameWhen1: undefined,
			nameFrom2To4: undefined,
			nameFrom5: undefined
		}
	}

	formComplete(event) {
		switch (event.target.id) {
			case 'nameWhen1': {
				this.setState({nameWhen1: event.target.value});
				break;
			}
			case 'nameFrom2To4': {
				this.setState({nameFrom2To4: event.target.value});
				break;
			}
			case 'nameFrom5': {
				this.setState({nameFrom5: event.target.value});
				break;
			}
			default: {

			}

		}
	}

	createSpecie() {
		if (this.state.nameWhen1 && this.state.nameFrom2To4 && this.state.nameFrom5) {
			this.props.createSpecie(this.state.nameWhen1, this.state.nameFrom2To4, this.state.nameFrom5);
			this.props.switchInput(true);
		}
	}

	render() {
		return (
			<div>
				<h5>Дополни это предложение названием того животного, которое ты хочешь добавить:</h5>
				<p onBlur={this.formComplete.bind(this)}>"По полю бегут 4 <input maxLength="18" id="nameFrom2To4" />.<br /> 
				К ним присоединяется еще 1 <input maxLength="18" id="nameWhen1" />.<br />
				Теперь их стало 5 <input maxLength="18" id="nameFrom5" />!"</p>
				<button onClick={this.createSpecie.bind(this)}>Добавить!</button> 
			</div>
		);
	}
}