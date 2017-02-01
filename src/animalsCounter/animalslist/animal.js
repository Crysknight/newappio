import React, { Component } from 'react';

export default class Animal extends Component {
	deleteAnimal(event) {
		if (event.target.className === 'animal') {
			this.props.deleteAnimal(+event.target.attributes[0].value);
		} else {
			this.props.deleteAnimal(+event.target.offsetParent.attributes[0].value);
		}
	}

	render() {
		const qnt = this.props.animal.qnt;
		const name = this.props.animal.animalName;
		let classes = "animal";
		if (name.length > 10 && name.length <= 15) {
			classes = `${classes} fzsmall`;
		} else if (name.length > 15) {
			classes = `${classes} fzsmallest`;
		}
		const style = {backgroundColor: this.props.animal.color};

		return (
			<div className="col-md-3">
				<button onClick={this.deleteAnimal.bind(this)} data-id={this.props.dataId} style={style} className={classes} >
					<span className="animalname">{`${qnt} ${name}`}</span>
					<span className="cross">+</span>
				</button>
			</div>
		);
	}
}