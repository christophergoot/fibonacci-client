import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FibonacciComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	}
	
	renderFibonacciList = list => {
		return list.map((num, i) => (
			<span className='fibonacci-number' key={i}>
				{num}
			</span>
		));
	}

	render() {
		return (
			<div>
				<form onSubmit={values => this.props.handleNewRequest(values)} className='fibonacci-main'>
					<label htmlFor='fibonacci-digits'>Number of Digits</label>
					<input 
						type='number' 
						placeholder='42' 
						id='fibonacci-digits'
						value={this.state.value}
						onChange={this.handleChange}
						min='1'
						required
					/>
					<input type='submit' value='GENERATE' />
				</form>
				<div id='fibonacci-list'>
					{this.renderFibonacciList(this.props.list)}
				</div>
			</div>
		);
	}
}

FibonacciComponent.propTypes = {
	digits: PropTypes.number.isRequired,
	list: PropTypes.arrayOf(PropTypes.number).isRequired,
	handleNewRequest: PropTypes.func.isRequired
};

export default FibonacciComponent;