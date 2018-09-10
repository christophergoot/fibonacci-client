import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
const initialState = ({
	fibonacci: {
		list: [],
		isLoading: false
	}
});

const Fibber = digits => {
	const fibArr = [0,1];
	if (digits<3) return fibArr.slice(0,digits)
	else {
		for (let i=2; i<digits; i++) {
			const nextNumber = fibArr[i-2] + fibArr[i-1];
			fibArr.push(nextNumber);
		};
		return fibArr
	}
}; 

export const fetchFibonacciList = digits => dispatch => {
	dispatch(fetchFibonacciListStart());
	return Fibber(digits)
		.then(list => dispatch(fetchFibonacciListSuccess(list)));
} 

export const FETCH_FIBONACCI_LIST_START = 'FETCH_FIBONACCI_LIST_START';
export const fetchFibonacciListStart = () => ({
	type: FETCH_FIBONACCI_LIST_START
})

export const FETCH_FIBONACCI_LIST_SUCCESS = 'FETCH_FIBONACCI_LIST_SUCCESS';
export const fetchFibonacciListSuccess = list => ({
	type: FETCH_FIBONACCI_LIST_SUCCESS,
	list
})

const fibonacci = (state=initialState, action) => {
	const { type } = action;
	switch (type) {
		case FETCH_FIBONACCI_LIST_START:
			return {
				...state,
				fibonacci: {
					isLoading: true,
					list: [],
					digits: 0
				}
			}

		case FETCH_FIBONACCI_LIST_SUCCESS:
			return {
				...state,
				fibonacci: {
					isLoading: false,
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