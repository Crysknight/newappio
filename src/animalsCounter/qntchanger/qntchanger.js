import React, { Component } from 'react';
import './qntchanger.css';

export default class QntChanger extends Component {

	minusValue() {
		if (this.props.value > 1) {
			let value = this.props.value - 1;
			this.props.changeValue(value);
		}
	}

	plusValue() {
		let value = this.props.value + 1;
		this.props.changeValue(value);
	}

	render() {
		return (
			<div>
				<button onClick={this.minusValue.bind(this)} className="qntbutton left"><span>&minus;</span></button>
				<button onClick={this.plusValue.bind(this)} className="qntbutton right"><span>+</span></button>
			</div>
		);
	}
}