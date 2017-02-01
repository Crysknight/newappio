import React, { Component } from 'react';
import './quantity.css';
import AnimalsName from './animalsname.js';

export default class Quantity extends Component {
	render() {
		const qnt = this.props.qnt;
		return (
			<div className="quantity">
				<div>
					<div className="qntNumber">{qnt}</div>
				</div>
				<AnimalsName qnt={qnt} store={this.props.store} changeName={this.props.changeName} createSpecie={this.props.createSpecie} />
			</div>
		);
	}
}