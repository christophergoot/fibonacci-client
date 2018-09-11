import { createStore, applyMiddleware } from 'redux';
// import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

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
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 100, Fibber(digits)) // fakes a server resopnse
	}).then(list => dispatch(fetchFibonacciListSuccess(list)));
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
					list: []
				}
			}

		case FETCH_FIBONACCI_LIST_SUCCESS:
			return {
				...state,
				fibonacci: {
					isLoading: false,
					list: action.list
				}
			}
		
		default:
			return state;
	}
}

const store = createStore(fibonacci, applyMiddleware(thunk));

export default store;