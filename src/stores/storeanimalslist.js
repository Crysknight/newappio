import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class AnimalsList extends EventEmitter {
	constructor() {
		super();
		this.animalsList = [];
	}

	createAnimal(animalName, qnt) {
		let color = this.getColor();
		if (color === false) {
			color = 'rgb(255, 245, 250)';
			qnt = 1;
			animalName = 'Моби Дик';
		}
		this.animalsList.push({
			id: this.animalsList.length,
			animalName,
			qnt,
			color
		});

		this.emit("change");
	}

	deleteAnimal(id) {
		let initialId = 0;
		this.animalsList = this.animalsList.filter((animal) => {
			return animal.id !== id;
		});
		this.animalsList = this.animalsList.map((animal) => {
			animal.id = initialId;
			initialId++;
			return animal;
		});

		this.emit("change");
	}

	getColor() {
		let r;
		let g;
		let b;
		let getRand = (val) => Math.round(Math.random() * val);
		r = getRand(255);
		g = getRand(255);
		b = getRand(255);
		if (r > 230 && g > 230 && b > 230) {
			let rand = getRand(2);
			switch (rand) {
				case 0: {
					r = getRand(120);
					break;
				}
				case 1: {
					g = getRand(120);
					break;
				}
				case 2: {
					b = getRand(120);
					break;
				}
				default: {
					b = getRand(120);
				}
			}
		}
		if (r < 150 && g < 150 && b < 150) {
			let rand = getRand(2);
			switch (rand) {
				case 0: {
					r = getRand(30) + 215;
					break;
				}
				case 1: {
					g = getRand(30) + 215;
					break;
					}					
				case 2: {
					b = getRand(30) + 215;
					break;
				}
				default: {
					b = getRand(30) + 215;
				}			
			}
		}
		if ( ((r - g) < 20 && (r - g) > -20) && ((r - b) < 20 && (r - b) > -20) ) {
			let rand = getRand(2);
			switch (rand) {
				case 0: {
					r = getRand(50) + 75;
					break;
				}
				case 1: {
					g = getRand(50) + 75;
					break;
				}
				case 2: {
					b = getRand(50) + 75;
					break;
				}
				default: {
					b = getRand(50) + 75;
				}
			}
		}
		let rand = getRand(100);
		if (rand < 7) {
			r = getRand(50) + 200;
			g = getRand(50) + 200;
			b = getRand(50);
			console.log('yellow submarine!');
		}
		if (rand === 7 || rand === 8) {
			console.log("Moby Dick's in da house!");
			return false;
		} else {
			return `rgb(${r}, ${g}, ${b})`;
		}
	}

	getList() {
		return this.animalsList;
	}

	handleActions(action) {
		switch(action.type) {
			case "CREATE_ANIMAL": {
				this.createAnimal(action.name, action.qnt);
				break;
			}
			case "DELETE_ANIMAL": {
				this.deleteAnimal(action.id);
				break;
			}
			default: {

			}
		}
	}
}

const animalsList = new AnimalsList();
dispatcher.register(animalsList.handleActions.bind(animalsList));
window.dispatcher = dispatcher;

export default animalsList;