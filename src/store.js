import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
const initialState = ({
	fibonacci: {
		list: [],
		digits: 0
	}
});

export const FETCH_FIBONACCI_LIST_SUCCESS = 'FETCH_FIBONACCI_LIST_SUCCESS';
export const fetchFibonacciListSuccess = list => ({
	type: FETCH_FIBONACCI_LIST_SUCCESS,
	list
})

const fibonacci = (state=initialState, action) => {
	const { type } = action;
	switch (type) {
		case FETCH_FIBONACCI_LIST_SUCCESS:
			return {
				...state,
				fibonacci: {
					list: action.list,
					digits: action.list.length
				}
			}
		
		default:
			return state;
	}
}

const store = createStore(fibonacci, applyMiddleware(reduxPromise));

export default store;