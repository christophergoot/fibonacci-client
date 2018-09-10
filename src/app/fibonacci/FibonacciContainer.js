import React, { Component } from 'react';
import { connect } from 'react-redux';
import FibonacciComponent from './FibonacciComponent';

function mapStateToProps(state) {
	return {
		digits: state.fibonacci.digits,
		list: state.fibonacci.list
	};
}

class FibonacciContainer extends Component {
	handleNewRequest = event => {
		event.preventDefault();
		const digits = event.target[0].value;
		alert(`new request to generate fibonacci to ${digits} digits`);
	}

	render() {
		return (
			<FibonacciComponent 
				digits={this.props.digits}
				list={this.props.list}
				handleNewRequest={this.handleNewRequest}
			/>
		);
	}
}

export default connect(
	mapStateToProps,
)(FibonacciContainer);