import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
const initialState = ({
	fobonacci: {
		list: [],
		digits: 0
	}
});

const fibonacci = (state=initialState, action) => {
	const { type } = action;
	switch (type) {
		
		
		default:
			return state;
	}
}

const store = createStore(fibonacci, applyMiddleware(reduxPromise));

export default store;