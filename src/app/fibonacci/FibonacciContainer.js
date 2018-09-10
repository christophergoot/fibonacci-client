import React, { Component } from 'react';
import { connect } from 'react-redux';
import FibonacciComponent from './FibonacciComponent';
import { fetchFibonacciListSuccess } from '../../store';

function mapStateToProps(state) {
	return {
		list: state.fibonacci.list,
		isLoading: state.fibonacci.isLoading
	};
}

class FibonacciContainer extends Component {
	handleNewRequest = event => {
		event.preventDefault();
		const digits = event.target[0].value;
		const newArr = this.Fibber(digits);
		this.props.dispatch(fetchFibonacciListSuccess(newArr));
	}

	Fibber = digits => {
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
	

	render() {
		return (
			<FibonacciComponent 
				list={this.props.list}
				handleNewRequest={this.handleNewRequest}
				isLoading={this.props.isLoading}
			/>
		);
	}
}

export default connect(
	mapStateToProps,
)(FibonacciContainer);