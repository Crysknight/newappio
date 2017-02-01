import React, { Component } from 'react';
import NewAnimal from './newanimal';

export default class AnimalsName extends Component {
	constructor() {
		super();
		this.state = {
			output: 'select',
			selectedOption: 0,
			nametype: 'nameWhen1',
			selectLast: false
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.qnt !== nextProps.qnt) {
			const qnt = nextProps.qnt;
			const qntAnalyse1 = +(qnt + '').slice(-1);
			const qntAnalyse2 = +(qnt + '').slice(-2);
			if (qntAnalyse1 === 1 && qntAnalyse2 !== 11) {
				this.setState({nametype: 'nameWhen1'});
			} else if (qntAnalyse1 > 1 && qntAnalyse1 < 5 && !(qntAnalyse2 > 11 && qntAnalyse2 < 15)) {
				this.setState({nametype: 'nameFrom2To4'});
			} else {
				this.setState({nametype: 'nameFrom5'});
			}
		}
	}

	componentWillUpdate(nextProps, nextState) {
		if(nextState.selectedOption !== this.state.selectedOption || nextState.nametype !== this.state.nametype) {
			this.props.changeName(nextState.selectedOption, nextState.nametype);
		}
	}

	handleValue(event) {
		this.setState({selectedOption: event.target.options.selectedIndex, selectLast: false});
	}

	switchInput(add) {
		if (this.state.output === 'input') {
			this.setState({output: 'select'});
			if (add) {
				let lastAnimal = this.props.store.length - 1;
				this.setState({selectLast: true, selectedOption: lastAnimal});
			}
		} else {
			this.setState({output: 'input'});
		}
	}

	render() {
		let lastAnimalName;
		const state = this.state.output;
		const Options = this.props.store.map((animal) => {
				if (this.state.selectLast) {
					lastAnimalName = animal[this.state.nametype];
				}
				return (<option key={animal.id}>{animal[this.state.nametype]}</option>);
			}
		)
		let Output;
		let buttonClassname;
		if (state === 'input') {
			Output = (<div className='choosename insertname'>
						<NewAnimal createSpecie={this.props.createSpecie} switchInput={this.switchInput.bind(this)}/>
					  </div>);
			buttonClassname = 'inputbutton';
		} else {
			Output = (<div className='choosename'>
						<select value={lastAnimalName} id="animalSelect" onChange={this.handleValue.bind(this)}>
						{Options}
					 	</select>
					  </div>);
		}
		return (
			<div>
				<div className={`${buttonClassname} animalsnameInput`}>
					{Output}
					<button onClick={this.switchInput.bind(this)}>+</button>
				</div>
			</div>
		);
	}
}