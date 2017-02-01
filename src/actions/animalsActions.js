import dispatcher from '../dispatcher';

export function createAnimal(name, qnt) {
	dispatcher.dispatch({
		type: "CREATE_ANIMAL",
		name,
		qnt
	});
}

export function deleteAnimal(id) {
	dispatcher.dispatch({
		type: "DELETE_ANIMAL",
		id
	});
}

export function createSpecie(nameWhen1, nameFrom2To4, nameFrom5) {
	dispatcher.dispatch({
		type: "CREATE_SPECIE",
		nameWhen1,
		nameFrom2To4,
		nameFrom5
	});
}