import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class AnimalsSpecies extends EventEmitter {
	constructor() {
		super();
		this.animalsSpecies = [
			{
				id: 0,
				nameWhen1: 'кот',
				nameFrom2To4: 'кота',
				nameFrom5: 'котов'
			},
			{
				id: 1,
				nameWhen1: 'собака',
				nameFrom2To4: 'собаки',
				nameFrom5: 'собак'
			},
			{
				id: 2,
				nameWhen1: 'конь',
				nameFrom2To4: 'коня',
				nameFrom5: 'коней'
			}
		];
	}

	createSpecie(nameWhen1, nameFrom2To4, nameFrom5) {
		this.animalsSpecies.push({
			id: this.animalsSpecies.length,
			nameWhen1,
			nameFrom2To4,
			nameFrom5
		});

		this.emit("change");
	}

	getSpecies() {
		return this.animalsSpecies;
	}

	handleActions(action) {
		switch(action.type) {
			case 'CREATE_SPECIE': {
				this.createSpecie(action.nameWhen1, action.nameFrom2To4, action.nameFrom5);
				break;
			}
			default: {

			}
		}
	}
}

const animalsSpecies = new AnimalsSpecies();
dispatcher.register(animalsSpecies.handleActions.bind(animalsSpecies));
window.dispatcher2 = dispatcher;

export default animalsSpecies;