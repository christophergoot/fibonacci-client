import React, { Component } from 'react';
import { connect } from 'react-redux';
import FibonacciComponent from './FibonacciComponent';
import { fetchFibonacciList } from '../../store';

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
		this.props.dispatch(fetchFibonacciList(digits));
	}

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